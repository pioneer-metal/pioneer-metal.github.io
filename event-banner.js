/** Date-driven event notices. All comparisons use the explicit offsets in site/events.json. */
(() => {
    'use strict';
    const events = typeof siteEvents === 'undefined' ? [] : siteEvents;
    const banner = document.querySelector('[data-event-banner]');
    const root = document.documentElement;
    const copy = key => (i18nData[root.lang] || i18nData.en)[key] || i18nData.en[key];
    const path = event => `event-${event.id}.html`;
    const status = (event, now) => {
        const start = Date.parse(event.startsAt);
        const end = Date.parse(event.endsAt);
        if (now >= end) return 'past';
        if (now >= start) return 'live';
        return 'upcoming';
    };
    function dateLabel(event) {
        const format = new Intl.DateTimeFormat(root.lang || 'en', {
            month: 'short', day: 'numeric', year: 'numeric', timeZone: event.timeZone
        });
        const start = new Date(event.startsAt);
        const end = new Date(event.endsAt);
        return format.formatRange ? format.formatRange(start, end) : `${format.format(start)} – ${format.format(end)}`;
    }
    function update() {
        const now = Date.now();
        document.querySelectorAll('[data-event-dates]').forEach(element => {
            const event = events.find(item => item.id === element.dataset.eventDates);
            if (event) element.textContent = dateLabel(event);
        });
        document.querySelectorAll('[data-event-status]').forEach(element => {
            const event = events.find(item => item.id === element.dataset.eventStatus);
            if (!event) return;
            const phase = status(event, now);
            element.textContent = copy(`event_${phase}`);
            element.dataset.phase = phase;
            element.hidden = false;
        });
        document.querySelectorAll('[data-event-meeting]').forEach(link => {
            const event = events.find(item => item.id === link.dataset.eventMeeting);
            if (!event) return;
            link.textContent = copy(status(event, now) === 'past' ? 'talk' : 'event_meeting');
        });
        // A live event wins; otherwise show the nearest event inside its notice window.
        const candidates = events.filter(event => {
            const start = Date.parse(event.startsAt);
            return now >= start - (event.bannerDays ?? 60) * 86400000 && now < Date.parse(event.endsAt);
        }).sort((a, b) => {
            const liveA = status(a, now) === 'live';
            const liveB = status(b, now) === 'live';
            return Number(liveB) - Number(liveA) || Date.parse(a.startsAt) - Date.parse(b.startsAt);
        });
        const current = document.querySelector('[data-current-event]')?.dataset.currentEvent;
        const event = candidates.find(item => item.id !== current);
        banner.hidden = !event;
        if (!event) { root.style.setProperty('--event-banner-height', '0px'); return; }
        banner.querySelector('[data-banner-phase]').textContent = copy(`event_${status(event, now)}`);
        banner.querySelector('[data-banner-name]').textContent = event.name;
        banner.querySelector('[data-banner-date]').textContent = `${dateLabel(event)} · ${event.city}`;
        const link = banner.querySelector('a');
        link.href = path(event);
        banner.querySelector('[data-banner-link]').textContent = copy('event_details');
        root.style.setProperty('--event-banner-height', `${banner.offsetHeight}px`);
    }
    new ResizeObserver(() => root.style.setProperty('--event-banner-height', `${banner.hidden ? 0 : banner.offsetHeight}px`)).observe(banner);
    document.addEventListener('site:languagechange', update);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) update(); });
    window.addEventListener('pageshow', update);
    update();
    // Re-evaluate without navigation, including when a tab stays open over the boundary.
    setInterval(update, 30000);
    events.forEach(event => {
        for (const boundary of [Date.parse(event.startsAt) - (event.bannerDays ?? 60) * 86400000, Date.parse(event.startsAt), Date.parse(event.endsAt)]) {
            const delay = boundary - Date.now();
            if (delay > 0 && delay < 2147483647) setTimeout(update, delay + 50);
        }
    });
})();
