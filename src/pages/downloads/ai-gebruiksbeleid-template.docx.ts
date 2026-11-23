// De template van /compliance/ai-beleid-template als Word-bestand.
// Gebouwd uit dezelfde Markdown als de pagina, zodat download en pagina nooit uit elkaar lopen:
// alles tussen de kop "Het ai gebruiksbeleid claude om te kopiëren" en de volgende H2,
// zonder de inleidende alinea.
import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import { markdownNaarDocx } from '../../lib/docx';

export const GET: APIRoute = async () => {
  const entry = await getEntry('compliance', 'ai-beleid-template');
  const body = entry?.body ?? '';
  const start = body.indexOf('**AI-gebruiksbeleid [bedrijfsnaam]**');
  const eind = body.indexOf('\n## ', start);
  if (start < 0 || eind < 0) throw new Error('ai-beleid-template: templatetekst niet gevonden');
  const markdown = body
    .slice(start, eind)
    .replace(/^Tabel: .*$/m, '');
  return new Response(markdownNaarDocx(markdown), {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    },
  });
};
