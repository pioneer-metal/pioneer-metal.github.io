"""Render event stories and detail pages from site/events.json."""
from html import escape
from urllib.parse import quote


def event_path(event):
    return 'event-' + event['id'] + '.html'


def dates(event):
    # English fallback; the browser formats dates for the selected site language.
    from datetime import datetime
    start = datetime.fromisoformat(event['startsAt'])
    end = datetime.fromisoformat(event['endsAt'])
    if start.month == end.month and start.year == end.year:
        return f'{start:%B} {start.day}–{end.day}, {end.year}'
    return f'{start:%B} {start.day}, {start.year} – {end:%B} {end.day}, {end.year}'


def story(event):
    e = {key: escape(str(value), quote=True) for key, value in event.items() if not isinstance(value, dict)}
    return f'''<article class="news-story event-news wrap" id="{e['id']}">
 <figure data-reveal><a href="{event_path(event)}"><img src="{e['cover']}" data-local="{e['poster']}" data-fallback-alt="{e['name']} exhibition poster" alt="{e['name']} official event image" loading="eager" decoding="async"></a></figure>
 <div class="news-copy">
  <h2 data-reveal>{e['name']}</h2>
  <p class="event-status" data-event-status="{e['id']}" hidden></p>
  <p><time datetime="{e['startsAt']}" data-event-dates="{e['id']}">{dates(event)}</time><br>{e['city']}</p>
  <p data-i18n="{e['summaryKey']}" data-reveal></p>
  <a class="button" data-i18n="event_details" href="{event_path(event)}">View event details</a>
 </div>
</article>'''


def detail(event):
    e = {key: escape(str(value), quote=True) for key, value in event.items() if not isinstance(value, dict)}
    partner = {key: escape(value, quote=True) for key, value in event['partner'].items()}
    subject = quote(event['name'] + ' 2026 meeting')
    return f'''<article class="event-detail" data-current-event="{e['id']}">
 <header class="event-opening wrap section-space">
  <h1 class="page-title" data-reveal>{e['name']}</h1>
  <p class="lead"><time datetime="{e['startsAt']}" data-event-dates="{e['id']}">{dates(event)}</time><br>{e['city']}</p>
  <p class="event-status" data-event-status="{e['id']}" hidden></p>
 </header>
 <figure class="event-cover wrap" data-reveal>
  <img src="{e['cover']}" data-local="{e['poster']}" data-fallback-alt="{e['name']} exhibition poster" alt="{e['name']} official event image" loading="eager" decoding="async">
  <figcaption data-cover-credit><span data-i18n="event_image_credit">Event photography:</span> <a class="text-link" href="{e['coverSource']}" target="_blank" rel="noopener">{e['coverCredit']}</a></figcaption>
 </figure>
 <section class="event-information wrap section-space">
  <div>
   <h2 data-i18n="{e['detailHeadingKey']}" data-reveal>Meet us in Istanbul</h2>
   <p data-i18n="{e['summaryKey']}" data-reveal></p>
   <dl class="event-facts">
    <div data-reveal><dt data-i18n="event_when">When</dt><dd><time datetime="{e['startsAt']}" data-event-dates="{e['id']}">{dates(event)}</time></dd></div>
    <div data-reveal><dt data-i18n="event_where">Venue</dt><dd>{e['venue']}<br>{e['city']}</dd></div>
    <div data-reveal><dt data-i18n="event_partner">Exhibition partner</dt><dd><a class="text-link" href="{partner['url']}" target="_blank" rel="noopener">{partner['name']} ↗</a></dd></div>
   </dl>
   <div class="event-actions">
    <a class="button" data-event-meeting="{e['id']}" data-i18n="event_meeting" href="contact.html?subject={subject}">Arrange a meeting</a>
    <a class="text-link" data-i18n="event_official" href="{e['url']}" target="_blank" rel="noopener">Official fair website ↗</a>
   </div>
   <p class="small event-time-note" data-i18n="event_time_note">Dates and status follow Istanbul local time.</p>
  </div>
  <aside class="event-partner">
   <a href="{partner['url']}" target="_blank" rel="noopener" data-reveal><img src="{partner['logo']}" alt="{partner['name']}" loading="lazy" decoding="async"></a>
   <h2 data-i18n="event_together">Exhibiting together</h2>
   <p data-i18n="{e['partnerSummaryKey']}"></p>
   <a class="text-link" href="{partner['url']}" target="_blank" rel="noopener" data-i18n="event_partner_site">Visit our partner ↗</a>
   <figure class="event-product" data-reveal>
    <a href="products.html#reinforcement"><img src="{{{{asset:Products_01.jpg}}}}" data-local="resources/Products_01.jpg" alt="Pioneer galvanized steel reinforcement profiles" loading="lazy" decoding="async"></a>
    <figcaption data-i18n="p1-name">Steel Reinforcement</figcaption>
   </figure>
  </aside>
 </section>
 <section class="event-poster-section wrap section-space">
  <div><h2 data-i18n="event_poster" data-reveal>Exhibition poster</h2><p data-i18n="{e['posterIntroKey']}">Pioneer Metal and Tonish UPVC at Eurasia Window Fair 2026.</p><a class="text-link" href="{e['poster']}" target="_blank" rel="noopener" data-i18n="event_full_poster">Open full-size poster ↗</a></div>
  <a class="event-poster" data-reveal href="{e['poster']}" target="_blank" rel="noopener"><img src="{e['poster']}" alt="{e['name']} exhibition poster with dates, venue and partner information" loading="lazy" decoding="async"></a>
 </section>
 <div class="event-return wrap"><a class="text-link" href="news.html" data-i18n="back_news">Back to News</a></div>
</article>'''
