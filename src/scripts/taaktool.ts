// Hero-tool op de homepage: de bezoeker typt een taak en krijgt een kaartje met een
// vergelijkbare case of pagina, plus de AI-check. Draait alleen in de browser: geen AI, geen
// server, niets in de URL. De taak gaat via sessionStorage naar de AI-check (zie
// ai-enablement-scan.astro), net als de bronmeting in bron.ts.

export const TAAK_SLEUTEL = 'ia-taak';

interface Doel {
  woorden: string[];
  pad: string;
  titel: string;
  soort: 'case' | 'pagina';
}

// Kleine letters, zonder accenten, alleen letters en cijfers.
const normaal = (t: string) =>
  t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

// Een trefwoord telt als een woord in de taak ermee begint ("notulen" vindt "notule"),
// of, bij een trefwoord van twee woorden, als de taak het letterlijk bevat.
function zoek(taak: string, doelen: Doel[]): Doel | null {
  const tekst = normaal(taak);
  const woorden = tekst.split(' ');
  let beste: Doel | null = null;
  let score = 0;
  for (const d of doelen) {
    const s = d.woorden.filter((w) => (w.includes(' ') ? tekst.includes(w) : woorden.some((x) => x.startsWith(w)))).length;
    if (s > score) { beste = d; score = s; }
  }
  return beste;
}

function maak<K extends keyof HTMLElementTagNameMap>(tag: K, klasse: string, tekst?: string) {
  const el = document.createElement(tag);
  el.className = klasse;
  if (tekst) el.textContent = tekst;
  return el;
}

function kaart(taak: string, doel: Doel | null) {
  const k = maak('div', 'v2-taak-kaart');
  if (doel) {
    k.append(maak('p', 'v2-taak-label', doel.soort === 'case' ? 'Vergelijkbaar voorbeeld:' : 'Meer hierover:'));
    const titel = maak('p', 'v2-taak-titel', doel.titel);
    k.append(titel);
    const lees = maak('a', 'v2-taak-lees', 'Lees verder →');
    lees.href = doel.pad;
    k.append(lees);
  } else {
    k.append(maak('p', 'v2-taak-titel', 'Goede kandidaat. In de gratis AI-check kijken we of dit bij jullie werkt.'));
  }
  const knop = maak('a', 'v2-knop v2-taak-knop', 'Doe de AI-check met deze taak →');
  knop.href = '/ai-enablement-scan';
  knop.addEventListener('click', () => {
    try { sessionStorage.setItem(TAAK_SLEUTEL, taak); } catch { /* geblokkeerd: de AI-check werkt ook zonder */ }
  });
  k.append(knop);
  return k;
}

export function startTaaktool() {
  const tool = document.querySelector<HTMLElement>('[data-taaktool]');
  const bron = document.getElementById('taak-catalogus');
  if (!tool || !bron) return;
  const doelen = JSON.parse(bron.textContent || '[]') as Doel[];
  const form = tool.querySelector<HTMLFormElement>('form');
  const invoer = tool.querySelector<HTMLInputElement>('input[name="taak"]');
  const uitkomst = tool.querySelector<HTMLElement>('[data-uitkomst]');
  if (!form || !invoer || !uitkomst) return;

  const toon = (taak: string) => {
    const t = taak.trim();
    if (!t) return invoer.focus();
    uitkomst.replaceChildren(kaart(t, zoek(t, doelen)));
    uitkomst.hidden = false;
  };

  form.addEventListener('submit', (e) => { e.preventDefault(); toon(invoer.value); });
  tool.querySelectorAll<HTMLButtonElement>('[data-taak]').forEach((b) =>
    b.addEventListener('click', () => { invoer.value = b.dataset.taak ?? ''; toon(invoer.value); }),
  );
}
