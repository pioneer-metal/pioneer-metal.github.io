# Pioneer Metal / refresh_v2

## Brief and audience

A full redesign for purchasing teams, window and door manufacturers, construction-system suppliers, and OEM partners. The primary action is to explore the actual profiles and start an inquiry. Static HTML remains compatible with GitHub Pages.

## Subject inventory

- Pioneer Metal Products Factory, with its red emblem and silver material.
- Cold-rolled steel sections for window systems and industrial infrastructure.
- Steel reinforcement for uPVC and aluminium windows and doors.
- Drywall and ceiling framing.
- Custom hot-rolling, punching, and CNC work from technical drawings.
- Production-line, roller, warehouse, and shipping photographs owned by the project.
- Folded, thin-walled cross-sections photographed in Products_03.jpg.
- 9,000+ annual tons, 280+ customers, and exports to 24+ countries: existing published figures.
- 18+ years of experience and references to activity since 2006: retained published information.
- Lijialong sealing-strip cooperation, OEM customers, and Melan Trade logistics.
- FENSTERBAU FRONTALE, Nuremberg, 24–27 March 2026; FESQUA, São Paulo, 9–12 September 2026.
- Existing reinforcement-steel PDF, phone +86 136 5671 4278, email pioneermetal@163.com, WhatsApp destination, and original map coordinates.

The supplied catalogue cover verifies the postal address: 106 East Street, Xinzhen Town, Hebei, China. The original map coordinates are retained.

## Argument and copy deck

Home: Pioneer Metal produces cold-rolled steel profiles → name at architectural scale, material study, and real sections. The factory makes the sections → actual factory photography and company description. Supply is established → published figures and existing cooperation relationships. Find the appropriate product → working product selector with actual photographs and original descriptions. Start an inquiry → real Contact page.

About: Manufacturing Power → original factory and roller photographs. Our Story → existing company introduction, automated production, and precision-engineering information. Production and delivery → factory, machine, and shipment photographs. Capacity → the published experience and annual-tonnage figures. Partnership → all three existing cooperation descriptions.

Products: Steel Profiles → original product categories and descriptions. Steel Reinforcement → actual profiles, use in uPVC/aluminium windows and doors, real PDF. Drywall & Ceiling → actual framing images, original description, catalogue availability stated honestly. Custom Fabrication → real section photo, hot-rolling/punching/CNC description, WhatsApp inquiry.

News: Global exhibitions → both 2026 events, exact dates, locations, photographs and their product focus. Dates are presented as records rather than future invitations.

Contact: Let's connect → existing phone/email, a genuine email-inquiry form, WhatsApp, and the original location map. The form opens the visitor's email app; it does not claim to submit to a backend.

## Direction and idea

Dealt direction: The name as a monument. Seed: 840202196. Type: Bodoni Moda / Jost. Palette: Pioneer red, silver-white, graphite. The two-ink hero blueprint is resolved to one ink in accordance with the skill's headline rule.

On this page, Pioneer's name and photographed folded steel sections become a monument followed by a sequence of material and factory views. The letterforms are treated at the scale of the steel lengths in its warehouse. This is a brand treatment rather than a claim of exclusive product geometry.

Live thing: a product selector using the three existing categories, actual product images and their real catalogue/inquiry destinations. Without JavaScript its links go to the corresponding product sections.

The Products page has a second, page-specific selector for C, U and tube sections. Dimensions, thicknesses, grades and standard come from the supplied catalogue, page 3. The diagrams are simplified schematics, explicitly not to scale. All three tables remain available without JavaScript; selecting a shape carries it to the inquiry draft.

Redraw: list-poster-lines replaced with list-sticky-photo-active-list. The original calls for four to seven very short poster words; Pioneer has three product categories with longer names and full descriptions.

## Assets and behaviour

Working pre-existing asset URLs continue to reference refs/heads/main. Logo_White.png, Products_010.jpg and Products_04.jpg use bundled copies because the original main-branch URLs return 404. Other remote images retain local error fallbacks. Logo_White.png is used on dark surfaces. resources/profile-study.webp is a generated artistic studio visualization, derived from Products_03.jpg, and described as such in its alt text. It is not presented as documentary factory photography or a technical drawing. There are no new statistics, testimonials, customers, specifications, or sample product claims.

Shared header/footer and page fragments live under site/. Run python3 scripts/build_site.py to regenerate the five static root pages. CSS tokens, shared interactions, translation data, reduced motion, keyboard focus, and responsive layout are centralized.

The canonical ten-language copy is site/strings.json; translations.js is generated. The build hashes the shared CSS/JS into cache versions automatically. It needs Python's standard library only. Existing main-branch image URLs stay in the generated source with checked-in resource files as load-error fallbacks.

Motion: masked name entrance; individually staggered section elements; a subtle image drift; short feedback on controls. Content is visible without script and under reduced motion.

Open-collection video search returned historical industrial footage rather than footage of this factory. None is used. The moving-picture treatment uses the project's stills instead.

## Content reconciliation

The supplied PDF has a 2025 filename and 2026 document metadata. Its page 9 lists 7,000+ annual tons, while the existing website lists 9,000+. The existing website's 9,000+ figure is retained; no new capacity number is asserted. The catalogue-derived specifications are explicitly linked to their source. Edition dates are omitted from the catalogue description.

## Critique log

ROUND 1
Seen in one second: the Pioneer name as a large red-and-white poster.
Idea: the company name is given the scale of its steel, followed by material and factory views.
Live thing: application selector with actual product photographs and working destinations.
Layout words by section: hero=monument / material=unequal-band / company=side-facts / capacity=figure-lines / products=sticky-selector / partnerships=reading-rows / inquiry=word-band / footer=cropped-name.
Scores: design 7.5 · usability 7.8 · creativity 7.0 · content 8.0 → overall 7.55.
Caps applied: none; all five pages passed measured layout checks.
Top three problems: mobile-fold had excessive empty red space, fixed with a real production-photo insert beneath the name; desktop-page-02 showed the Inquire descender crossing its field, fixed with glyph clearance; all first folds showed the logo emblem flattened by an image filter, fixed by using the actual white logo asset.
The mobile photo is an adaptation of the parent direction's photograph-under-name composition, introduced during the screenshot critique.

ROUND 2
Seen in one second: a red typographic identity followed by sculptural silver and real factory views.
Idea and live thing: unchanged, with catalogue-backed section selection added to Products.
Scores capped at 6.0 while the inquiry prompt was measured as an eyebrow above its oversized action. The prompt was moved below the action. Products' redundant generic inquiry band was removed because that page already ends with its direct custom-fabrication inquiry.

ROUND 3 / final
Seen in one second: Pioneer, at the scale of the material it makes.
Idea: the name is a monument; real folded sections and catalogue data supply the substance beneath it.
Live things: application selector on Home; catalogue section selector on Products, with selected shape carried into Contact.
Layout words by section: monument / unequal-band / side-facts / figure-lines / sticky-selector / reading-rows / word-band / cropped-name. Interior pages use image splits, staggered factory images, genuine specification tables, exhibition stories, and an inquiry form.
Scores: design 8.1 · usability 8.5 · creativity 7.0 · content 8.0 → overall 8.0 (self-critique, not an independent jury score).
Caps applied: creativity capped at 7 because the monument approach is a known composition, even though the content, actual factory imagery and profiles belong to Pioneer.
Remaining limits: original photographs vary in resolution; real Pioneer footage would improve the moving-picture sequence. The only generated picture is profile-study.webp, not a technical specification. No found photographs or film clips were used, and no sample business proof or placeholders were added.

## Final validation

- Source lint across all five pages, shared CSS, behaviour and generated translations: 0 FAIL / 0 WARN.
- Real-browser inspection at 1440, 768 and 390px: every page 0 FAIL. Home retains two warnings (white body text on brand red passes AA at 4.9:1; no documentary footage). Other pages retain only the no-footage warning. Motion uses the project's still photographs and the studio study rather than misrepresenting archival footage as this factory.
- All listed viewport and page screenshots reviewed, including full-page review sheets for each page.
- All five pages checked in all ten locales at 320px: no horizontal overflow or headings over two lines.
- Actual browser interactions verified: application selector, C/U/tube selection, selected section passed into Contact, mobile menu open/close, both themes, correct logo in each theme.
- JavaScript syntax, unique IDs, one main heading per page, internal links and anchors, image fallback paths, translation-key coverage, and deterministic static generation checked.
- Inquiry behaviour is intentionally an email draft handoff. No message was sent during verification. Copy controls are present; clipboard permission-dependent behaviour was not exercised.
- Reduced-motion and no-script fallbacks are implemented and reviewed in source; no claim of separate browser emulation is made.

## Display typography

The revised display face is Manrope (400 for the homepage title, 500 for section headings), paired with the existing Jost body face. The same display family appears in page titles, inquiry lettering and the footer. The former Bodoni optical-size rules have been removed.

## Baseline

The old five-page source lint reported 97 FAIL and 95 WARN. The old homepage browser inspection reported 11 FAIL and 7 WARN. Its hero fit well, but stock card grids, decorative labels, small grey text, floating navigation, and inconsistent composition capped the critique at 6.0.

## Client-directed hero revision — October 2026

The client requested a rotating Pioneer mark inspired by https://www.q-industrial.com/. This is a hero refinement, so the existing direction and page structure are retained rather than redrawn. On this page, Pioneer's octagonal seal becomes a metal object, tying its brand to the steel it manufactures. The name remains the headline; the existing product description and Explore products action retain the first-screen claim and destination.

The emblem's five white shapes follow the curves in the supplied Favicon.svg, then are extruded over an octagonal red metal body with silver detailing on both faces. Three.js 0.180.0 is bundled locally with its MIT license; there is no runtime dependency on a 3D CDN. The reference site's models, code and imagery are not reused. The original favicon remains the fallback if modules, geometry loading or WebGL fail.

The live object rotates slowly, supports horizontal dragging, and has a translated pause/resume control in all ten locales. Reduced motion starts it paused. Rendering stops when the emblem is outside the viewport or the document is hidden; pixel ratio is capped at 1.75. The module is loaded only on Home.

Visual review: all five pages pass the skill inspector at 1440, 768 and 390px, with only the previously documented no-footage warning. Screenshots at all widths were reviewed. Pause, resume, horizontal drag and light/dark theme changes were exercised in the browser. Reduced motion and WebGL fallback were reviewed in source; separate emulation was not run.

Self-critique: design 8.3, usability 8.5, creativity 7.4, content 8.0; weighted overall 8.1/10. The logo is a deliberate brand sculpture rather than a product claim. It preserves the supplied silhouette, though the lighting and metal finish remain an artistic interpretation. No new found media, proof or sample business content were added.

## Eurasia Window Fair announcement

The existing art direction is retained. The new News story leads the exhibition list in chronological order and links to a static details page with the venue, dates, exhibition partner, meeting enquiry, organizer link and original full-size poster. Event content and banner settings are generated from site/events.json; maintenance instructions are in site/EVENTS.md.

The modular banner uses explicit timezone offsets for its Upcoming / Live / hidden lifecycle, formats dates in Europe/Istanbul, and keeps a Past event label on the archived story. The existing hero accounts for banner height. No server, scheduled job or status-only deployment is required. Device clock accuracy remains the expected static-site limitation.

The client-supplied poster and Tonish logo are preserved. The organizer cover is loaded from the client-supplied URL and credited when shown; client artwork is the stable local fallback. The product photograph is Pioneer's own existing Products_01.jpg. No claims about a booth number, visitor statistics or attendance outcomes were added.

Visual self-review: design 8.1, usability 8.5, creativity 7.0, content 8.4; overall 8.0/10. The details page, News and banner-bearing Home passed inspection at desktop, tablet and mobile widths. The details page's 13 moving elements are sufficient for an information-focused announcement; no extra motion or unrelated footage was added solely to satisfy a count. Local references and anchors across all six pages pass, including Git's exact filename casing. Date boundary comparisons were reviewed in source; no browser clock emulation was performed.


## Image delivery

Original asset URLs and images are retained. The build adds local WebP sources for production photographs and supplied event artwork; browsers that do not support WebP use the original image sources. Profile selections preload the optimized version and fall back to the original remote and local images. Generate variants with `scripts/optimize_images.py` (Pillow required); variants are capped at 2400 pixels and saved at quality 84. The homepage hero is 518 KiB instead of 6151 KiB.

The rotating emblem reads the supplied SVG paths as cubic Bézier curves and extrudes those paths in Three.js; the static PNG remains the WebGL fallback. The SVG is versioned with the shared build assets.
