# Vendor-go-live: draaiboek

## Gefaseerd, besluit nog bij Max

Dit is een voorstel (fase 0, november 2026), nog geen besluit. Het draaiboek hieronder (alles op
één dag) blijft staan tot Max kiest; pas als hij voor de fasen kiest, geldt het als vervangen.

De code ondersteunt beide routes. De ene schakelaar `vendorsLive` is vervangen door losse
schakelaars in `src/data/livegang.mjs`, die allemaal standaard uit staan:

| Schakelaar | Wat hij doet |
|---|---|
| `claudeHub` | /claude indexeerbaar en in de sitemap |
| `claudeHubLinks` | de automatische link naar /claude op Claude-artikelen en gidsen (alleen samen met `claudeHub`) |
| `chatgpt`, `gemini`, `copilot`: `{ aan, paginas }` | een vendor live; `paginas` is de lijst slugs (`'index'` = de hub, `null` = alles) |
| `homepageNeutraal` | alleen check 9 van `scripts/onpage-check.mjs`: welke H1 "Claude zakelijk" moet dragen |

Een vendorpagina wordt gebouwd als hij niet op de schraplijst staat (`geschrapt` in
`src/data/vendors.mjs`), live is (status en datum) en zijn schakelaar aan staat. Voor een preview
van alle 27 pagina's: `STAGING=1 STAGING_VENDORS=alle npm run build` (alleen met `STAGING=1`).
De vergelijkingen copilot/vs-chatgpt en gemini/vs-chatgpt staan op
`/vergelijken/copilot-vs-chatgpt` en `/vergelijken/gemini-vs-chatgpt` en hangen aan hun vendor.

Fasen (uit het onderzoek, `implementeren-ai-seo-all-ai/research/D-migration.md` sectie 4b):

- **Fase 0, voorbereiding:** schraplijst (38 naar 27 pagina's), vergelijkingen naar /vergelijken,
  schema-`about` per vendorpagina, schakelaars. Niets gaat live behalve het `about` van /over
  (de organisatie in plaats van Claude).
- **Fase 1, pilot met 6 URL's:** `claudeHub` aan, `copilot: { aan: true, paginas: ['index',
  'prijs-zakelijk', 'avg', 'chat', 'vs-chatgpt'] }`, en die vijf bestanden op `published`. De
  homepage krijgt dan vanzelf één linkblok naar /claude en /copilot, en /over vervangt "één tool"
  door een zin die Copilot noemt. Title, H1 en hero van de homepage blijven gelijk.
- **Fase 2:** ChatGPT en Gemini, hub plus 4 pagina's elk, in groepen van 5 (`paginas`-lijsten).
- **Fase 3:** de rest, maximaal 5 per week.
- **Fase 4:** sitebrede teksten (footer, entiteit, menu).
- **Fase 5:** homepage neutraal, met `homepageNeutraal` aan in dezelfde PR.

Tussen de fasen zitten meetpunten (G1 tot G5 in het onderzoek). In het draaiboek hieronder
betekent "`vendorsLive = true`" in de gefaseerde opzet: alle schakelaars aan.

## Alles op één dag (besluit Max, 6 november 2026)

Besluit Max, 6 november 2026. Alle vendorpagina's (ChatGPT, Gemini, Copilot) worden eerst
klaargezet en gaan daarna op één dag tegelijk live, samen met de neutrale homepage.

## Tot de go-live

- Vendorpagina's hebben `status: review`. Ze worden niet gebouwd, staan niet in de sitemap
  en niets linkt ernaar. Een PR mergen zet dus niets live.
- Alle schakelaars in `src/data/livegang.mjs` staan uit (vroeger `vendorsLive = false`). Komt er toch een pagina op
  `published`, dan blijft hij noindex en buiten de sitemap.
- Nieuwe vendor-PR's volgen hetzelfde: `status: review`, nooit `published`.
- Let op: de CI-gate (`quality-gate.py --all`) slaat `review`-bestanden over. Draai de gate per
  PR op het bestand zelf, met de status tijdelijk op `published` (niet committen).

## Voorwaarden voor de go-live-dag

1. **Domeinverhuizing is geland.** De Claude-vertoningen van claudezakelijk.nl staan in
   Search Console op implementeren.ai, vooral "claude zakelijk" en de homepage. Peilmoment is
   de week-4-check van 24 november. Change of Address is ook voor de www-property bevestigd.
2. **Er is een Claude-hub** (bijvoorbeeld `/claude`) die "claude zakelijk" overneemt van de
   homepage: eigen title, H1 en FAQ, en de Claude-pagina's linken ernaar.
   Gebouwd op `/claude` (`src/pages/claude.astro`). De hub hangt aan dezelfde schakelaar:
   zolang `vendorsLive` false is, is hij noindex en buiten de sitemap en tonen de
   Claude-artikelen en gidsen hun link ernaartoe nog niet. Met `vendorsLive = true` gaat dat
   allemaal vanzelf aan.
3. **Alle vendor-PR's zijn gemerged** met `status: review`, en Camiel heeft elke pagina met naam
   goedgekeurd.
4. **De hele batch is samen gecontroleerd**:
   - doorway-check over alle vendorpagina's samen (body-shingle-Jaccard ≤ 0,25 per paar,
     de guard uit `maxkwaaste/ai-vendor-loop`)
   - feiten die op meer pagina's staan (prijzen, plannamen) zijn gelijk
   - prijzen en plannamen opnieuw gecontroleerd op de site van de leverancier, omdat ze sinds het
     schrijven veranderd kunnen zijn
   - de links die per PR onder "Bewust weggelaten" staan, zijn alsnog gelegd

## De go-live-PR (één PR, één deploy)

1. Elke vendorpagina: `status: published`, `publishDate` = go-live-datum.
2. Alle schakelaars in `src/data/livegang.mjs` aan (vroeger `vendorsLive = true`), plus `homepageNeutraal`.
3. Homepage neutraal: title, description, H1 en hero over AI implementeren, met een Claude-blok
   dat naar de Claude-hub linkt. Haal ook de Claude-only-delen weg in `src/site.ts` (tagline,
   `onafhankelijkheid`, `entiteit.beschrijving`), het hoofdmenu en de footer, en de default
   `about: Claude` in `src/lib/schema.ts`.
4. Hoofdmenu en homepage linken naar `/chatgpt`, `/gemini`, `/copilot` en de Claude-hub.
5. `python3 scripts/quality-gate.py --all` en `npm run build` zijn schoon. `check-dist` toont
   de vendorpaden als INDEXABLE.

## Na de deploy

1. Controleer live: elke vendor-URL geeft 200, een eigen canonical en geen noindex-header, en
   staat in `sitemap-0.xml`.
2. Search Console (implementeren.ai): sitemap opnieuw indienen.
3. Request Indexing alleen voor `/`, de Claude-hub, `/chatgpt`, `/gemini` en `/copilot`
   (dagquotum van ongeveer 10). De rest vindt Google via de sitemap en de interne links.
4. Na 2 weken: zijn de pagina's geïndexeerd onder hun eigen canonical, en krijgen ze vertoningen?
   Ruilen Claude- en vendorpagina's van query (kannibalisatie)?
5. Na 4 weken: besluit over doorgaan, bijsturen of terugdraaien.
