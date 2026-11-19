---
title: "Claude 5.5 en Fable 5.2 zakelijk: wat er veranderde en wat je moet doen"
titleTag: "Claude 5.5 en Fable 5.2 zakelijk: wat is nieuw"
metaDescription: "Opus 5.5, Sonnet 5.5, Haiku 5.5 en Fable 5.2: wat Anthropic tussen september en november 2026 uitbracht, wat het kost en wat je als bedrijf moet doen."
h1: "Claude 5.5 zakelijk: Opus 5.5, Sonnet 5.5, Haiku 5.5 en Fable 5.2"
targetKeywords:
  - claude 5.5 zakelijk
  - claude opus 5.5
  - claude fable 5.2
  - claude modellen 2026
wordCountTarget: 900
priority: 1
tier: 1
cases:
  - powerbi-reporting
internalLinks:
  - /nieuws/welk-claude-model-mkb
  - /vergelijken/claude-code-vs-cursor
  - /tools/claude-api-kosten-calculator
  - /prijs/credits-en-limieten
  - /compliance/zero-data-retention
schemaTypes:
  - Article
  - FAQPage
  - BreadcrumbList
author: camiel
competitors: []
status: published
publishDate: 2026-11-19
updatedDate: null
changelogLine: null
reviewedBy: "Camiel Wits"
reviewedDate: 2026-11-10
isRecurring: false
kortAntwoord: "Tussen 22 september en 9 november 2026 bracht Anthropic vier modellen uit: Claude Opus 5.5, Sonnet 5.5, Haiku 5.5 en Fable 5.2. Opus 5.5 is het aanbevolen startpunt en kost 4 dollar per miljoen input-tokens, een vijfde minder dan Opus 4.7. Fable 5.2 is het model voor het zwaarste werk en kost 8 dollar, ook een vijfde minder dan Fable 5.1. Stand: 19 november 2026."
bronnen:
  - titel: "Claude Platform Docs, Models overview (modellen, prijzen, contextwindow)"
    url: "https://platform.claude.com/docs/en/models/overview"
    geraadpleegd: "19 november 2026"
  - titel: "Claude Platform Docs, Release notes (Fable 5.2, fast mode, Opus 4.8)"
    url: "https://platform.claude.com/docs/en/release-notes/overview"
    geraadpleegd: "19 november 2026"
  - titel: "Claude Help Center, Release notes (Claude-apps)"
    url: "https://support.claude.com/en/articles/12138966-release-notes"
    geraadpleegd: "19 november 2026"
  - titel: "Claude Help Center, Claude Fable models on your plan"
    url: "https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan"
    geraadpleegd: "19 november 2026"
  - titel: "Anthropic Newsroom (aankondigingen Opus 5.5, Sonnet 5.5, Haiku 5.5 en Fable 5.2)"
    url: "https://www.anthropic.com/news"
    geraadpleegd: "19 november 2026"
faq:
  - question: "Wat is het verschil tussen Claude Opus 4.7 en Opus 5.5?"
    answer: "Opus 5.5 is twee generaties nieuwer en goedkoper per token: 4 dollar per miljoen input-tokens en 20 dollar per miljoen output-tokens, tegenover 5 en 25 dollar voor Opus 4.7. Anthropic zegt dat Opus 5.5 bij het meeste werk op het niveau van Fable 5.1 presteert. Anthropic adviseert om waar mogelijk de nieuwste modellen te gebruiken."
  - question: "Zit Claude Fable 5.2 in mijn abonnement?"
    answer: "Op Max, Ultra en de premium-seats van Team gebruik je Fable tot 50 procent van je weeklimiet zonder meerkosten. Op Pro en de standaard-seats van Team betaal je Fable met usage credits tegen API-tarief. Via de API kost Fable 5.2 8 dollar per miljoen input-tokens en 40 dollar per miljoen output-tokens."
  - question: "Moet ik mijn API-koppelingen aanpassen?"
    answer: "Alleen als je van model wisselt. Je geeft per request een model-ID mee, bijvoorbeeld claude-opus-5-5. Ga je naar Fable 5.2, test dan eerst: dat model weigert een request met een 400-fout als je code de systeemprompt, de tools of een eerder bericht aanpast en daarna een thinking-blok van een latere beurt terugstuurt."
  - question: "Wat gebeurt er met Opus 4.8?"
    answer: "Opus 4.8 blijft beschikbaar, maar fast mode voor Opus 4.8 verdwijnt op 30 november 2026. Daarna geeft een request met speed fast op claude-opus-4-8 een fout. Anthropic verwijst voor fast mode naar Opus 5.5."
---

Claude 5.5 zakelijk is de stand van zaken na een druk najaar bij Anthropic. Tussen 22 september en 9 november 2026 kwamen er vier nieuwe modellen uit: Claude Opus 5.5, Claude Sonnet 5.5, Claude Haiku 5.5 en Claude Fable 5.2. Wie nog op Claude Opus 4.7 of 4.8 draait, betaalt per token meer dan nodig. Hieronder staat wat er veranderde, wat het kost en wat je als bedrijf moet doen. Welk model je voor welke taak kiest, werken we uit in [welk Claude model kies je als MKB](/nieuws/welk-claude-model-mkb). Alle cijfers zijn gecheckt op 19 november 2026 bij de bronnen onderaan.

## Claude 5.5 zakelijk: de releases op een rij

Tabel: de nieuwe Claude modellen van najaar 2026, met de API-prijs in dollars per miljoen tokens (input / output).

| Datum | Model | Wat Anthropic erover zegt | API-prijs |
|-------|-------|---------------------------|-----------|
| 22 september 2026 | Claude Opus 5.5 | Op het niveau van Fable 5.1 bij het meeste werk, 40 procent goedkoper in gebruik dan Opus 5 | $4 / $20 |
| 28 september 2026 | Claude Sonnet 5.5 | Ruim 30 procent sneller dan Sonnet 5, tot 30 procent goedkoper voor het meeste werk | $2 / $10 |
| 7 oktober 2026 | Claude Haiku 5.5 | Het snelste en sterkste kleine model, voor werk in hoog volume | vanaf $0,10 / $0,50 |
| 9 november 2026 | Claude Fable 5.2 | Het sterkste model voor zwaar technisch werk | $8 / $40 |

Alle vier hebben een contextwindow van 1 miljoen tokens en een maximale output van 128.000 tokens. De lagere Haiku-prijs geldt voor prompts tot 100.000 tokens.

## Claude Opus 5.5 vervangt Opus 4.7 als startpunt

In de eigen documentatie zegt Anthropic het zonder omwegen: twijfel je, begin dan met Claude Opus 5.5. Voor wie Opus 4.7 gebruikt (uitgebracht op 16 april 2026) is dat ook financieel een logische stap. Opus 4.7 kost 5 dollar per miljoen input-tokens en 25 dollar per miljoen output-tokens, Opus 5.5 kost 4 en 20 dollar. Dat is per token 20 procent minder, voor een model dat twee generaties nieuwer is.

Oudere modellen blijven voorlopig bereikbaar, maar Anthropic adviseert om waar het kan de nieuwste modellen te gebruiken. Eén concrete deadline: fast mode voor Opus 4.8 verdwijnt op 30 november 2026. Gebruik je die, stap dan over naar Opus 5.5, waar fast mode wel beschikbaar is.

## Claude Fable 5.2: sterker en goedkoper dan 5.1

Claude Fable 5.2 is het model voor veeleisend redeneerwerk en agents die lang zelfstandig doorwerken. Het kost 8 dollar per miljoen input-tokens en 40 dollar per miljoen output-tokens. Voorganger Fable 5.1 kostte 10 en 50 dollar. Via de API is er ook een fast mode, tot 2,5 keer zo snel, tegen 16 en 80 dollar per miljoen tokens.

Drie dingen om te weten voordat je Fable 5.2 inzet:

- **Bewaartermijn.** Prompts en antwoorden van Fable-modellen worden minimaal 30 dagen bewaard. Zero data retention is voor deze modellen alleen beschikbaar als Anthropic dat uitdrukkelijk toestaat. Meer over wat dat betekent staat op onze pagina over [zero data retention](/compliance/zero-data-retention). Waar Anthropic je data opslaat en met welke entiteit je contracteert, lees je in [Anthropic in Nederland en Europa](/nieuws/anthropic-nederland).
- **Abonnement.** Op Max, Ultra en de premium-seats van Team gebruik je Fable tot 50 procent van je weeklimiet. Op Pro en de standaard-seats van Team betaal je Fable met usage credits. Hoe die limieten werken, lees je bij [credits en limieten](/prijs/credits-en-limieten).
- **Mythos 5.2.** Naast Fable 5.2 verscheen Claude Mythos 5.2, met dezelfde capaciteiten. Dat model is alleen beschikbaar voor organisaties die Anthropic via een eigen verificatieprogramma heeft goedgekeurd. Voor vrijwel elk MKB-bedrijf is Fable 5.2 dus de relevante versie.

## Claude modellen 2026: wat je als bedrijf moet doen

Gebruik je Claude via een abonnement (Pro, Max, Team of Enterprise), dan kies je in de app per gesprek een model. Er is niets om te migreren. Controleer alleen of Fable binnen je plan valt voordat je team het standaard gaat gebruiken, want op Pro en Team-standaard kost elk Fable-gesprek extra.

Gebruik je de API, dan wissel je door het model-ID aan te passen: claude-opus-5-5, claude-sonnet-5-5, claude-haiku-5-5 of claude-fable-5-2. Doe dat niet blind in productie:

1. Test de nieuwe versie eerst op een kopie van je echte werk en vergelijk de output met wat je nu krijgt.
2. Let bij Fable 5.2 op de strengere controle van de gesprekshistorie: past je code de systeemprompt, de tools of een eerder bericht aan en stuurt hij daarna een thinking-blok van een latere beurt terug, dan volgt een 400-fout.
3. Gebruik je computer use, dan werkt Fable 5.2 alleen met de nieuwe toolset computer_toolset_20260801.
4. Reken je volume door in de [API-kostencalculator](/tools/claude-api-kosten-calculator) voordat je een duurder model standaard maakt.

## Wat we er in de praktijk van zien

Eigen benchmarkcijfers voor de 5.5-generatie publiceren we niet, die hebben we niet gemeten. Wat we wel weten uit eigen werk: bij de [Power BI-rapportagepipeline](/cases/powerbi-reporting) die ons team eerder bij een Nederlands softwarebedrijf bouwde (872 reports, van 20 uur rapportagewerk per week naar minder dan 1 uur) telde generatiekwaliteit zwaarder dan de prijs per token. Een fout in een rapport kost meer dan het verschil tussen twee modellen. Bij zulk werk is het nieuwste sterke model de veilige keuze, en dat is nu Opus 5.5.

Werk je met Claude in een editor als Cursor, let dan op de prijs. In de huidige Cursor-abonnementen betaal je Claude-modellen per gebruik, los van de abonnementsprijs; de details staan in [Claude Code vs Cursor](/vergelijken/claude-code-vs-cursor). De andere Claude-updates van 2026 staan op een rij in onze [Claude release notes in het Nederlands](/nieuws/release-notes-nederlands).
