---
title: 'Copilot uitrollen: eerst de rechten, dan de licenties'
titleTag: 'Copilot uitrollen in het MKB: stappenplan oversharing (2026)'
metaDescription: 'Microsoft 365 Copilot implementeren zonder datalek: licenties, oversharing in SharePoint opsporen, pilotgroep, adoptie en gebruik meten. Stand 5 nov 2026.'
h1: 'Copilot uitrollen: Microsoft 365 Copilot implementeren zonder verrassingen'
targetKeywords:
  - copilot uitrollen
  - microsoft 365 copilot implementeren
  - copilot oversharing
  - copilot pilot
  - sharepoint advanced management
wordCountTarget: 1300
priority: 2
tier: 2
cases:
  - consultant-brief
internalLinks:
  - /compliance/dpia-stappenplan
  - /compliance/ai-geletterdheid
  - /vergelijken/claude-vs-copilot
  - /claude-in-30-dagen
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
disclaimer: juridisch
kortAntwoord: 'Copilot toont een gebruiker alles waar die al leesrechten op heeft in SharePoint, OneDrive en Teams. Ruim daarom eerst te ruime rechten op en wijs pas daarna licenties toe. Zodra één gebruiker een Copilot-licentie heeft, krijg je volgens Microsoft de functies van SharePoint Advanced Management voor Copilot, zoals data access governance-rapporten en Restricted Content Discovery. Restricted SharePoint Search kun je sinds 31 juli 2026 niet meer nieuw aanzetten. Begin met een kleine pilotgroep en meet het gebruik in het Microsoft 365-beheercentrum. Stand 5 november 2026.'
bronnen:
  - titel: 'Microsoft Learn, License options for Microsoft Copilot'
    url: https://learn.microsoft.com/nl-nl/copilot/plan/copilot-license-options
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Microsoft Copilot requirements'
    url: https://learn.microsoft.com/nl-nl/copilot/plan/microsoft-copilot-requirements
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Secure & Governed Data Foundation for Microsoft Copilot'
    url: https://learn.microsoft.com/nl-nl/copilot/plan/secure-govern-copilot-foundational-deployment-guidance
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Prerequisites for SharePoint Advanced Management'
    url: https://learn.microsoft.com/nl-nl/sharepoint/sharepoint-advanced-management-prerequisites
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, SharePoint Advanced Management features in Microsoft Copilot licenses'
    url: https://learn.microsoft.com/nl-nl/sharepoint/sharepoint-advanced-management-features-copilot-license
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Data access governance reports for SharePoint sites'
    url: https://learn.microsoft.com/nl-nl/sharepoint/data-access-governance-reports
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Restrict discovery of SharePoint sites and content'
    url: https://learn.microsoft.com/nl-nl/sharepoint/restricted-content-discovery
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Restricted SharePoint Search'
    url: https://learn.microsoft.com/nl-nl/sharepoint/restricted-sharepoint-search
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Microsoft Purview service description (sensitivity labeling)'
    url: https://learn.microsoft.com/nl-nl/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
    geraadpleegd: 5 november 2026
  - titel: 'Microsoft Learn, Microsoft Copilot usage report'
    url: https://learn.microsoft.com/nl-nl/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage
    geraadpleegd: 5 november 2026
faq:
  - question: Wat is oversharing bij Copilot?
    answer: 'Oversharing betekent dat bestanden voor meer mensen openstaan dan nodig is, bijvoorbeeld een site die gedeeld is met iedereen in de organisatie. Copilot respecteert de rechten in SharePoint, OneDrive en Teams, maar vindt zulke bestanden wel sneller dan een medewerker die zelf door mappen klikt. Wat te ruim openstaat, komt dus eerder in een antwoord terecht.'
  - question: Heb ik SharePoint Advanced Management nodig om Copilot uit te rollen?
    answer: 'Het is niet verplicht, maar Microsoft raadt het sterk aan. Je hoeft het niet apart te kopen: zodra minstens één gebruiker een Copilot-licentie heeft, krijgen je SharePoint-beheerders volgens Microsoft Learn de SAM-functies voor Copilot. Dat geldt volgens Microsoft voor zakelijke en enterprise-tenants. Een paar functies, zoals restricted site creation by apps, vragen de losse add-on.'
  - question: Kan ik Restricted SharePoint Search nog gebruiken?
    answer: 'Nieuw aanzetten kan niet meer. Microsoft schrijft dat Restricted SharePoint Search wordt uitgefaseerd en dat nieuwe activering sinds 31 juli 2026 is geblokkeerd. Microsoft verwijst naar Restricted Content Discovery, waarmee je per SharePoint-site voorkomt dat de inhoud in Copilot en organisatiebreed zoeken opduikt.'
  - question: Welke licentie heb ik nodig voor gevoeligheidslabels?
    answer: 'Handmatig labelen zit volgens de Purview-servicebeschrijving in onder meer Microsoft 365 Business Premium, E3 en E5. Automatisch labelen op basis van de inhoud staat in die tabel bij Microsoft 365 E5 en losse Purview-pakketten. Het rapport over gevoeligheidslabels in de data access governance-rapporten vraagt ook E5.'
  - question: Hoe groot moet een Copilot pilot zijn?
    answer: 'Microsoft schrijft geen aantal voor. In het MKB werkt een groep van vijf tot tien mensen goed, verdeeld over twee of drie afdelingen, met mensen die de hele dag in Outlook, Word en Teams werken. Geef accounts met toegang tot HR- of salarisgegevens de licentie liever pas na de pilot.'
  - question: Hoe meet ik of Copilot gebruikt wordt?
    answer: 'In het Microsoft 365-beheercentrum staat onder Rapporten, Gebruik een Copilot-rapport. Je ziet het aantal gebruikers met een licentie, het aantal actieve gebruikers en het gebruik per app, over 7, 28, 90 of 180 dagen. Of het ook tijd scheelt, moet je zelf navragen bij je team.'
---

Bij Copilot uitrollen denken de meeste IT-verantwoordelijken eerst aan licenties. Die zijn in een middag toegewezen. Het echte werk zit ergens anders: Copilot laat een medewerker alles zien waar hij al leesrechten op heeft in SharePoint, OneDrive en Teams. Staat een map met salarissen per ongeluk open voor de hele organisatie, dan kan Copilot die inhoud gewoon gebruiken in een antwoord.

Dit stappenplan is voor de IT-verantwoordelijke in een MKB-bedrijf die Microsoft 365 Copilot gaat implementeren. Alles komt uit de documentatie van Microsoft Learn, bekeken op 5 november 2026. Microsoft noemt het product sinds kort Microsoft Copilot; in licenties en schermen zie je nog vaak de oude naam.

## Stap 1: licenties en voorwaarden voor Copilot uitrollen

Voor het MKB is er Microsoft Copilot Business, een invoegtoepassing voor organisaties tot 300 gebruikers met een jaarlijkse commitment. Volgens Microsoft Learn kun je die toevoegen aan Microsoft 365 Business Basic, Business Standard, Business Premium, Microsoft 365 Apps for Business en Microsoft Teams Essentials. Grotere organisaties gebruiken de enterprise-licentie. Je wijst licenties toe in het Microsoft 365-beheercentrum.

Daarnaast vraagt Copilot een paar dingen van je omgeving:

- een werkaccount in Microsoft Entra ID voor elke gebruiker;
- een Exchange Online-mailbox voor alles wat met mail, agenda en vergaderingen werkt;
- OneDrive voor een deel van de functies;
- transcriptie of opname in Teams als Copilot na een vergadering iets met de inhoud moet doen;
- een netwerk dat het hele domein `*.cloud.microsoft` doorlaat, inclusief WebSockets.

Voor het beheer hoeft niet iedereen globale beheerder te zijn. Microsoft noemt de rol AI-beheerder (AI Administrator) voor Copilot- en AI-instellingen.

Copilot Chat, de chat zonder Copilot-licentie, is beschikbaar voor gebruikers met een geschikt Microsoft 365-abonnement. Die laten we hier verder buiten beschouwing.

## Stap 2: Copilot oversharing opsporen

Microsoft noemt een veilige en goed beheerde basis "niet verplicht, maar sterk aanbevolen". Het advies van Microsoft rust op twee producten: SharePoint Advanced Management (SAM) en Microsoft Purview.

**SharePoint Advanced Management zit bij je Copilot-licentie.** Zodra minstens één gebruiker in je organisatie een Copilot-licentie heeft, krijgen je SharePoint-beheerders volgens Microsoft Learn de SAM-functies die een Copilot-uitrol ondersteunen. Dat geldt voor zakelijke en enterprise-tenants. Een enkele functie, zoals restricted site creation by apps, vraagt de losse SharePoint Advanced Management Plan 1.

Begin met de data access governance-rapporten. Je vindt ze in het SharePoint-beheercentrum onder Rapporten, Data access governance. Microsoft raadt aan zo te werken:

1. **Draai eerst het rapport met sitemachtigingen.** Dat geeft een momentopname van alle SharePoint- en OneDrive-sites en laat zien welke sites het breedst openstaan, bijvoorbeeld met gasten of met de groep "Iedereen behalve externe gebruikers". Microsoft adviseert dit elk kwartaal te herhalen.
2. **Volg met de activiteitenrapporten.** Die laten zien waar in de afgelopen 28 dagen de meeste deellinks zijn gemaakt en waar iets met de hele organisatie is gedeeld. Microsoft adviseert deze maandelijks.
3. **Laat site-eigenaren meekijken.** Met een site access review vraag je de eigenaar van een te ruim gedeelde site om de rechten na te lopen. In een klein bedrijf weet de eigenaar meestal beter dan IT wie erbij moet.

Voor een MKB-bedrijf met een paar dozijn sites is dit vaak een week werk. Begin bij de plekken met HR, financiën, salarissen en klantdossiers.

## Stap 3: tijdelijk afschermen met Restricted Content Discovery

Je hoeft niet te wachten tot elke site is opgeruimd. Met Restricted Content Discovery zet je per SharePoint-site een vlag, zodat de inhoud niet in Copilot-antwoorden en organisatiebreed zoeken verschijnt. Je zet het aan in het SharePoint-beheercentrum onder Sites, Actieve sites, tabblad Instellingen, met de schakelaar Restrict content from Microsoft Copilot.

Drie dingen om te weten:

- **Rechten veranderen niet.** Wie toegang had, kan het bestand nog steeds openen.
- **OneDrive valt erbuiten.** Het werkt alleen op SharePoint-sites.
- **Het kost tijd.** Bij sites met meer dan 500.000 items kan het volgens Microsoft langer dan een week duren voordat de wijziging overal doorwerkt.

Gebruik het met mate. Microsoft waarschuwt dat te veel afgeschermde sites de antwoorden van Copilot minder volledig maken.

Lees je oudere handleidingen, dan kom je Restricted SharePoint Search tegen. Die functie wordt uitgefaseerd. Sinds 31 juli 2026 kun je hem niet meer nieuw aanzetten, en Microsoft verwijst naar Restricted Content Discovery.

## Stap 4: gevoeligheidslabels met Microsoft Purview

Rechten opschonen pakt het grootste deel aan. Gevoeligheidslabels geven je een tweede laag: een label als Vertrouwelijk reist mee met het document. Let op wat je licentie toelaat.

- **Handmatig labelen** zit volgens de Purview-servicebeschrijving in onder meer Microsoft 365 Business Premium, E3 en E5. Met Business Standard alleen heb je het niet.
- **Labels erven** van bron naar Copilot-antwoord werkt met die licenties plus een Copilot-licentie.
- **Automatisch labelen** op basis van de inhoud staat bij Microsoft 365 E5 en losse Purview-pakketten.

Ook het rapport over gevoeligheidslabels in de data access governance-rapporten vraagt E5. Voor de meeste MKB-bedrijven op Business Premium betekent dat: een paar duidelijke labels, handmatig toegepast, met een korte uitleg aan je team.

## Stap 5: een Copilot pilot met een kleine groep

Rol niet in één keer uit. Een pilotgroep van vijf tot tien mensen uit twee of drie afdelingen laat snel zien waar het wringt. Kies mensen die de hele dag in Outlook, Word en Teams werken, en geef accounts met toegang tot HR- of salarisgegevens de licentie liever pas later.

Spreek vooraf af wat je wilt leren. Welke taken gaan sneller? Waar geeft Copilot antwoorden met bestanden die iemand niet verwachtte? Dat laatste is een signaal dat stap 2 nog niet af is. Leg die meldingen vast en los ze op voordat je uitbreidt.

Vergeet de afspraken niet. Welke klant- en persoonsgegevens mogen erin, en wie controleert antwoorden met persoonsgegevens? Voor een risicobeoordeling kun je ons [DPIA-stappenplan](/compliance/dpia-stappenplan) gebruiken.

## Stap 6: adoptie en gebruik meten

Een licentie die niemand gebruikt, kost elke maand geld. In het Microsoft 365-beheercentrum vind je onder Rapporten, Gebruik het Copilot-rapport. Daar zie je:

- hoeveel gebruikers een licentie hebben en hoeveel er echt iets met Copilot doen;
- het gebruik per app, zoals Outlook, Teams, Word en Excel;
- het aantal prompts per gebruiker, over 7, 28, 90 of 180 dagen.

De gegevens lopen tot 48 uur achter. Vanuit het rapport kun je ook organisatieberichten inzetten om het gebruik op gang te helpen. Microsoft verwijst daarnaast naar het Copilot-dashboard in Viva Insights.

Cijfers over gebruik zeggen nog niets over tijdwinst. Vraag na vier weken per taak hoeveel tijd het scheelt. Mensen leren het sneller met een paar vaste voorbeelden uit hun eigen werk dan met een algemene training, en [AI-geletterdheid](/compliance/ai-geletterdheid) is sinds 2025 ook een plicht uit de EU AI Act.

## Wat we zelf zien bij een uitrol

De techniek is zelden het knelpunt. Bij een IT-consultancybureau bouwden we met Claude een werkwijze die opnames van klantgesprekken omzet in een korte brief. Een gesprek van 1 uur uitwerken ging van 45 naar 5 minuten. Die winst kwam uit de afspraken eromheen: wie de opnames mag zien, hoe lang ze bewaard blijven en wat er in de brief staat. Je leest het in de case [vergadernotities naar actiepunten](/cases/consultant-brief). Bij Copilot krijg je precies dezelfde vragen.

Twijfel je nog tussen Copilot en een ander model, lees dan [Claude vs Copilot](/vergelijken/claude-vs-copilot). Hoe wij een uitrol in vier weken aanpakken, met champions en een promptbibliotheek, staat bij [Claude in 30 dagen](/claude-in-30-dagen). Wil je eerst weten waar AI in jouw processen iets oplevert? Met de [AI Enablement Scan](/ai-enablement-scan) loopt Camiel samen met je je werk en je Microsoft 365-omgeving langs, voordat je licenties koopt.
