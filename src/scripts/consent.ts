// Toestemming voor optionele metingen (AVG, art. 11.7a Telecommunicatiewet).
//
// Zonder keuze, en bij elke fout, geldt: geen toestemming. Sluiten, scrollen of de banner
// negeren zet niets aan. De keuze zelf staat in localStorage onder 'iai-consent'; dat is
// strikt noodzakelijk om de keuze te onthouden.
//
// API voor latere tools (bijvoorbeeld Microsoft Clarity, nu niet in gebruik):
//   window.iaiConsent.get()  -> { analytics: boolean } | null (null = nog geen keuze)
//   window.iaiConsent.open() -> opent de instellingen
//   window 'iai-consent-change' (CustomEvent, detail { analytics }) bij elke nieuwe keuze.
// Een toekomstig script mag pas laden als analytics === true, en moet stoppen bij een
// event met analytics === false.

export const CONSENT_SLEUTEL = 'iai-consent';
export const CONSENT_EVENT = 'iai-consent-change';
const VERSIE = 1;
const MAX_LEEFTIJD_MS = 365 * 24 * 60 * 60 * 1000; // na 12 maanden opnieuw vragen

export interface Toestemming {
  analytics: boolean;
}

interface Opgeslagen extends Toestemming {
  v: number;
  ts: string;
}

// Keuze voor deze pageview als opslaan mislukte: de banner blijft dan weg, maar
// analytics blijft uit (geen opslag = geen bewijs van toestemming).
let alleenDezePagina: Toestemming | null = null;

function geldig(ruw: unknown): ruw is Opgeslagen {
  if (!ruw || typeof ruw !== 'object') return false;
  const o = ruw as Partial<Opgeslagen>;
  if (o.v !== VERSIE || typeof o.analytics !== 'boolean' || typeof o.ts !== 'string') return false;
  const tijd = Date.parse(o.ts);
  if (Number.isNaN(tijd)) return false;
  const leeftijd = Date.now() - tijd;
  return leeftijd >= 0 && leeftijd < MAX_LEEFTIJD_MS;
}

/** De opgeslagen keuze, of null als er (nog) geen geldige keuze is. Gooit nooit. */
export function leesToestemming(): Toestemming | null {
  try {
    const ruw = localStorage.getItem(CONSENT_SLEUTEL);
    if (ruw) {
      const data: unknown = JSON.parse(ruw);
      if (geldig(data)) return { analytics: data.analytics };
    }
  } catch {
    // localStorage geblokkeerd of kapotte JSON: behandelen als geen keuze.
  }
  return alleenDezePagina;
}

/** True alleen bij een opgeslagen, geldige keuze voor analyse. */
export function analyseToegestaan(): boolean {
  return leesToestemming()?.analytics === true;
}

/** Slaat de keuze op en meldt hem via het iai-consent-change-event. */
export function bewaarToestemming(analytics: boolean): Toestemming {
  let staat: Toestemming = { analytics };
  try {
    const opslag: Opgeslagen = { v: VERSIE, analytics, ts: new Date().toISOString() };
    localStorage.setItem(CONSENT_SLEUTEL, JSON.stringify(opslag));
    alleenDezePagina = null;
  } catch {
    staat = { analytics: false };
    alleenDezePagina = staat;
  }
  try {
    window.dispatchEvent(new CustomEvent<Toestemming>(CONSENT_EVENT, { detail: staat }));
  } catch {
    // Een luisteraar die gooit mag de keuze niet ongedaan maken.
  }
  return staat;
}
