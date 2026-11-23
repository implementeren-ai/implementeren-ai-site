// Kleine .docx-schrijver zonder dependencies, voor downloadbare templates.
//
// Een .docx is een zip met drie XML-bestanden. We schrijven de zip "stored" (zonder
// compressie): Word, Google Docs en LibreOffice openen dat gewoon, en zo blijft dit
// bestand klein en zonder externe pakketten.
//
// Invoer is een beperkte Markdown-subset, precies wat de templates gebruiken:
// regels met **vet**, genummerde regels ("1. ..."), lege regels als alineagrens en
// pipe-tabellen. Alles daarbuiten wordt als platte tekst overgenomen.

const CRC_TABEL = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(data: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < data.length; i++) c = CRC_TABEL[(c ^ data[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function zipStored(bestanden: { naam: string; data: Uint8Array }[]): Uint8Array {
  const enc = new TextEncoder();
  const delen: Uint8Array[] = [];
  const centraal: Uint8Array[] = [];
  let offset = 0;
  // Vaste datum (1 jan 2026, 00:00) zodat de build reproduceerbaar is.
  const dosTijd = 0;
  const dosDatum = ((2026 - 1980) << 9) | (1 << 5) | 1;

  for (const b of bestanden) {
    const naam = enc.encode(b.naam);
    const crc = crc32(b.data);
    const lokaal = new DataView(new ArrayBuffer(30));
    lokaal.setUint32(0, 0x04034b50, true);
    lokaal.setUint16(4, 20, true);
    lokaal.setUint16(6, 0x0800, true); // UTF-8 bestandsnamen
    lokaal.setUint16(8, 0, true);
    lokaal.setUint16(10, dosTijd, true);
    lokaal.setUint16(12, dosDatum, true);
    lokaal.setUint32(14, crc, true);
    lokaal.setUint32(18, b.data.length, true);
    lokaal.setUint32(22, b.data.length, true);
    lokaal.setUint16(26, naam.length, true);
    lokaal.setUint16(28, 0, true);
    delen.push(new Uint8Array(lokaal.buffer), naam, b.data);

    const c = new DataView(new ArrayBuffer(46));
    c.setUint32(0, 0x02014b50, true);
    c.setUint16(4, 20, true);
    c.setUint16(6, 20, true);
    c.setUint16(8, 0x0800, true);
    c.setUint16(10, 0, true);
    c.setUint16(12, dosTijd, true);
    c.setUint16(14, dosDatum, true);
    c.setUint32(16, crc, true);
    c.setUint32(20, b.data.length, true);
    c.setUint32(24, b.data.length, true);
    c.setUint16(28, naam.length, true);
    c.setUint32(42, offset, true);
    centraal.push(new Uint8Array(c.buffer), naam);
    offset += 30 + naam.length + b.data.length;
  }

  const centraalLengte = centraal.reduce((s, d) => s + d.length, 0);
  const eind = new DataView(new ArrayBuffer(22));
  eind.setUint32(0, 0x06054b50, true);
  eind.setUint16(8, bestanden.length, true);
  eind.setUint16(10, bestanden.length, true);
  eind.setUint32(12, centraalLengte, true);
  eind.setUint32(16, offset, true);

  const alles = [...delen, ...centraal, new Uint8Array(eind.buffer)];
  const uit = new Uint8Array(alles.reduce((s, d) => s + d.length, 0));
  let p = 0;
  for (const d of alles) {
    uit.set(d, p);
    p += d.length;
  }
  return uit;
}

const xmlEsc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// "Tekst met **vet** erin" wordt runs met en zonder <w:b/>.
function runs(regel: string): string {
  return regel
    .split(/(\*\*[^*]+\*\*)/)
    .filter((d) => d.length > 0)
    .map((d) => {
      const vet = d.startsWith('**') && d.endsWith('**');
      const tekst = vet ? d.slice(2, -2) : d;
      return `<w:r>${vet ? '<w:rPr><w:b/></w:rPr>' : ''}<w:t xml:space="preserve">${xmlEsc(tekst)}</w:t></w:r>`;
    })
    .join('');
}

const alinea = (regel: string) => `<w:p>${runs(regel)}</w:p>`;

function tabel(regels: string[]): string {
  const rijen = regels
    .filter((r) => !/^\|\s*-/.test(r))
    .map((r) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()));
  const rand = '<w:top w:val="single" w:sz="4"/><w:left w:val="single" w:sz="4"/><w:bottom w:val="single" w:sz="4"/><w:right w:val="single" w:sz="4"/><w:insideH w:val="single" w:sz="4"/><w:insideV w:val="single" w:sz="4"/>';
  const body = rijen
    .map(
      (cellen, i) =>
        `<w:tr>${cellen
          .map((c) => `<w:tc><w:p>${runs(i === 0 ? `**${c}**` : c)}</w:p></w:tc>`)
          .join('')}</w:tr>`,
    )
    .join('');
  return `<w:tbl><w:tblPr><w:tblW w:w="5000" w:type="pct"/><w:tblBorders>${rand}</w:tblBorders></w:tblPr>${body}</w:tbl><w:p/>`;
}

/** Zet de Markdown-subset om in een .docx (bytes). */
export function markdownNaarDocx(markdown: string): Uint8Array {
  const regels = markdown.replace(/\r/g, '').split('\n');
  const blokken: string[] = [];
  for (let i = 0; i < regels.length; i++) {
    const r = regels[i].trimEnd();
    if (r.startsWith('|')) {
      const t: string[] = [];
      while (i < regels.length && regels[i].trim().startsWith('|')) t.push(regels[i++].trim());
      i--;
      blokken.push(tabel(t));
    } else if (r.trim() === '') {
      continue;
    } else {
      blokken.push(alinea(r));
    }
  }

  const document = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${blokken.join('')}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="708" w:footer="708" w:gutter="0"/></w:sectPr></w:body></w:document>`;
  const types = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`;
  const rels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`;

  const enc = new TextEncoder();
  return zipStored([
    { naam: '[Content_Types].xml', data: enc.encode(types) },
    { naam: '_rels/.rels', data: enc.encode(rels) },
    { naam: 'word/document.xml', data: enc.encode(document) },
  ]);
}
