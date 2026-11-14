"""Build the static pages from shared shell and page fragments."""
from pathlib import Path
import re
import json
import hashlib
from html import escape
from datetime import datetime
from event_pages import story, detail, event_path

ROOT = Path(__file__).resolve().parent.parent
ASSETS = 'https://raw.githubusercontent.com/pioneer-metal/pioneer-metal.github.io/refs/heads/main/resources/'
PAGES = {'index': ('home', 'Steel profiles, formed at Pioneer'),
         'about': ('about', 'Manufacturing at Pioneer'),
         'products': ('products', 'Steel profiles and custom fabrication'),
         'news': ('news', 'Global exhibitions'),
         'contact': ('contact', 'Start a conversation')}
EVENTS = json.loads((ROOT / 'site/events.json').read_text())
seen_event_ids = set()
for event in EVENTS:
    if not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', event['id']) or event['id'] in seen_event_ids:
        raise ValueError('Event ids must be unique, lowercase URL-safe slugs')
    seen_event_ids.add(event['id'])
    start, end = datetime.fromisoformat(event['startsAt']), datetime.fromisoformat(event['endsAt'])
    if start.tzinfo is None or end.tzinfo is None or end <= start or event.get('bannerDays', 60) < 0:
        raise ValueError(f"Invalid event schedule: {event['id']}")
EVENT_PAGES = {event_path(event).removesuffix('.html'): event for event in EVENTS}
PAGES.update({name: ('news', event['name']) for name, event in EVENT_PAGES.items()})
(ROOT / 'events.js').write_text('/* Generated from site/events.json. */\nconst siteEvents = ' + json.dumps(EVENTS, ensure_ascii=False, indent=2) + ';\n')
COPY = json.loads((ROOT / 'site/strings.json').read_text())
(ROOT / 'translations.js').write_text('/* Generated from site/strings.json by scripts/build_site.py. */\nconst i18nData = ' + json.dumps(COPY, ensure_ascii=False, indent=2) + ';\n')
VERSION = hashlib.sha256(b''.join((ROOT / name).read_bytes() for name in ['style.css', 'main.js', 'translations.js', 'hero-emblem.js', 'resources/Favicon.svg', 'event-banner.js', 'events.js'])).hexdigest()[:10]
FAVICON_VERSION = hashlib.sha256((ROOT / 'resources/Favicon.png').read_bytes()).hexdigest()[:10]

for filename, (page, title) in PAGES.items():
    header = (ROOT / 'site/header.html').read_text()
    header = header.replace(f'data-page="{page}"', f'data-page="{page}" aria-current="page"')
    content = detail(EVENT_PAGES[filename]) if filename in EVENT_PAGES else (ROOT / f'site/pages/{filename}.html').read_text()
    content = content.replace('{{event_news}}', '\n'.join(story(event) for event in sorted(EVENTS, key=lambda event: datetime.fromisoformat(event['startsAt']), reverse=True)))
    footer = (ROOT / 'site/footer.html').read_text()
    hero_script = f'    <script type="module" src="hero-emblem.js?v={VERSION}"></script>' if page == "home" else ""
    html = f'''<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Pioneer Metal Products Factory. Cold-rolled steel reinforcement, drywall and ceiling sections, and custom fabrication for global partners.">
    <meta name="theme-color" content="#f4f4f0">
    <title>{title} | Pioneer Metal</title>
    <link rel="icon" type="image/png" href="resources/Favicon.png?v={FAVICON_VERSION}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&family=Manrope:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css?v={VERSION}">
    <script>try{{document.documentElement.dataset.theme=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}}catch(e){{}}</script>
    <script src="translations.js?v={VERSION}" defer></script>
    <script src="events.js?v={VERSION}" defer></script>
    <script src="main.js?v={VERSION}" defer></script>
    <script src="event-banner.js?v={VERSION}" defer></script>
{hero_script}
</head>
<body class="{page}" id="top">
    <a class="skip-link" href="#main">Skip to content</a>
    <aside class="event-banner" data-event-banner hidden aria-label="Exhibition announcement">
      <a href="news.html"><span class="banner-event"><strong data-banner-phase></strong><span data-banner-name></span></span><span data-banner-date></span><span class="banner-link" data-banner-link></span></a>
    </aside>
    {header}
    <main id="main">{content}</main>
    {footer}
</body>
</html>
'''
    html = re.sub(r'\{\{asset:([^}]+)\}\}', lambda m: ASSETS + m[1], html)
    # Prefer locally compressed photos, retaining the original main-branch src and fallback.
    def optimize_image(match):
        tag = match.group(0)
        local = re.search(r'data-local="resources/(?:events/)?([^"/]+\.(?:jpe?g|png))"', tag, re.I) or re.search(r'src="resources/(?:events/)?([^"/]+\.(?:jpe?g|png))"', tag, re.I)
        if not local or 'data-fallback-alt' in tag:
            return tag
        optimized = ROOT / 'resources/optimized' / (local[1] + '.webp')
        if not optimized.is_file():
            return tag
        return f'<picture class="optimized-image"><source type="image/webp" srcset="resources/optimized/{local[1]}.webp">{tag}</picture>'
    html = re.sub(r'<img\b[^>]*>', optimize_image, html)

    for key, copy in COPY['en'].items():
        pattern = r'(<[a-zA-Z][^>]*)(>\s*)' + re.escape(copy) + r'(\s*</[a-zA-Z][^>]*>)'
        def annotate(match):
            if 'data-i18n=' in match[1] or 'data-copy=' in match[1]:
                return match[0]
            return f'{match[1]} data-i18n="{key}"{match[2]}{copy}{match[3]}'
        html = re.sub(pattern, annotate, html)
        # The static, no-script page must carry the same canonical English copy.
        translated = r'(<(?P<tag>[a-z][a-z0-9]*)\b[^>]*data-i18n="' + re.escape(key) + r'"[^>]*>)[\s\S]*?(</(?P=tag)>)'
        rendered_copy = escape(copy, quote=False).replace('&lt;br&gt;', '<br>')
        html = re.sub(translated, lambda match: match[1] + rendered_copy + match[3], html)
    (ROOT / f'{filename}.html').write_text(html)
    print(f'Built {filename}.html')
