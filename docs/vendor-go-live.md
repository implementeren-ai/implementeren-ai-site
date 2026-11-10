# Vendor-go-live: draaiboek

Besluit Max, 6 november 2026. Alle vendorpagina's (ChatGPT, Gemini, Copilot) worden eerst
klaargezet en gaan daarna op één dag tegelijk live, samen met de neutrale homepage.

## Tot de go-live

- Vendorpagina's hebben `status: review`. Ze worden niet gebouwd, staan niet in de sitemap
  en niets linkt ernaar. Een PR mergen zet dus niets live.
- `vendorsLive = false` in `src/data/indexering.mjs`. Komt er toch een pagina op
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
2. `vendorsLive = true` in `src/data/indexering.mjs`.
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
