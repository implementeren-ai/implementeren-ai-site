---
title: 'ChatGPT API zakelijk: wat de OpenAI API kost en wanneer je hem nodig hebt'
titleTag: 'ChatGPT API zakelijk: OpenAI API kosten en gebruik 2026'
metaDescription: 'De OpenAI API staat los van je ChatGPT-abonnement: prepaid credits, betalen per token, vanaf $0,10 per 1M tokens. Data en EU-opslag. Stand 5 nov 2026.'
h1: 'ChatGPT API zakelijk: wat de OpenAI API kost en wanneer je hem nodig hebt'
targetKeywords:
  - chatgpt api
  - openai api kosten
  - chatgpt api zakelijk
wordCountTarget: 1300
priority: 2
tier: 2
cases:
  - automation-audit
internalLinks:
  - /tools/claude-api-kosten-calculator
  - /prijs
  - /vergelijken/claude-vs-chatgpt
  - /compliance/dpia-stappenplan
  - /compliance/eu-hosting
  - /cases/automation-audit
  - /ai-enablement-scan
schemaTypes:
  - Article
  - FAQPage
  - BreadcrumbList
author: camiel
status: published
publishDate: 2026-11-05
vendor: chatgpt
soort: prijs
claudeSibling: /tools/claude-api-kosten-calculator
disclaimer: fiscaal
kortAntwoord: 'De ChatGPT API heet officieel de OpenAI API. Het is een ander product dan een ChatGPT-abonnement: je krijgt geen chatscherm, je koppelt de modellen van OpenAI aan je eigen software en je betaalt per token. Nieuwe API-accounts kopen vooraf credits, vanaf 5 dollar. GPT-6.1 Terra kost 1 dollar per miljoen inputtokens en 5 dollar per miljoen outputtokens, GPT-6.1 Sol 2 en 10 dollar. OpenAI traint standaard niet op API-data. Prijzen in dollars, btw niet vermeld. Stand 5 november 2026.'
bronnen:
  - titel: 'OpenAI API, Pricing (developers.openai.com)'
    url: https://developers.openai.com/api/docs/pricing
    geraadpleegd: 5 november 2026
  - titel: 'OpenAI, Business pricing, tabblad API'
    url: https://openai.com/business/pricing/#api
    geraadpleegd: 5 november 2026
  - titel: 'OpenAI Help Center, Managing billing for ChatGPT and the API platform'
    url: https://help.openai.com/en/articles/9039756-managing-billing-for-chatgpt-and-the-api-platform
    geraadpleegd: 5 november 2026
  - titel: 'OpenAI Help Center, Setting up and managing prepaid API billing'
    url: https://help.openai.com/en/articles/8264644-setting-up-and-managing-prepaid-api-billing
    geraadpleegd: 5 november 2026
  - titel: 'OpenAI API, Rate limits (usage tiers)'
    url: https://developers.openai.com/api/docs/guides/rate-limits
    geraadpleegd: 5 november 2026
  - titel: 'OpenAI API, Data controls in the OpenAI platform'
    url: https://developers.openai.com/api/docs/guides/your-data
    geraadpleegd: 5 november 2026
  - titel: 'OpenAI, Data Processing Addendum'
    url: https://openai.com/policies/data-processing-addendum/
    geraadpleegd: 5 november 2026
faq:
  - question: Is de ChatGPT API hetzelfde als een ChatGPT-abonnement?
    answer: 'Nee. De API, officieel de OpenAI API, is een apart product met een eigen account, eigen facturatie en geen chatscherm. Een abonnement op ChatGPT Plus, Business of Enterprise geeft je geen API-toegang, en API-credits kun je niet in ChatGPT gebruiken. OpenAI schrijft zelf dat de twee aparte facturatiesystemen hebben.'
  - question: Wat kost de OpenAI API?
    answer: 'Je betaalt per miljoen tokens, apart voor input en output. GPT-6 Luna kost 0,10 dollar input en 0,50 dollar output, GPT-6.1 Terra 1 en 5 dollar, GPT-6.1 Sol 2 en 10 dollar en GPT-6 Astra 10 en 50 dollar. Dat zijn de standaardtarieven voor context onder 272.000 tokens. Met de Batch-verwerking betaal je de helft.'
  - question: Hoe betaal je de OpenAI API?
    answer: 'Nieuwe accounts gebruiken prepaid billing: je koopt vooraf credits, minimaal 5 dollar, en je saldo loopt af met je gebruik. Automatisch opwaarderen staat bij het instellen standaard aan. Gekochte credits verlopen na 1 jaar en zijn in principe niet terug te krijgen.'
  - question: Gebruikt OpenAI mijn API-data om modellen te trainen?
    answer: 'Standaard niet. OpenAI schrijft dat data die via de API binnenkomt sinds 1 maart 2023 niet wordt gebruikt om modellen te trainen, tenzij je daar zelf voor kiest. Wel bewaart OpenAI logs voor misbruikcontrole tot 30 dagen.'
  - question: Kan de OpenAI API data in Europa houden?
    answer: 'Ja, als je in aanmerking komt. Voor Europa (EER plus Zwitserland) is opslag en verwerking in de regio mogelijk via eu.api.openai.com. Je hebt daarvoor goedkeuring van OpenAI nodig voor zero data retention of aangepaste misbruikcontrole, en je regelt het via sales. Voor modellen vanaf 5 maart 2026 geldt een toeslag van 10 procent.'
  - question: Heb ik de API nodig als ik ChatGPT Business heb?
    answer: 'Alleen als je OpenAI-modellen in je eigen software of automatiseringen wilt gebruiken. Voor medewerkers die zelf met AI chatten, schrijven en analyseren is ChatGPT Business genoeg. De API wordt pas interessant als er geen mens tussen zit, of als je een eigen tool bouwt.'
---

Wie zoekt op "ChatGPT API" bedoelt meestal de OpenAI API. Dat is iets anders dan het ChatGPT-abonnement dat je medewerkers gebruiken. Met de API haal je de modellen van OpenAI je eigen software in: een koppeling met je CRM, een tool die offertes samenvat, een script dat binnenkomende mail sorteert. Er is geen chatscherm, geen vaste prijs per gebruiker en geen gedeelde facturatie met ChatGPT.

Hieronder lees je wanneer een MKB-bedrijf de API nodig heeft, wat hij kost en hoe het zit met je gegevens. Alles komt van de pagina's van OpenAI, bekeken op 5 november 2026. OpenAI past modellen en prijzen vaak aan, dus kijk vlak voordat je begint nog op de actuele prijspagina.

## ChatGPT abonnement of ChatGPT API: het verschil

OpenAI schrijft het in zijn helpcentrum zonder omweg: ChatGPT en het API-platform hebben aparte facturatiesystemen. API-credits horen bij een API-organisatie en staan los van je ChatGPT-abonnement.

| | ChatGPT Business | OpenAI API |
|---|---|---|
| Wat je krijgt | Chatomgeving voor medewerkers | Toegang tot modellen vanuit je eigen software |
| Hoe je betaalt | Vaste prijs per plek per maand | Per token, vooraf gekochte credits |
| Account | ChatGPT-werkruimte | Aparte API-organisatie op platform.openai.com |
| Wie het gebruikt | Je medewerkers | Je software, scripts en koppelingen |

Ter vergelijking: een Standard-plek in ChatGPT Business kost 20 dollar per gebruiker per maand bij jaarbetaling en 25 dollar bij maandbetaling, voor teams van 2 tot 200 mensen. Wat je per plan krijgt, lees je op onze andere ChatGPT-pagina's. Voor deze pagina is alleen dit belangrijk: zo'n abonnement geeft je geen API-toegang, en API-gebruik zit er ook niet in.

## Wanneer heeft je bedrijf de ChatGPT API nodig?

De vuistregel: zit er een mens achter het scherm, dan is ChatGPT Business meestal genoeg. Moet het zonder mens draaien, of binnen je eigen systemen, dan heb je de API nodig.

Voorbeelden waarbij de API de juiste keuze is:

- **Koppelingen.** Een AI-stap in HubSpot, Exact Online of je ticketsysteem, bijvoorbeeld om binnenkomende aanvragen te labelen.
- **Eigen tools.** Een interne app die contracten doorleest of productteksten maakt, met je eigen invoerscherm.
- **Automatisering.** Een script dat elke nacht documenten verwerkt, zonder dat iemand iets aanklikt.
- **Klantgerichte functies.** Een assistent op je website of in je klantportaal.

Waarvoor de API overbodig is: medewerkers die mail herschrijven of notulen samenvatten. Dat doen ze sneller in ChatGPT zelf, of in Microsoft 365 en Google Workspace.

De API vraagt wel iemand die kan programmeren of een koppelingsplatform kan inrichten.

## OpenAI API kosten: zo werkt de facturatie

Nieuwe API-accounts gebruiken prepaid billing. Je koopt vooraf credits en je saldo daalt naarmate je de API gebruikt. Volgens het helpartikel van OpenAI:

- de eerste aankoop is minimaal 5 dollar, standaard staat er 10 dollar ingevuld;
- automatisch opwaarderen staat bij het instellen standaard aan, met een drempel, een bedrag om naar terug te gaan en een optionele maandlimiet;
- gekochte credits verlopen na 1 jaar;
- credits krijg je in principe niet terug, behalve bij uitzonderingen zoals een aantoonbare factuurfout;
- is je saldo op, dan geeft de API een foutmelding (`credit_balance_exhausted`).

Let op die laatste. OpenAI waarschuwt dat de API niet altijd direct stopt als je credits op zijn, waardoor je saldo negatief kan worden. Andersom stopt je koppeling wel zodra het saldo echt op is. Draait er een bedrijfsproces op de API, dan wil je dat weten voordat een klant het merkt.

Daarnaast zit je account in een gebruiksniveau. Hoe meer credits je in totaal hebt gekocht, hoe hoger je maandlimiet. OpenAI zet je automatisch een niveau hoger:

| Niveau | Voorwaarde | Gebruikslimiet per maand |
|---|---|---|
| Free | Toegestaan land | $100 |
| Build | $5 aan credits gekocht | $500 |
| Launch | $100 aan credits gekocht | $5.000 |
| Grow | $500 aan credits gekocht | $200.000 |

## OpenAI API prijzen per model

Je betaalt per miljoen tokens, apart voor wat je erin stopt (input) en wat het model teruggeeft (output). Een token is een stukje tekst, ruwweg een deel van een woord. Dit zijn vier modellen die OpenAI op zijn prijspagina uitlicht, standaardtarief, context onder 272.000 tokens:

| Model | Input | Input uit cache | Output |
|---|---|---|---|
| GPT-6 Astra | $10,00 | $1,00 | $50,00 |
| GPT-6.1 Sol | $2,00 | $0,10 | $10,00 |
| GPT-6.1 Terra | $1,00 | $0,05 | $5,00 |
| GPT-6 Luna | $0,10 | $0,01 | $0,50 |

OpenAI noemt Astra zijn krachtigste model, Sol bedoeld voor complexe programmeer- en agenttaken, Terra snel en efficiënt en Luna het zuinigste voor eenvoudige taken in grote aantallen. Wie niet haast heeft, kan Batch gebruiken: volgens de prijspagina betaal je daar voor deze modellen de helft. De volledige lijst, met oudere modellen en tarieven voor beeld en audio, staat op de [officiële prijspagina](https://developers.openai.com/api/docs/pricing).

## Rekenvoorbeeld: 1.000 e-mails per maand

Stel dat een script elke maand 1.000 klantmails samenvat en labelt. Per mail gaat er 2.000 tokens in en komt er 500 tokens uit. Dat is 2 miljoen inputtokens en een half miljoen outputtokens per maand. Zonder cache en zonder btw:

| Model | Kosten per maand |
|---|---|
| GPT-6 Astra | $45,00 |
| GPT-6.1 Sol | $9,00 |
| GPT-6.1 Terra | $4,50 |
| GPT-6 Luna | $0,45 |

Voor dit soort werk is de tokenrekening dus klein. Het verschil tussen modellen is wel een factor 100, dus test eerst of een goedkoper model het werk goed genoeg doet. Wij rekenen dollars niet om naar euro, omdat een koers van vandaag over een maand niet meer klopt. De prijspagina noemt geen btw; kijk op je factuur of er btw is berekend of verlegd en laat je boekhouder bepalen hoe je het boekt. Hoe je hetzelfde voor Claude uitrekent, zie je in de [Claude API kosten calculator](/tools/claude-api-kosten-calculator).

## ChatGPT API zakelijk: wat er met je data gebeurt

Voor een bedrijf is dit vaak belangrijker dan de prijs.

**Training.** OpenAI schrijft dat data die via de API binnenkomt sinds 1 maart 2023 niet wordt gebruikt om modellen te trainen of te verbeteren, tenzij je daar zelf voor kiest.

**Bewaren.** Voor misbruikcontrole maakt OpenAI logs aan die tot 30 dagen worden bewaard, tenzij de wet langer bewaren vereist. Wil je dat je inhoud daar niet in komt, dan bestaan zero data retention en aangepaste misbruikcontrole. Die krijg je alleen na goedkeuring door OpenAI, via sales.

**Data in Europa.** De API heeft een Europese regio (EER plus Zwitserland) via `eu.api.openai.com`, met opslag en verwerking in de regio. Daarvoor moet je zijn goedgekeurd voor zero data retention of aangepaste misbruikcontrole. Voor modellen die op of na 5 maart 2026 zijn uitgebracht rekent OpenAI 10 procent toeslag. Account-, gebruiks- en factuurgegevens vallen er niet onder. Waarom de locatie van je data telt, lees je bij [EU-hosting van AI](/compliance/eu-hosting).

**Verwerkersovereenkomst.** OpenAI heeft een Data Processing Addendum, de verwerkersovereenkomst die de GDPR vraagt. Klanten in de EER of Zwitserland sluiten die af met OpenAI Ireland Ltd. Doorgifte buiten Europa loopt volgens de DPA via standaardcontractbepalingen of een adequaatheidsbesluit.

Gaan er persoonsgegevens door je koppeling, dan geldt de AVG en maak je eerst een risicobeoordeling, bijvoorbeeld met het [DPIA-stappenplan](/compliance/dpia-stappenplan).

## Wat je naast de tokens moet regelen

De tokens zijn zelden de grote kostenpost. Een koppeling moet iemand bouwen, testen en onderhouden. En als hij stilvalt, moet iemand dat merken.

Dat laatste onderschatten bedrijven. Bij een Nederlands softwarebedrijf lichtten we 38 scripts en achtergrondprocessen door, nadat een dagelijkse sync twee weken ongemerkt had stilgestaan. Er bleken er 9 kapot of stilgevallen te zijn. Je leest het in de case [achtergrondprocessen doorlichten](/cases/automation-audit). Met een API-koppeling die stopt bij een leeg saldo loop je precies dat risico. Zet dus een saldowaarschuwing en een simpele dagelijkse controle op.

Reken verder op:

- afspraken over welke gegevens je naar de API stuurt;
- een eigenaar die limieten, sleutels en kosten beheert;
- AI-geletterdheid van wie ermee werkt, een verplichting uit de EU AI Act.

## Welke route past bij jou?

**Alleen ChatGPT Business** als je medewerkers zelf met AI werken en je niets wilt bouwen.

**De OpenAI API** als je AI in je eigen software, koppelingen of nachtelijke processen wilt. Begin met een kleine aankoop, zet automatisch opwaarderen bewust aan of uit en test met een goedkoop model.

**Allebei** als je team in ChatGPT werkt en je daarnaast één of twee processen automatiseert. Dat zijn dan twee rekeningen.

Twijfel je tussen OpenAI en Anthropic, de maker van Claude? Bekijk [Claude vs ChatGPT](/vergelijken/claude-vs-chatgpt) en [wat Claude zakelijk kost](/prijs). Wil je eerst weten welke processen een koppeling waard zijn? In de [AI Enablement Scan](/ai-enablement-scan) kijkt Camiel met je mee, voordat je iets bouwt.
