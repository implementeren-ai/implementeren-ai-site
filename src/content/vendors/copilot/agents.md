---
title: 'Copilot agents: zelf een agent maken in Microsoft 365 Copilot'
titleTag: 'Copilot agents maken met Agent Builder: stappenplan 2026'
metaDescription: 'Copilot agents uitgelegd: de agents van Microsoft, zelf een agent maken met Agent Builder, wat gratis is en wat de beheerder moet regelen. Stand 5 nov 2026.'
h1: 'Copilot agents: wat ze zijn en hoe je zelf een agent maakt'
targetKeywords:
  - copilot agents
  - copilot agent maken
  - microsoft 365 copilot agents
  - agent builder
  - copilot agent
wordCountTarget: 1300
priority: 2
tier: 2
cases:
  - consultant-brief
internalLinks:
  - /vergelijken/claude-vs-copilot
  - /compliance/dpia-stappenplan
  - /compliance/ai-geletterdheid
  - /cases/consultant-brief
  - /ai-enablement-scan
schemaTypes:
  - Article
  - FAQPage
  - BreadcrumbList
author: camiel
status: review
publishDate: 2026-11-05
vendor: copilot
soort: howto
claudeSibling: /vergelijken/claude-vs-copilot
kortAntwoord: 'Een Copilot agent is een versie van Microsoft Copilot met eigen instructies, kennisbronnen en vaardigheden voor één taak. Microsoft levert er een paar mee, zoals Onderzoeker en Analist. Zelf maak je er een met Agent Builder: kies in Copilot links "New agent", beschrijf wat de agent moet doen en voeg kennis toe. Agents met alleen instructies en openbare websites zijn inbegrepen bij de gratis Copilot Chat. Voor SharePoint en connectors betaal je zonder licentie per gebruik, en mail, Teams-chats en vergaderingen werken alleen met de betaalde licentie. Stand 5 november 2026.'
bronnen:
  - titel: 'Microsoft Learn, Agent Builder overview'
    url: https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Build agents in Agent Builder'
    url: https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-build-agents
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Add knowledge sources to an agent in Agent Builder'
    url: https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-add-knowledge
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Share and manage agents built in Agent Builder'
    url: https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-share-manage-agents
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Agent capabilities and licensing models'
    url: https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/prerequisites
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Plan licensing and cost for Microsoft 365 Copilot extensibility'
    url: https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/cost-considerations
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Microsoft Copilot pay-as-you-go service overview'
    url: https://learn.microsoft.com/en-us/copilot/plan/pay-as-you-go-overview
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, What is Microsoft Copilot? (vergelijking licenties)'
    url: https://learn.microsoft.com/en-us/copilot/plan/copilot-overview
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Manage agents in the Microsoft 365 admin center'
    url: https://learn.microsoft.com/en-us/microsoft-agent-365/admin/manage-copilot-agents-integrated-apps
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Agent overview in Microsoft 365 admin center'
    url: https://learn.microsoft.com/en-us/microsoft-agent-365/admin/agent-365-overview
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Agent settings in Microsoft 365 admin center'
    url: https://learn.microsoft.com/en-us/microsoft-agent-365/admin/agent-settings
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Support, Agents gebouwd door Microsoft (Nederlandse versie)'
    url: https://support.microsoft.com/nl-nl/topic/9cc7cccf-b1ed-4b17-b416-2c15e5e13d5a
    geraadpleegd: 5 november 2026
faq:
  - question: Wat is een Copilot agent?
    answer: 'Een agent is volgens Microsoft een aangepaste versie van Copilot die instructies, kennis en vaardigheden combineert voor een specifieke taak. Denk aan een agent die nieuwe medewerkers wegwijs maakt met jullie eigen handboek, of een agent die teksten nakijkt volgens jullie huisstijl.'
  - question: Kan ik gratis een Copilot agent maken?
    answer: 'Ja. Met de gratis Copilot Chat maak je agents met instructies, openbare websites, de code-interpreter en de afbeeldingengenerator. Zodra de agent SharePoint, connectors of geüploade bestanden gebruikt, betaal je zonder licentie per gebruik in Copilot Credits. Dat staat standaard uit en moet een beheerder aanzetten.'
  - question: Welke agents levert Microsoft zelf mee?
    answer: 'Op de Nederlandse supportpagina noemt Microsoft acht agents: Analist, Onderzoeker, Visual Creator, Idea Coach, Schrijfcoach, Prompt Coach, Learning Coach en Carrièrecoach. Welke je ziet, hangt af van je abonnement en van wat je beheerder heeft toegestaan.'
  - question: Kan een agent in mijn mail en Teams-chats zoeken?
    answer: 'Alleen met de betaalde Microsoft 365 Copilot-licentie. Mail, personen, Teams-berichten en Teams-vergaderingen zijn als kennisbron niet beschikbaar in de gratis Copilot Chat, ook niet met betalen per gebruik. Voeg je je mail toe, dan gebruikt de agent je hele mailbox, en collega''s met wie je de agent deelt zien jouw mail niet.'
  - question: Wat is het verschil tussen Agent Builder en Copilot Studio?
    answer: 'Agent Builder zit in Copilot zelf en is bedoeld voor snelle, eenvoudige agents. Wil je acties die externe systemen aansturen, workflows of publicatie in andere kanalen, dan kopieer je de agent naar Copilot Studio. Dat is een apart maakprogramma met eigen licenties en beheer.'
  - question: Hoe zie ik als beheerder welke agents er in mijn organisatie zijn?
    answer: 'In het Microsoft 365-beheercentrum onder Agents. Het overzicht toont het aantal agents en openstaande verzoeken, en in de Registry zie je per gedeelde agent de naam, de maker, de aanmaakdatum en de status. Daar kun je ook agents blokkeren.'
---

Copilot agents zijn assistenten voor één taak, gebouwd op Microsoft Copilot. Je geeft ze instructies en kennisbronnen mee, en ze doen daarna steeds hetzelfde soort werk, zoals vragen beantwoorden uit het personeelshandboek. Microsoft levert een paar agents mee, en met Agent Builder maakt elke medewerker er zelf een.

Hieronder lees je welke agents er zijn, hoe je er zelf een maakt, wat gratis is en wat de beheerder regelt. Alles komt van Microsoft Learn en de Nederlandse supportpagina's van Microsoft, bekeken op 5 november 2026. Knoppen noemen we bij hun Engelse naam, zoals op Microsoft Learn. In een Nederlandse interface kunnen ze anders heten.

## Wat zijn Microsoft 365 Copilot agents?

Volgens Microsoft is een agent een aangepaste versie van Copilot die instructies, kennis en vaardigheden combineert om een bepaalde taak uit te voeren. Je vindt agents in de Copilot-app in het linkermenu onder Agents. Staat een agent er niet tussen, dan voeg je hem toe via **All agents**.

Microsoft noemt op de Nederlandse supportpagina acht agents die het zelf heeft gebouwd:

- **Analist**: zet ruwe gegevens om in grafieken en bruikbare inzichten;
- **Onderzoeker**: zoekt in grote hoeveelheden informatie en geeft bronnen en citaten;
- **Visual Creator**: maakt van een beschrijving een prototype, video of virtuele omgeving;
- **Idea Coach**: helpt ideeën bedenken en uitwerken tot een plan;
- **Schrijfcoach**: geeft feedback op toon, grammatica en stijl van mails en documenten;
- **Prompt Coach**: leert je prompts zo opbouwen dat je betere antwoorden krijgt;
- **Learning Coach**: helpt bij het leren van een onderwerp en het maken van een studieplan;
- **Carrièrecoach**: voor studenten en onderwijs.

Analist, Onderzoeker en Visual Creator zijn standaard aanwezig, de coaches voeg je zelf toe. Per agent vermeldt Microsoft geen licentie. Er staat alleen dat de beschikbaarheid per abonnement verschilt, en dat een ontbrekende agent kan komen door een ontbrekende Copilot-licentie of doordat de beheerder hem niet heeft ingeschakeld. In de beheerdocumentatie schrijft Microsoft dat Onderzoeker en Analist bij de kern van Copilot horen, onder **Tools** staan en buiten de agentinstellingen van de beheerder vallen.

## Copilot agent maken met Agent Builder

Agent Builder is het hulpmiddel in Copilot zelf. Je werkt in de browser via microsoft365.com/chat of office.com/chat, of in Teams op de desktop of het web. Op de mobiele apps kun je geen agent bouwen.

1. **Open Agent Builder.** Kies in Copilot in het linkermenu **New agent**.
2. **Kies je route.** Beschrijf in gewone taal wat de agent moet doen, en Copilot vult naam, beschrijving en instructies voor je in. Microsoft raadt die route aan. De interface van Agent Builder is ook in het Nederlands beschikbaar. Wil je het zelf invullen, kies dan **Skip to configure**. Je kunt ook beginnen bij een sjabloon onder **Start with a template**.
3. **Vul de basis in.** Een naam van maximaal 30 tekens, een beschrijving van maximaal 1.000 tekens en instructies van maximaal 8.000 tekens. De beschrijving is belangrijker dan ze lijkt: Copilot gebruikt haar om te bepalen wanneer de agent past.
4. **Voeg kennis toe.** Onder **Knowledge** kies je openbare websites, SharePoint- of OneDrive-bestanden, of je uploadt bestanden vanaf je computer. Zet **Only use specified sources** aan als de agent vooral uit jouw bronnen moet antwoorden.
5. **Kies vaardigheden.** Met **Create documents, charts, and code** krijgt de agent de code-interpreter, met **Create images** de afbeeldingengenerator.
6. **Test.** Op het tabblad **Try it** stel je vragen waarvan je het antwoord in je bronnen weet. Klopt het antwoord niet, pas dan de instructies aan.
7. **Maak de agent aan.** Na **Create** is de agent privé, alleen voor jou.

Per agent gelden limieten: vier openbare websites (maximaal twee niveaus diep), 100 SharePoint-bestanden, één SharePoint-lijst, 50 OneDrive-bestanden, vijf Teams-chats en vijf vergaderingen, en twintig geüploade bestanden.

Agent Builder kan geen acties in externe systemen, geen workflows en geen publicatie buiten Microsoft 365. Daarvoor kopieer je de agent naar Copilot Studio, een apart product met eigen licenties en beheer. Agents uit Agent Builder werken ook niet in Teams-groepschats of één-op-één-chats.

## Delen met je team

Kies **Share** om collega's toe te voegen. Er zijn twee rollen: **Can edit** maakt iemand mede-eigenaar, **Can chat** laat iemand alleen met de agent werken. Een groep kan alleen de rol Can chat krijgen. Met de schakelaar **Org-wide sharing for chat access** zet je de agent in de Agent Store voor iedereen in je organisatie.

Let op bij kennisbronnen. De agent respecteert de rechten in SharePoint: wie een bestand niet mag openen, krijgt er ook geen antwoord uit. Bij geüploade bestanden werkt het andersom. Microsoft schrijft dat iedereen met toegang tot de agent ook toegang heeft tot de informatie in die bestanden. Zet er dus geen salarislijst of klantdossier in als de agent breed gedeeld wordt.

## Wat is gratis en wat kost een Copilot agent?

Dit hangt af van de licentie van de gebruiker, niet van de maker. Volgens de tabel op Microsoft Learn:

| Kennisbron of functie | Copilot Chat, gratis | Copilot Chat, betalen per gebruik | Betaalde Copilot-licentie |
|---|---|---|---|
| Instructies, webzoeken, code-interpreter, afbeeldingen | Ja | Ja | Ja |
| SharePoint, connectors, geüploade bestanden, Dataverse | Nee | Ja | Ja |
| Mail, personen, Teams-berichten en -vergaderingen | Nee | Nee | Ja |

Gebruikers met de betaalde licentie betalen volgens Microsoft niets extra voor agents. Zonder licentie worden agents die bij gedeelde bedrijfsgegevens komen afgerekend in Copilot Credits. Dat betalen per gebruik staat standaard uit. Een beheerder zet het aan door in het Microsoft 365-beheercentrum een factureringsbeleid te maken met een Azure-abonnement en dat te koppelen aan Copilot Chat. Je kunt een budget met e-mailmeldingen instellen en de kosten volgen op de pagina Cost Management. Een tarief per credit staat niet op de pagina's die we bekeken.

De licentie zelf, Microsoft 365 Copilot Bedrijven, kost €18,20 per gebruiker per maand bij een jaarabonnement, exclusief btw.

## Wat de beheerder vooraf regelt

Alles staat in het Microsoft 365-beheercentrum onder **Agents**. Neem deze stappen voordat je medewerkers aan de slag laat gaan:

1. **Bepaal wie agents mag gebruiken.** Onder **Agents**, **Settings**, **User access** kies je alle gebruikers (de standaard), niemand of specifieke gebruikers en groepen.
2. **Bepaal welke agents zijn toegestaan.** Bij **Agent and plugin access** sta je agents van Microsoft, van je eigen organisatie en van externe uitgevers apart toe of niet.
3. **Bepaal wie breed mag delen.** Bij **Sharing** kies je alle gebruikers, niemand of specifieke gebruikers. Kies je niemand, dan kunnen mensen nog wel met individuele collega's delen. Deze instelling geldt alleen voor agents uit Agent Builder.
4. **Houd de inventaris bij.** Onder **Agents**, **Overview** zie je het aantal agents, openstaande verzoeken en agents zonder eigenaar. In de **Registry** staat per gedeelde agent de naam, de maker, de aanmaakdatum en de status, en daar blokkeer je een agent.
5. **Keur verzoeken goed.** Wil een maker zijn agent in de bedrijfscatalogus, dan komt er een verzoek. Goedkeuren en eigenaarschap toewijzen kan alleen met de rol AI-beheerder of globale beheerder.
6. **Ruim op.** Met agentbeheerregels draag je agents van vertrokken medewerkers over aan hun manager, of blokkeer je agents zonder eigenaar die niemand gebruikt.

Daarnaast kan een beheerder bepalen of Agent Builder überhaupt beschikbaar is. Is Restricted SharePoint Search aan, dan kan een agent SharePoint niet als kennisbron gebruiken.

## Zo begin je in een MKB-bedrijf

Begin met één agent voor een vraag die vaak terugkomt, zoals "hoe declareer ik reiskosten?". Laat één medewerker hem bouwen, test hem twee weken met een klein team en beslis daarna over breder delen.

Spreek vooraf af welke gegevens in een agent mogen. Werk je met persoonsgegevens, doe dan eerst een risicobeoordeling met het [DPIA-stappenplan](/compliance/dpia-stappenplan). Leer je mensen dat een agent kan antwoorden met iets wat niet in de bron staat. Die [AI-geletterdheid](/compliance/ai-geletterdheid) is ook een verplichting uit de EU AI Act.

Ons eigen werk doen we met Claude, maar de les eruit geldt voor elk hulpmiddel. Voor een IT-consultancybureau bouwden we met Claude een werkwijze die opnames van klantgesprekken omzet in een korte brief. Een gesprek van 1 uur uitwerken ging van 45 naar 5 minuten. Die winst kwam uit een duidelijke taak en vaste instructies, precies wat een goede agent ook nodig heeft. Je leest het in de case [vergadernotities naar actiepunten](/cases/consultant-brief).

Twijfel je of Copilot de juiste assistent is? In [Claude vs Copilot](/vergelijken/claude-vs-copilot) zetten we ze naast elkaar. Met de [AI Enablement Scan](/ai-enablement-scan) kijkt Camiel samen met je welke taken zich lenen voor een agent en wat je daarvoor moet regelen.
