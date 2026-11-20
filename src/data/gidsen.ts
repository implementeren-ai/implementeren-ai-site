// Eén bron voor de datums van de drie gidspagina's. De pagina's en de hub
// (/gids) lezen allebei hieruit, zodat de hub niet meer achterloopt
// (de hub toonde 2 oktober terwijl de pagina's op 19 november stonden).
export const gidsDatums = {
  'claude-voor-mkb': { gepubliceerd: '2026-10-02', bijgewerkt: '2026-11-19' },
  'overstappen-van-chatgpt-naar-claude': { gepubliceerd: '2026-10-02', bijgewerkt: '2026-11-19' },
  'claude-code-voor-bedrijven': { gepubliceerd: '2026-10-02', bijgewerkt: '2026-11-19' },
} as const;

export type GidsSlug = keyof typeof gidsDatums;

export const datumNl = (iso: string) =>
  new Date(iso).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Amsterdam' });
