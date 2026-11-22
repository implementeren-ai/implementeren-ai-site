// Eén bron van waarheid voor "mag Google dit pad zien".
//
// Gebruikt door twee plekken die vroeger langs elkaar heen konden groeien:
//   - astro.config.mjs, voor de sitemap-filter (welke paden bieden we aan)
//   - src/layouts/BasisLayout.astro, voor de robots-metatag (welke paden mogen geïndexeerd)
//
// Sitemap-uitsluiting is géén noindex. Een pad uit de sitemap houden betekent alleen
// dat we het niet actief aanbieden; lekt de URL (doorgestuurde link, mailscanner,
// referrer) dan kan Google hem alsnog crawlen en indexeren. Daarom staat de
// noindex-beslissing hier, naast de sitemap-beslissing, en niet los ervan.

import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import { isLive, leesPublicatie } from '../lib/publicatie.mjs';
import { livegang, bouwtVendorPagina } from './livegang.mjs';
import { vendorPad, vendorSlugs } from './vendors.mjs';

// De hoofdschakelaar. Zolang deze true is krijgt de HELE site noindex, ongeacht pad.
//
// Na de launch is alleen de lijst `zakelijk` hieronder indexeerbaar.
export const preLaunch = false;

// Vendor-livegang: de schakelaars staan in src/data/livegang.mjs (voorstel fase 0, november
// 2026: gefaseerd in plaats van alles op één dag). Daar vervangen ze de vroegere ene schakelaar
// `vendorsLive`: /claude, elke vendor en elke groep pagina's kan nu los live. Alles staat
// standaard uit; dan blijven /chatgpt, /gemini en /copilot noindex en buiten de sitemap, ook
// als er per ongeluk een pagina op 'published' komt.
// Draaiboek: docs/vendor-go-live.md
export { livegang };

// De Claude-hub. Indexeerbaar zodra livegang.claudeHub aan staat (zie zakelijk.exact).
export const claudeHub = '/claude';

// De automatische link naar de Claude-hub op Claude-artikelen en gidsen (Gerelateerd-blok en de
// "Claude zakelijk"-link in /gids/claude-voor-mkb). Alleen als de hub open is én
// livegang.claudeHubLinks aan staat; zo kan de hub open zonder sitebrede templatewijziging.
// Layouts geven `[...data.internalLinks, ...claudeHubGerelateerd]` door aan GerelateerdeLinks.
export const claudeHubLinkAan = livegang.claudeHub && livegang.claudeHubLinks;
export const claudeHubGerelateerd = claudeHubLinkAan ? [claudeHub] : [];

// Vendorpaden die via hun schakelaar aan staan. paginas: null opent de hele sectie /<vendor>;
// een lijst opent precies die paden. Een verhuisde vergelijking (/vergelijken/<vendor>-vs-chatgpt)
// valt al onder de sectie /vergelijken; die wordt alleen niet gebouwd zolang zijn vendor uit staat.
function vendorAllowlist() {
  const exact = [];
  const secties = [];
  for (const vendor of vendorSlugs) {
    const s = livegang[vendor];
    if (!s.aan) continue;
    if (s.paginas === null) secties.push('/' + vendor);
    else for (const slug of s.paginas) exact.push(vendorPad(`${vendor}/${slug}`));
  }
  return { exact, secties };
}
const vendorPaden = vendorAllowlist();

// De zakelijke site. Alleen wat hier staat mag ooit geïndexeerd worden: alles daarbuiten
// (losse HTML in public/, toekomstige pagina's) is noindex tenzij het hier
// bewust wordt toegevoegd. Een nieuwe pagina vergeten is dus veilig: die blijft onzichtbaar.
export const zakelijk = {
  // Alleen exact dit pad.
  exact: [
    '/',
    '/ai-enablement-scan',
    '/ai-implementatie',
    '/claude-compagnon',
    '/claude-consultant',
    '/claude-implementatie',
    '/claude-in-30-dagen',
    '/claude-readiness-scan',
    '/contact',
    '/hoe-claude-werkt',
    '/methodologie',
    '/over',
    '/privacy',
    '/verticalen',
    // De Claude-hub (/claude) neemt "claude zakelijk" over van de homepage. Tot livegang.claudeHub
    // aan staat is hij wel gebouwd, maar noindex en buiten de sitemap: twee pagina's op hetzelfde
    // zoekwoord zou kannibalisatie zijn.
    ...(livegang.claudeHub ? [claudeHub] : []),
    // Losse vendorpagina's uit een vendor met een paginalijst (src/data/livegang.mjs).
    ...vendorPaden.exact,
  ],
  // Het pad zelf en alles eronder, zoals /cases en /cases/crm-weekend.
  secties: [
    '/cases',
    '/gids',
    '/tools',
    '/compliance',
    '/integraties',
    '/nieuws',
    '/prijs',
    '/training',
    '/use-cases',
    '/vergelijken',
    // Vendor-secties (src/content/vendors): /chatgpt, /gemini, /copilot en alles eronder.
    // Alleen een vendor met aan: true en paginas: null (src/data/livegang.mjs).
    ...vendorPaden.secties,
  ],
  // Alles wat zo begint, voor de route claude-voor-[slug].
  prefixen: ['/claude-voor-'],
  // Bestanden die de zakelijke pagina's laden. Alleen gebruikt door de edge-header in
  // functions/_middleware.js, zodat het logo en de teamfoto's wel in Google mogen.
  assets: ['/_astro/', '/team/', '/logos/', '/icons/', '/brand/', '/favicon.svg', '/favicon.ico', '/apple-touch-icon.png', '/site.webmanifest', '/og-implementeren.png', '/robots.txt', '/sitemap-'],
};

// Elk niet-HTML-bestand in de root van dist/ staat in precies
// één van deze lijsten, anders faalt scripts/check-dist.mjs. Een nieuw rootbestand (llms.txt,
// verificatiebestand, sleutel) deel je dus bewust in.
// zakelijk: zonder noindex-header, moet ook onder zakelijk.assets vallen.
// bewustNoindex: openbaar leesbaar, de middleware zet er noindex op.
// /llms.txt (A-21) en /_routes.json (A-15) staan er al in, zodat die taken dit bestand niet
// hoeven aan te raken.
export const rootBestanden = {
  zakelijk: ['/favicon.svg', '/favicon.ico', '/apple-touch-icon.png', '/site.webmanifest', '/og-implementeren.png', '/robots.txt', '/sitemap-index.xml', '/sitemap-0.xml', '/sitemap-claudezakelijk-nl.xml'],
  bewustNoindex: ['/386ecd4c13fe57021749388a72d3ac44.txt', '/llms.txt', '/_headers', '/_redirects', '/_routes.json'],
};

// Hubs zonder gepubliceerde kinderen (review 23 juli, B2): een leeg overzicht is een
// thin-content-signaal. Zodra een collectie een live entry heeft, doet de hub vanzelf
// weer mee. Een ingeplande entry (publishDate na vandaag) telt nog niet: de hub gaat
// pas open op de dag van de eerste publicatie (src/lib/publicatie.mjs).
const HUB_COLLECTIES = {
  verticalen: '/verticalen',
  compliance: '/compliance',
  usecases: '/use-cases',
  integraties: '/integraties',
  training: '/training',
  nieuws: '/nieuws',
  vergelijkingen: '/vergelijken',
  prijs: '/prijs',
};

function bepaalLegeHubs() {
  const leeg = [];
  for (const [collectie, route] of Object.entries(HUB_COLLECTIES)) {
    const dir = join('src/content', collectie);
    let published = 0;
    for (const bestand of readdirSync(dir)) {
      if (!bestand.endsWith('.md')) continue;
      if (isLive(leesPublicatie(readFileSync(join(dir, bestand), 'utf-8')))) published++;
    }
    if (published === 0) leeg.push(route);
  }
  // Vendor-hubs: /<vendor> wordt alleen gebouwd als src/content/vendors/<vendor>/index.md
  // gebouwd wordt: live, niet geschrapt en zijn schakelaar aan (bouwtVendorPagina,
  // src/data/livegang.mjs; src/pages/[vendor]/index.astro). Zonder gebouwde index-entry is de hub
  // er niet, dus niet in de sitemap en noindex aan de rand; de losse vendor-pagina's doen gewoon mee.
  for (const slug of vendorSlugs) {
    const bestand = join('src/content/vendors', slug, 'index.md');
    if (!existsSync(bestand) || !bouwtVendorPagina(`${slug}/index`, leesPublicatie(readFileSync(bestand, 'utf-8')))) leeg.push('/' + slug);
  }
  return leeg;
}

export const legeHubs = bepaalLegeHubs();

// Vendorpaden die deze build echt bouwt (bouwtVendorPagina, src/data/livegang.mjs), gelezen uit
// de frontmatter zoals bepaalLegeHubs. Voor de onderdelen die pas mogen verschijnen als er
// werkelijk een vendorpagina staat: het linkblok op de homepage en de zin op /over.
function bepaalGebouwdeVendorPaden() {
  const paden = {};
  for (const vendor of vendorSlugs) {
    paden[vendor] = [];
    const dir = join('src/content/vendors', vendor);
    if (!existsSync(dir)) continue;
    for (const bestand of readdirSync(dir).sort()) {
      if (!bestand.endsWith('.md')) continue;
      const id = `${vendor}/${bestand.replace(/\.md$/, '')}`;
      if (bouwtVendorPagina(id, leesPublicatie(readFileSync(join(dir, bestand), 'utf-8')))) paden[vendor].push(vendorPad(id));
    }
  }
  return paden;
}

export const gebouwdeVendorPaden = bepaalGebouwdeVendorPaden();
/** Vendors met minstens één gebouwde pagina, in de volgorde van vendorSlugs. */
export const gebouwdeVendors = vendorSlugs.filter((v) => gebouwdeVendorPaden[v].length > 0);

// Trailing slash weg, lege string wordt '/'. Houdt '/cases' en '/cases/' gelijk.
function normaliseerPad(pad) {
  return pad.replace(/\/$/, '') || '/';
}

// Hoort dit pad bij de zakelijke site?
export function isZakelijkPad(pad) {
  const p = normaliseerPad(pad);
  return (
    zakelijk.exact.includes(p) ||
    zakelijk.secties.some((q) => p === q || p.startsWith(q + '/')) ||
    zakelijk.prefixen.some((q) => p.startsWith(q))
  );
}

// Mag Google dit pad na de launch indexeren: zakelijk, en geen lege hub.
export function isIndexeerbaarPad(pad) {
  const p = normaliseerPad(pad);
  return isZakelijkPad(p) && !legeHubs.includes(p);
}

// De sitemap-filter: alleen wat ook geïndexeerd mag worden.
export function inSitemap(url) {
  return isIndexeerbaarPad(new URL(url).pathname);
}

// De vraag die BasisLayout stelt.
export function moetNoindex(pad) {
  return preLaunch || !isIndexeerbaarPad(pad);
}

// Collectie -> URL-voorvoegsel; loopt gelijk met de [slug]-pagina's in src/pages.
// De vendors-collectie staat hier bewust niet in: zijn routes zijn genest
// (/<vendor>/<slug>, index.md -> /<vendor>), dus astro.config.mjs (lastmod) en
// scripts/indexnow.mjs behandelen die collectie apart.
export const collectieRoutes = {
  cases: '/cases/', verticalen: '/claude-voor-', compliance: '/compliance/', usecases: '/use-cases/',
  integraties: '/integraties/', training: '/training/', nieuws: '/nieuws/', vergelijkingen: '/vergelijken/', prijs: '/prijs/',
};
