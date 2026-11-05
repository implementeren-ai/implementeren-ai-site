// Eén bron voor de vendor-secties (ChatGPT, Gemini, Microsoft Copilot): de slugs zijn de
// URL-roots (/chatgpt, /gemini, /copilot) én de mapnamen onder src/content/vendors/.
// Als .mjs zodat zowel de Astro-componenten als src/data/indexering.mjs (en daarmee de
// node-scripts) hetzelfde lijstje lezen. De vendor-enum in src/content.config.ts en
// COLLECTION 'vendors' in scripts/quality-gate.py lopen hiermee gelijk; pas ze samen aan.

export const vendorSlugs = ['chatgpt', 'gemini', 'copilot'];

// Zichtbare naam in broodkruimel, schema (articleSection) en de hub-lijst.
export const vendorNamen = {
  chatgpt: 'ChatGPT',
  gemini: 'Gemini',
  copilot: 'Microsoft Copilot',
};

// Chip-label boven de H1 per paginasoort (zelfde plek als "Prijzen" op /prijs/*).
export const soortLabels = {
  landing: 'Overzicht',
  prijs: 'Prijzen',
  avg: 'AVG',
  vergelijking: 'Vergelijking',
  howto: 'Stappenplan',
};
