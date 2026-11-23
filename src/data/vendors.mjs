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

// Maker per vendor, voor het schema (about-node van de vendorpagina's).
export const vendorMakers = {
  chatgpt: 'OpenAI',
  gemini: 'Google',
  copilot: 'Microsoft',
};

// Sleutel van een vendorpagina: '<vendor>/<slug>', de landing is '<vendor>/index'.
// De glob-loader strips het /index-slot, dus entry-id 'copilot' wordt 'copilot/index'.
export function vendorSleutel(id) {
  return id.includes('/') ? id : `${id}/index`;
}

// Vendor-tegen-vendor-vergelijkingen wonen onder /vergelijken, naast de Claude-vergelijkingen
// (besluit fase 0, november 2026). Het bronbestand blijft in src/content/vendors/<vendor>/;
// alleen de URL verhuist. Ze zijn nooit live geweest op /<vendor>/vs-chatgpt, dus er is geen
// redirect nodig. `tegen` is het tweede product voor het schema (about).
// De pagina hangt aan de schakelaar van zijn eigen vendor (src/data/livegang.mjs): /vergelijken
// is al indexeerbaar, dus een gebouwde pagina daar is meteen zichtbaar voor Google.
export const vendorVergelijkingen = {
  'copilot/vs-chatgpt': { pad: '/vergelijken/copilot-vs-chatgpt', tegen: 'chatgpt' },
  'gemini/vs-chatgpt': { pad: '/vergelijken/gemini-vs-chatgpt', tegen: 'chatgpt' },
};

// URL van een vendorpagina op basis van het entry-id (of de sleutel).
// index -> /<vendor>, verhuisde vergelijkingen -> /vergelijken/..., de rest -> /<vendor>/<slug>.
export function vendorPad(id) {
  const sleutel = vendorSleutel(id);
  if (vendorVergelijkingen[sleutel]) return vendorVergelijkingen[sleutel].pad;
  const [vendor, slug] = sleutel.split('/');
  return slug === 'index' ? `/${vendor}` : `/${vendor}/${slug}`;
}

// Pagina's die in geen enkele omgeving gebouwd worden: niet in productie en niet op staging
// (ook niet met STAGING_VENDORS=alle). Het bronbestand blijft staan; haal de regel hier weg en
// de pagina doet weer mee. Besluit fase 0 (november 2026): van 38 naar 27 vendorpagina's.
// status: 'samengevoegd in <doel>' (de inhoud gaat op in een andere pagina, die zelf blijft)
// of 'geschrapt' (geen eigen pagina waard). reden: één regel waarom.
export const geschrapt = {
  'chatgpt/kosten-per-maand': {
    status: 'samengevoegd in chatgpt/prijs-zakelijk',
    reden: 'Zelfde zoekintentie ("chatgpt prijs") als chatgpt/prijs-zakelijk.',
  },
  'chatgpt/atlas': {
    status: 'geschrapt',
    reden: 'Product is gestopt; een nieuwsachtig stuk dat snel veroudert.',
  },
  'copilot/pro': {
    status: 'geschrapt',
    reden: 'Consumentenplan dat niet meer verkocht wordt; geen zakelijke zoekintentie.',
  },
  'copilot/cowork': {
    status: 'geschrapt',
    reden: 'Voorlopig: geen publishDate en geen Claude-tegenhanger; opnieuw bekijken met vraagdata.',
  },
  'copilot/app': {
    status: 'samengevoegd in copilot/chat',
    reden: 'Zelfde vraag ("welke Copilot krijgen mijn medewerkers") als copilot/chat.',
  },
  'gemini/advanced': {
    status: 'samengevoegd in gemini/prijs-zakelijk',
    reden: 'Uitleg van een naamswijziging; de eigenlijke vraag is welk plan je neemt.',
  },
  'gemini/enterprise': {
    status: 'samengevoegd in gemini/prijs-zakelijk',
    reden: 'gemini/prijs-zakelijk behandelt Workspace en Gemini Enterprise al; geen publishDate.',
  },
  'gemini/gems': {
    status: 'samengevoegd in gemini/skills',
    reden: 'Google vervangt Gems door skills (Workspace-adminpagina "About the transition from Gems to skills": skills sinds oktober 2026, zakelijke accounts verliezen Gems niet eerder dan 1 maart 2027).',
  },
  // Besluiten over vendorpagina's die (nog) niet op main staan, ter vastlegging. Geen code-effect
  // zolang het bestand er niet is; komt het er toch, zet de regel dan hierboven.
  //   PR #102 chatgpt/veilig  -> samengevoegd in chatgpt/avg (PR sluiten)
  //   PR #103 chatgpt/pro     -> geschrapt (consumenten- en pro-plan, geen zakelijke intentie)
  //   PR #106 copilot/word    -> aangehouden (copilot/excel en copilot/outlook dekken het per-app-patroon al)
  //   PR #105 gemini/skills   -> houden (huidig product; neemt gemini/gems over)
};

/** Staat deze pagina op de schraplijst? Neemt een entry-id of sleutel. */
export function isGeschrapt(id) {
  return Object.hasOwn(geschrapt, vendorSleutel(id));
}
