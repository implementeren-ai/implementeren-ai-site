---
title: 'ChatGPT Codex zakelijk: wat het is, wat het kost en wanneer het past'
titleTag: 'ChatGPT Codex zakelijk: abonnementen, limieten en beheer 2026'
metaDescription: 'ChatGPT Codex is de programmeeragent van OpenAI. Welke abonnementen, welke limieten, hoe het met GitHub werkt en wat de beheerder regelt. Stand 5 nov 2026.'
h1: 'ChatGPT Codex: de programmeeragent van OpenAI voor het MKB'
targetKeywords:
  - chatgpt codex
  - openai codex
  - codex zakelijk
wordCountTarget: 1300
priority: 2
tier: 2
cases:
  - knowledge-base
internalLinks:
  - /vergelijken/claude-vs-chatgpt
  - /vergelijken/claude-code-vs-cursor
  - /prijs/credits-en-limieten
  - /compliance/dpia-stappenplan
  - /cases/knowledge-base
  - /ai-enablement-scan
schemaTypes:
  - Article
  - FAQPage
  - BreadcrumbList
author: camiel
status: review
publishDate: 2026-11-05
vendor: chatgpt
soort: landing
claudeSibling: /vergelijken/claude-vs-chatgpt
disclaimer: juridisch
kortAntwoord: 'Codex is de programmeeragent van OpenAI. Je gebruikt hem in de ChatGPT-desktopapp, in de terminal (Codex CLI), als extensie in VS Code en vergelijkbare editors, en als cloudagent die zelfstandig aan een GitHub-repository werkt. Codex zit in alle ChatGPT-abonnementen, maar de cloudagent alleen in Plus, Pro, Business, Enterprise en Edu. Gebruik telt mee in een gedeelde limiet per vijf uur en per week. Stand 5 november 2026.'
bronnen:
  - titel: 'OpenAI Help Center, Using Codex with your ChatGPT plan'
    url: https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan
    geraadpleegd: 5 november 2026
  - titel: 'ChatGPT Learn, Pricing (Codex en ChatGPT Work)'
    url: https://learn.chatgpt.com/docs/pricing
    geraadpleegd: 5 november 2026
  - titel: 'OpenAI, Codex (Nederlandse productpagina)'
    url: https://openai.com/nl-NL/codex/
    geraadpleegd: 5 november 2026
  - titel: 'ChatGPT Learn, Codex Cloud'
    url: https://learn.chatgpt.com/docs/cloud
    geraadpleegd: 5 november 2026
  - titel: 'ChatGPT Learn, Cloud environments'
    url: https://learn.chatgpt.com/docs/environments/cloud-environments
    geraadpleegd: 5 november 2026
  - titel: 'ChatGPT Learn, GitHub (code review met @codex)'
    url: https://learn.chatgpt.com/docs/third-party/github
    geraadpleegd: 5 november 2026
  - titel: 'ChatGPT Learn, Enterprise admin setup'
    url: https://learn.chatgpt.com/docs/enterprise/admin-setup
    geraadpleegd: 5 november 2026
  - titel: 'ChatGPT Learn, Roles and workspace permissions'
    url: https://learn.chatgpt.com/docs/enterprise/roles-and-workspace-permissions
    geraadpleegd: 5 november 2026
faq:
  - question: Wat is ChatGPT Codex?
    answer: 'Codex is de programmeeragent van OpenAI. Hij leest code, past bestanden aan, voert commando''s uit en kan pull requests beoordelen. Je gebruikt hem in de ChatGPT-desktopapp, in de terminal, in je editor en in de cloud, allemaal met je ChatGPT-account.'
  - question: Is OpenAI Codex gratis?
    answer: 'Volgens OpenAI zit Codex in alle ChatGPT-abonnementen, ook Free en Go. Daar krijg je alleen het lichtste model in de desktopapp, en de cloudagent zit er niet in. Voor serieus programmeerwerk heb je minimaal Plus of een Business-plek nodig.'
  - question: Hoeveel kun je met Codex doen per abonnement?
    answer: 'OpenAI geeft voor Plus en een Standard-plek in Business dezelfde schatting per vijf uur, afhankelijk van het model: van 5 tot 45 berichten met het zwaarste model tot 350 tot 3.000 met het lichtste. Er kan ook een weeklimiet gelden. Pro heeft op dit moment geen limiet per vijf uur. Stand 5 november 2026.'
  - question: Traint OpenAI op mijn code als ik Codex gebruik?
    answer: 'Bij ChatGPT Business, Enterprise en Edu gebruikt OpenAI je invoer en uitvoer standaard niet om modellen te verbeteren. Bij Plus en Pro kan dat wel, tenzij je training uitzet in de gegevensinstellingen van ChatGPT. Werkt een ontwikkelaar met een privé Plus-account aan bedrijfscode, controleer die instelling dan.'
  - question: Heb ik een ontwikkelaar nodig om Codex te gebruiken?
    answer: 'Voor het meeste werk wel. Codex schrijft en wijzigt code, en iemand moet beoordelen of die wijziging klopt voordat ze live gaat. Zonder iemand die een pull request kan lezen loop je het risico dat je fouten overneemt die je niet ziet.'
  - question: Kan ik Codex gebruiken met een API-sleutel in plaats van een abonnement?
    answer: 'Ja, voor de CLI, de SDK en de IDE-extensie. Je betaalt dan per gebruik volgens de API-prijzen. De cloudfuncties, zoals code review in GitHub en de Slack-koppeling, zitten daar niet bij.'
---

ChatGPT Codex is de programmeeragent van OpenAI. Je geeft een taak in gewone taal, zoals "los deze bug op" of "schrijf tests voor dit bestand", en Codex leest de code, voert commando's uit en levert een wijziging die je kunt nakijken. Wie zoekt op OpenAI Codex, vindt vooral Engelstalige documentatie voor ontwikkelaars. Op deze pagina lees je wat het vandaag is, in welke abonnementen het zit, hoe het met GitHub werkt en wanneer het voor een klein bedrijf zinvol is.

Alles hieronder komt van de pagina's van OpenAI, bekeken op 5 november 2026. OpenAI past limieten, modellen en abonnementen vaak aan. Kijk vlak voor je besluit nog even op de actuele pagina's die onderaan staan.

## Wat is ChatGPT Codex?

Codex werkt op meerdere plekken, allemaal gekoppeld aan je ChatGPT-account. Het Help Center van OpenAI noemt vier ingangen:

- **ChatGPT-desktopapp** in de Codex-modus, voor werk op je eigen computer;
- **Codex CLI**, een programma voor de terminal dat code inspecteert, aanpast en uitvoert;
- **Codex IDE-extensie** voor Visual Studio Code en editors die daarop gebaseerd zijn, zoals Cursor en Windsurf. Xcode en JetBrains hebben een eigen integratie;
- **Codex web en Codex Cloud**, waar taken op computers van OpenAI draaien en doorlopen terwijl jouw laptop dicht is.

Het onderscheid dat er voor een bedrijf toe doet, is lokaal tegenover cloud. Lokaal draait Codex op het apparaat van de ontwikkelaar, met de bestanden die daar staan. In de cloud werkt Codex in een omgeving die OpenAI beheert, met een kopie van je repository.

## OpenAI Codex in welke abonnementen?

Codex zit volgens OpenAI in alle ChatGPT-abonnementen, ook in Free en Go. Daar krijg je alleen het lichtste model in de desktopapp, en ook dat volgens OpenAI nog afhankelijk van de uitrol. Codex Cloud zit in Plus, alle Pro-varianten, Business, Enterprise, Healthcare en Education. Niet in Free en Go.

Plus kost 20 dollar per maand en Business 20 dollar per gebruiker per maand bij jaarlijkse betaling, met minimaal twee gebruikers. De volledige prijslijst staat op onze andere ChatGPT-pagina's, dus die herhalen we hier niet. Op de Nederlandstalige Codex-pagina van OpenAI zagen we de bedragen in Britse ponden, omdat onze browser in het Verenigd Koninkrijk stond. Reken met het bedrag dat je bij het afrekenen ziet.

Een API-sleutel kan ook. Dan gebruik je Codex in de CLI, de SDK of de IDE-extensie en betaal je per gebruik volgens de API-prijzen, zonder de cloudfuncties zoals code review in GitHub.

## Gebruikslimieten van Codex, stand 5 november 2026

Codex deelt zijn limiet met ChatGPT Work. Hoeveel je kunt doen, hangt af van het model, de grootte van de taak en of die lokaal of in de cloud draait. Dit zijn de schattingen die OpenAI geeft voor lokale berichten per vijf uur, voor Plus en voor een Standard-plek in Business:

| Model | Berichten per 5 uur |
|---|---|
| GPT-6 Astra | 5 tot 45 |
| GPT-6.1 Sol | 15 tot 160 |
| GPT-6.1 Terra | 35 tot 285 |
| GPT-6 Sol | 15 tot 150 |
| GPT-6 Luna | 350 tot 3.000 |

OpenAI schrijft er nadrukkelijk bij dat dit geen vaste limieten zijn. Er kan ook een weeklimiet gelden, en een cloudtaak kost meer dan een lokaal bericht. Verder:

- Pro heeft op dit moment geen limiet per vijf uur;
- Enterprise en Edu zonder flexibele prijzen hebben voor de meeste functies dezelfde limieten per plek als Plus;
- met flexibele prijzen zijn er geen vaste limieten en betaal je met credits;
- Plus- en Business-gebruikers kunnen met credits bijkopen als de limiet op is.

Je actuele stand zie je in het gebruiksdashboard, of in de CLI met het commando /status. Hoe limieten en credits bij Claude werken, staat in [Claude gebruikslimieten en credits](/prijs/credits-en-limieten).

## Zo werkt Codex met een GitHub-repository

In Codex Cloud kies je je GitHub-repositories en koppel je GitHub als daarom gevraagd wordt. Daarna maak je een cloudomgeving: de repositories, de software die je project nodig heeft en de toegang die Codex mag hebben. Volgens de documentatie draait elke taak in een eigen virtuele machine, met een eigen geïsoleerde werkruimte.

Internettoegang stel je per omgeving in. Je zet het openbare internet helemaal aan, of je staat alleen bepaalde bestemmingen toe, zoals de bekende pakketbronnen voor npm en PyPI plus domeinen die je zelf toevoegt. Wachtwoorden en sleutels geef je mee als omgevingsvariabele of als netwerkgeheim.

Is de wijziging klaar, dan bekijk je die in de app, op het web of op je telefoon. Ben je tevreden, dan commit je of open je een pull request.

Codex kan ook pull requests beoordelen. Je typt @codex review in een reactie, of je zet automatische reviews aan. In GitHub meldt Codex alleen de problemen met de hoogste prioriteit. Met een reactie als "@codex fix the P1 issue" laat je Codex de fout herstellen, en als het daar rechten voor heeft, zet het die oplossing terug op de branch.

## Codex zakelijk: wat de beheerder regelt

In een beheerde werkruimte, dus Business of Enterprise, regelt de beheerder Codex lokaal en Codex in de cloud apart. Lokaal omvat de CLI, de IDE-extensie en de desktopapp. Cloud gaat over taken die je aan de cloudagent overdraagt. Wat je als beheerder in handen hebt, volgens het Help Center en de beheerdocumentatie:

- **Toegang per rol.** Beheerders geven Codex aan bepaalde rollen;
- **Cloud apart aanzetten.** Bij Enterprise staat cloudtoegang standaard uit;
- **Gedeelde omgevingen.** De permissie om omgevingen voor de hele werkruimte te maken staat standaard uit. Leden met cloudtoegang maken wel hun eigen omgevingen;
- **Plug-ins.** Bij Business en Enterprise bepalen beheerders welke plug-ins leden mogen installeren;
- **Standaardmodel.** Beheerders kiezen het startmodel, het redeneerniveau en de snelheid;
- **Beheerde configuratie.** Met een bestand requirements.toml leg je vast wat Codex lokaal wel en niet mag, bijvoorbeeld de computerbesturing uitzetten;
- **Controle achteraf.** Codex-gebruik verschijnt in de Compliance API, en Enterprise heeft een analytics-dashboard.

Sommige van deze opties beschrijft OpenAI alleen voor Enterprise. Of een instelling ook in Business zit, zie je in je eigen beheerconsole.

## Wat er met je code en gegevens gebeurt

Bij Business, Enterprise en Edu gebruikt OpenAI je invoer en uitvoer standaard niet om modellen te verbeteren. Bij Plus en Pro kan dat wel, tenzij je training uitzet in de gegevensinstellingen. Dat is het belangrijkste punt voor een klein bedrijf: werkt je ontwikkelaar met een privé Plus-account aan jouw code, dan gelden zijn instellingen en niet de jouwe.

Lokale taken draaien op het apparaat zelf, cloudtaken in omgevingen die OpenAI beheert. Voor zakelijke accounts geldt de zakelijke overeenkomst met OpenAI. Staan er persoonsgegevens in je code of testdata, maak dan vooraf een risicobeoordeling met het [DPIA-stappenplan](/compliance/dpia-stappenplan).

## Wanneer past Codex bij een klein bedrijf?

**Je hebt één of twee eigen ontwikkelaars.** Dan is Codex een logische stap als je toch al ChatGPT Business hebt. Zij krijgen de agent in hun editor en terminal, jij houdt het beheer en de gegevensafspraken in één werkruimte. Begin met code review op pull requests, dat levert snel iets op en het risico is klein.

**Je werkt met een externe ontwikkelpartner.** Spreek af in welk account die partner aan jouw code werkt. Een plek in jouw Business-werkruimte geeft jou zicht en houdt jouw instellingen van toepassing. Werkt de partner met een eigen account, vraag dan welk abonnement dat is en of training uit staat.

**Je hebt geen ontwikkelaar.** Dan is Codex meestal niet de plek om te beginnen. Iemand moet elke wijziging kunnen beoordelen voordat die live gaat.

Een voorbeeld van wat een programmeeragent oplevert als het werk eromheen klopt: bij een Nederlandse IT-dienstverlener bouwde ons team met Claude Code in 5 dagen een kennisbank van 13 artikelen met 27 screenshots, inclusief publicatie via de API. Je leest het in de case [kennisbank in een week](/cases/knowledge-base). De winst zat in de afspraken over wat de agent mocht doen en wie het resultaat controleerde.

## Codex of Claude Code?

Claude Code is de programmeeragent van Anthropic en de tegenhanger van Codex. Hoe ChatGPT en Claude zich in het algemeen tot elkaar verhouden, lees je in [Claude vs ChatGPT](/vergelijken/claude-vs-chatgpt). Hoe Claude Code zich verhoudt tot een AI-editor, staat in [Claude Code vs Cursor](/vergelijken/claude-code-vs-cursor).

Wil je eerst weten waar een programmeeragent in jouw bedrijf iets oplevert, en wie het werk dan nakijkt? In de [AI Enablement Scan](/ai-enablement-scan) kijkt Camiel samen met je naar je processen en je ontwikkelcapaciteit, voordat je licenties koopt.
