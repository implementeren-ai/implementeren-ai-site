// Gefaseerde livegang van de all-AI-uitbreiding (voorstel fase 0, november 2026; besluit nog bij
// Max). Vervangt de ene schakelaar `vendorsLive`, die /claude en alle drie de vendor-secties in
// één keer opende. Elke schakelaar hieronder kan nu los aan, zodat elke fase één wijziging is.
// Draaiboek en fasen: docs/vendor-go-live.md, sectie "Gefaseerd".
//
// ALLES STAAT STANDAARD UIT. Uit = de site is byte-gelijk aan de site van voor deze schakelaars.
//
// Een vendorpagina wordt alleen gebouwd als ALLE vier gelden:
//   1. hij staat niet in `geschrapt` (src/data/vendors.mjs);
//   2. isLive(entry): status en publishDate (src/lib/publicatie.mjs, de gewone regel);
//   3. de schakelaar van zijn vendor staat aan (`aan: true`);
//   4. zijn slug staat in `paginas` (null = alle niet-geschrapte pagina's van die vendor).
// Uitzondering voor stagingpreviews: STAGING=1 STAGING_VENDORS=alle bouwt elke niet-geschrapte
// vendorpagina met status review of published, ongeacht 3 en 4, zodat een reviewer alles ziet.
// STAGING_VENDORS doet niets zonder STAGING=1; productie kent het dus niet.
//
// Indexeerbaar en in de sitemap: alleen de vendorpagina's die via 3 en 4 aan staan (en de hub
// /<vendor> alleen als zijn 'index' aan staat en gebouwd wordt). Zie src/data/indexering.mjs.

import { isLive, isStaging } from '../lib/publicatie.mjs';
import { isGeschrapt, vendorSleutel, vendorSlugs } from './vendors.mjs';

export const livegang = {
  // /claude indexeerbaar en in de sitemap. Uit: de hub wordt wel gebouwd, maar is noindex en
  // staat buiten de sitemap (anders twee pagina's op "claude zakelijk" naast de homepage).
  claudeHub: false,

  // De automatische link naar /claude onderaan de Claude-artikelen (het "Gerelateerd"-blok in de
  // layouts, de twee gidsen en de "Claude zakelijk"-link in /gids/claude-voor-mkb). Los van
  // claudeHub, zodat fase 1 de hub kan openen zonder een sitebrede templatewijziging op de
  // pagina's die nu ranken. De link verschijnt alleen als claudeHub ook aan staat.
  claudeHubLinks: false,

  // Per vendor: `aan` opent die vendor, `paginas` zegt welke slugs meegaan. 'index' is de hub
  // /<vendor>; 'vs-chatgpt' is de vergelijking, die op /vergelijken/<vendor>-vs-chatgpt staat.
  // paginas: null = alle niet-geschrapte pagina's van die vendor.
  // Pilot (fase 1, voorstel): copilot: { aan: true, paginas: ['index', 'prijs-zakelijk', 'avg', 'chat', 'vs-chatgpt'] }
  chatgpt: { aan: false, paginas: null },
  gemini: { aan: false, paginas: null },
  copilot: { aan: false, paginas: null },

  // Fase 5: de homepage gaat over AI implementeren in plaats van "Claude zakelijk". Stuurt
  // alleen check 9 van scripts/onpage-check.mjs: uit = de homepage-H1 moet "Claude zakelijk"
  // bevatten, aan = hij moet over AI implementeren gaan. De homepage zelf past de go-live-PR aan.
  homepageNeutraal: false,
};

const SLUG = /^[a-z0-9-]+$/;
for (const vendor of vendorSlugs) {
  const s = livegang[vendor];
  if (!s || typeof s.aan !== 'boolean' || !(s.paginas === null || (Array.isArray(s.paginas) && s.paginas.every((p) => SLUG.test(p))))) {
    throw new Error(`src/data/livegang.mjs: ${vendor} moet { aan: boolean, paginas: null | string[] } zijn`);
  }
}

/** Staat de schakelaar van deze vendorpagina aan (punt 3 en 4)? Los van status en schraplijst. */
export function vendorPaginaAan(id) {
  const [vendor, slug] = vendorSleutel(id).split('/');
  const s = livegang[vendor];
  if (!s || !s.aan) return false;
  return s.paginas === null || s.paginas.includes(slug);
}

/** STAGING=1 STAGING_VENDORS=alle: alle niet-geschrapte vendorpagina's, ongeacht de schakelaars. */
export function stagingAlleVendors() {
  return isStaging() && process.env.STAGING_VENDORS === 'alle';
}

/**
 * Wordt deze vendorpagina gebouwd? id = entry-id ('copilot', 'copilot/chat') of sleutel.
 * publicatie = { status, publishDate } uit de frontmatter (Date of 'YYYY-MM-DD').
 */
export function bouwtVendorPagina(id, publicatie) {
  if (isGeschrapt(id)) return false;
  if (!isLive(publicatie)) return false;
  return stagingAlleVendors() || vendorPaginaAan(id);
}

/** Staat er minstens één vendorschakelaar aan? */
export const eenVendorAan = vendorSlugs.some((v) => livegang[v].aan);
