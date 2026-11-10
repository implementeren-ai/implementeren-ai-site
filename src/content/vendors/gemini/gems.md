---
title: 'Gemini Gems: zo maak en deel je een eigen assistent in Gemini'
titleTag: 'Gemini Gems maken en delen in Google Workspace (2026)'
metaDescription: 'Gemini Gems stap voor stap: een Gem maken met instructies en kennis, delen in je Workspace-organisatie, de beheerinstelling en de overstap naar vaardigheden.'
h1: 'Gemini Gems: een eigen assistent maken en delen met je team'
targetKeywords:
  - gemini gems
  - gem maken
  - gem delen
  - gems in google workspace
  - gemini gem
wordCountTarget: 1300
priority: 2
tier: 2
cases:
  - google-ads-skills
internalLinks:
  - /gids/claude-voor-mkb
  - /compliance/dpia-stappenplan
  - /compliance/ai-geletterdheid
  - /cases/google-ads-skills
  - /vergelijken/welke-ai-voor-mkb
  - /ai-enablement-scan
schemaTypes:
  - Article
  - FAQPage
  - BreadcrumbList
author: camiel
status: review
publishDate: 2026-11-05
reviewedBy: "Camiel Wits"
reviewedDate: 2026-11-05
vendor: gemini
soort: howto
claudeSibling: /gids/claude-voor-mkb
disclaimer: juridisch
kortAntwoord: 'Een Gem is een opgeslagen versie van Gemini met een naam, vaste instructies en eventueel kennisbestanden. Je maakt er een op gemini.google.com via Gems en Nieuwe Gem. Met een werkaccount deel je een Gem als kijker of editor, net als een bestand in Drive, en de beheerder zet het delen aan of uit in de Beheerdersconsole. Let op: Google vervangt Gems door vaardigheden, voor zakelijke Workspace-accounts in maart 2027. Stand 5 november 2026.'
bronnen:
  - titel: 'Gemini Apps Help, Gems gebruiken in Gemini Apps'
    url: https://support.google.com/gemini/answer/15146780?hl=nl
    geraadpleegd: 5 november 2026
  - titel: 'Gemini Apps Help, Een Gem delen vanuit Gemini Apps'
    url: https://support.google.com/gemini/answer/16504957?hl=nl
    geraadpleegd: 5 november 2026
  - titel: 'Gemini Apps Help, Snel aan de slag met kant-en-klare Gems'
    url: https://support.google.com/gemini/answer/15235907?hl=nl
    geraadpleegd: 5 november 2026
  - titel: 'Gemini Apps Help, Tips voor het maken van aangepaste Gems'
    url: https://support.google.com/gemini/answer/15235603?hl=nl
    geraadpleegd: 5 november 2026
  - titel: 'Gemini Apps Help, Bestanden uploaden en analyseren in Gemini Apps'
    url: https://support.google.com/gemini/answer/14903178?hl=nl
    geraadpleegd: 5 november 2026
  - titel: 'Gemini Apps Help, Over de overstap van Gems naar vaardigheden'
    url: https://support.google.com/gemini/answer/18560919?hl=nl
    geraadpleegd: 5 november 2026
  - titel: 'Google Workspace Help, Gems delen aan- of uitzetten'
    url: https://knowledge.workspace.google.com/admin/generative-ai/gemini-app/turn-gem-sharing-on-or-off?hl=nl
    geraadpleegd: 5 november 2026
  - titel: 'Google Workspace Updates, Introducing Gems sharing in the Gemini app, including admin controls (18 september 2025)'
    url: https://workspaceupdates.googleblog.com/2025/09/gem-sharing-gemini-app-workspace.html
    geraadpleegd: 5 november 2026
faq:
  - question: Wat zijn Gemini Gems?
    answer: 'Een Gem is een opgeslagen versie van Gemini die je zelf instelt. Je geeft hem een naam, vaste instructies en eventueel bestanden als kennis. Elke keer dat je met die Gem chat, volgt Gemini die instructies, zodat je ze niet in elke prompt hoeft te herhalen.'
  - question: Hoe maak ik een Gem?
    answer: 'Ga op je computer naar gemini.google.com, open de zijbalk en klik op Gems en daarna op Nieuwe Gem. Vul een naam en instructies in, voeg onder Kennis eventueel bestanden toe en klik op Opslaan. Maken kan alleen in de web-app; de Gem verschijnt daarna ook in de mobiele app en in het Gemini-zijvenster van Workspace.'
  - question: Kan ik een Gem delen met collega's?
    answer: 'Ja. Klik naast de Gem op Delen, vul een e-mailadres in en kies Kijker of Editor. Met een werkaccount kun je ook de hele organisatie toegang geven. Een kijker gebruikt de Gem en ziet de instructies en bestanden, een editor kan ze ook aanpassen en de Gem verwijderen.'
  - question: In welke Workspace-abonnementen zitten Gems?
    answer: 'Volgens Google is het delen van Gems beschikbaar in alle Workspace-edities, waaronder Business Starter, Standard en Plus, de Enterprise-edities, Essentials, Frontline, Education en Nonprofits. Je hebt een werkaccount nodig waarin de Gemini-app aanstaat.'
  - question: Hoeveel bestanden kan ik aan een Gem toevoegen?
    answer: 'De Gems-pagina van Google noemt geen eigen limiet en verwijst naar de algemene uploadregels van Gemini: maximaal 10 bestanden per keer en maximaal 100 MB per bestand, een video tot 2 GB. Na de overstap naar vaardigheden geldt een grens van 100 MB aan bestanden per vaardigheid.'
  - question: Verdwijnen Gems?
    answer: 'Ja. Google vervangt Gems door vaardigheden. Voor persoonlijke accounts gebeurt dat in november en december 2026, voor zakelijke Workspace-accounts in maart 2027. Google zet bestaande Gems automatisch om, maar niet elk bestandstype gaat mee.'
---

Gemini Gems zijn de manier om Gemini één keer goed in te stellen en daarna steeds opnieuw te gebruiken. Je schrijft vaste instructies, voegt een paar documenten toe en geeft het geheel een naam. Een collega opent de Gem en krijgt antwoorden in dezelfde vorm, zonder zelf een lange prompt te typen.

Hieronder lees je hoe je een Gem maakt, hoe delen binnen een Workspace-organisatie werkt, wat de beheerder regelt en waar de grenzen liggen. Alles komt uit de Help-pagina's van Google, bekeken op 5 november 2026. Eén ding vooraf: Google gaat Gems vervangen door vaardigheden. Daar staat verderop een aparte paragraaf over.

## Wat zijn Gemini Gems?

Google omschrijft een Gem als een aangepaste versie van Gemini die je helpt bij terugkerende taken. Een Gem bestaat uit drie delen:

- **een naam**, zodat je hem terugvindt;
- **instructies**, die Gemini bij elk gesprek met de Gem volgt;
- **kennis**, optioneel: bestanden van je computer, bestanden uit Google Drive of een notebook uit Gemini Notebook (voorheen NotebookLM).

Werk je liever rechtstreeks in je eigen documenten, met bronvermelding per antwoord, dan is Gemini Notebook het gereedschap daarvoor. Een Gem is bedoeld voor een taak die je vaak herhaalt, zoals een offerte opzetten of een tekst controleren.

## Een Gem maken in Gemini: stap voor stap

Een Gem maak je in de web-app. Volgens de Help-pagina van Google:

1. Ga op je computer naar gemini.google.com en log in met je werkaccount.
2. Klik op Zijbalk openen en daarna op Gems.
3. Klik op Nieuwe Gem.
4. Vul een naam en de instructies in. Na een paar woorden kun je op Gemini gebruiken om instructies te herschrijven klikken, dan maakt Gemini er een uitgebreidere versie van.
5. Scroll naar Kennis en klik op Bestanden toevoegen. Kies Bestand uploaden of Toevoegen vanuit Drive.
6. Typ rechts een testvraag en klik op Sturen om te zien wat de Gem antwoordt. Pas de instructies aan tot het klopt.
7. Klik op Opslaan. Het voorbeeldvenster slaat niets vanzelf op.

Een Gem die je zo maakt, verschijnt ook in de mobiele app en in het Gemini-zijvenster van Google Workspace. Een Drive-bestand blijft gekoppeld: past iemand het document aan, dan gebruikt de Gem de nieuwste versie. Voor Drive moet Activiteit bewaren aanstaan en moet Workspace aan de Gemini-app gekoppeld zijn.

## Goede instructies voor een gem maken

Google raadt vier onderdelen aan, dezelfde als voor een goede prompt: het personage (welke rol de Gem speelt), de taak, de context en de indeling van het antwoord. Je hoeft ze niet allemaal te gebruiken, maar elk onderdeel dat je weglaat, moet Gemini zelf invullen.

Drie voorbeelden voor een MKB-bedrijf. Dit zijn voorbeelden, geen klantprojecten:

- **Offerte-assistent.** Instructie: je zet een offerte op volgens onze vaste opbouw, vraagt eerst naar klant, omvang en deadline, en rekent alleen met de tarieven uit het kennisbestand. Kennis: je tarievenlijst en twee goedgekeurde offertes uit Drive.
- **Tone-of-voice-checker.** Instructie: je leest een tekst en markeert zinnen die afwijken van onze schrijfwijzer, met per zin een voorstel. Kennis: de schrijfwijzer.
- **Onboarding-buddy.** Instructie: je beantwoordt vragen van nieuwe medewerkers op basis van het personeelshandboek en zegt het eerlijk als het antwoord er niet in staat. Kennis: het handboek en de werkafspraken.

Wil je niet dat de antwoorden naar je bestanden verwijzen, kies dan Kennisverwijzingen uitzetten.

## Kant-en-klare Gems van Google

Je hoeft niet bij nul te beginnen. Onder Kant-en-klare Gems van Google staan Gems met kant-en-klare instructies, van brainstormen en programmeren tot loopbaanadvies. Google noemt onder meer Brainstormer, Schrijfhulp, Loopbaanadvies en Studiebegeleider. Bij sommige staat de knop Kopie maken. Dan krijg je een eigen versie waarvan je de naam en instructies aanpast, bijvoorbeeld Schrijfhulp met jouw schrijfwijzer erin. Staat die knop er niet, dan kun je die Gem niet aanpassen.

## Een gem delen binnen je organisatie

Delen werkt zoals bij een bestand in Drive. Gedeelde Gems worden ook in een Drive-map opgeslagen.

1. Ga naar Gems en klik naast de Gem op Delen.
2. Vul het e-mailadres van een collega of groep in.
3. Kies **Kijker** (gebruiken en de instructies en bestanden bekijken) of **Editor** (ook aanpassen, verder delen en verwijderen).
4. Voeg eventueel een vervaldatum toe en klik op Sturen.

Zitten er geüploade bestanden in de Gem, dan vraagt Google of je die bestanden ook deelt. Onder algemene toegang kies je met een werkaccount voor Je organisatie: dan opent iedereen die in jullie domein is ingelogd de Gem. Je kunt het eigendom ook overdragen, handig als de maker vertrekt.

Drie dingen om vooraf te regelen:

- Iedereen met toegang ziet de instructies en de bestanden. Deel een Gem dus alleen met mensen die die bestanden ook mogen zien.
- Een editor kan de instructies wijzigen, en dan veranderen de antwoorden voor iedereen. Geef bij een teamgem één of twee mensen editorrechten.
- Een Gem met een notebook uit Gemini Notebook of een ander bestandstype dan een upload of een Drive-bestand kun je niet delen. De knop Delen ontbreekt dan.

## Wat de beheerder regelt voor Gems in Google Workspace

In de Beheerdersconsole ga je naar Menu, Generatieve AI, Gemini-app. Je hebt het beheerdersrecht Gemini-instellingen nodig. Onder Gems delen staat Gebruikers toestaan Gems te delen. Je kunt dit per organisatie-eenheid of configuratiegroep instellen, en groepsinstellingen gaan voor. Een wijziging kan tot 24 uur duren. Volgens de aankondiging van Google staat delen standaard aan.

Zet je het uit, dan kunnen gebruikers geen Gems meer delen vanuit de Gemini-app. Eerder gedeelde Gems zijn nog wel via Drive te openen en te delen.

Mag je team documenten buiten de organisatie delen, dan geldt dat ook voor Gems, want de Drive-instellingen voor delen tellen mee. Kijk die dus na voordat je een offerte-assistent met tarieven uitrolt.

Volgens Google is het delen van Gems beschikbaar in alle Workspace-edities, van Business Starter tot de Enterprise-, Education- en Nonprofit-edities. Wat er per abonnement in Gemini zelf zit, lees je op de pagina's over Gemini voor bedrijven.

## Grenzen: wat een Gem wel en niet kan

- **Bestanden.** De Gems-pagina verwijst voor limieten naar de algemene uploadregels: maximaal 10 bestanden per keer en maximaal 100 MB per bestand, een video tot 2 GB.
- **Geen Gemini Live.** Je kunt een Gem niet in een gesproken gesprek gebruiken.
- **Maken alleen in de browser.** Sommige functies werken nog niet in de mobiele app.
- **Opslag.** Gems met veel bestanden tellen mee voor de opslaglimiet van Gemini, los van je Drive-opslag.
- **Verwijderen door Google.** Google kan een Gem verwijderen als die mogelijk de voorwaarden schendt.

## Gems worden vaardigheden

Google vervangt Gems door vaardigheden: herbruikbare instructies die je in elk gesprek aanroept en combineert. Voor persoonlijke accounts worden Gems op 17 november 2026 alleen-lezen en op 17 december 2026 verwijderd. Voor zakelijke Workspace-accounts staat de overstap op maart 2027.

Google zet bestaande Gems automatisch om. Een vaardigheid kan maximaal 100 MB aan bestanden bevatten, en audio, video, zip-bestanden en oude formaten zoals .doc, .xls en .ppt gaan niet mee. Gebruik in nieuwe Gems dus .docx, .xlsx of pdf, dan heb je bij de overstap minder werk.

Het idee achter vaardigheden kennen we uit eigen werk. Voor een softwarebedrijf schreven we in 3 weken 32 herbruikbare skills voor advertentiebeheer, waarmee het team de campagnes zelf beheert. Dat bouwden we met Claude Code, niet met Gemini. Je leest het in de case [32 herbruikbare skills](/cases/google-ads-skills). De les geldt ook voor Gems: één taak per Gem, vaste stappen en een duidelijke eigenaar.

## Voor je begint

Leg vast welke klant- en persoonsgegevens in een Gem mogen, en neem gedeelde Gems mee in je risicobeoordeling met het [DPIA-stappenplan](/compliance/dpia-stappenplan). Leer je team ook hoe ze de antwoorden controleren; [AI-geletterdheid](/compliance/ai-geletterdheid) is een plicht uit de EU AI Act.

Twijfel je tussen Gemini, Copilot en Claude, kijk dan bij [welke AI past bij het MKB](/vergelijken/welke-ai-voor-mkb). Hoe je een zakelijk Claude-account voor je team opzet, staat in de [gids Claude voor het MKB](/gids/claude-voor-mkb). En wil je eerst weten welke taken een vaste assistent verdienen, dan loopt Camiel in de [AI Enablement Scan](/ai-enablement-scan) met je door je werkprocessen.
