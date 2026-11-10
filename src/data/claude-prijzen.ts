// Eén plek voor de Claude-abonnementsprijzen. Bij elke maandelijkse controle (E-22)
// pas je hier de prijzen en de peildatum aan; PrijsTabel en de /prijs-hub lezen dit.
export const claudePrijzen = {
  peildatum: '2026-11-10',
  peildatumTekst: '10 november 2026',
  bron: 'https://claude.com/pricing',
  plannen: [
    { naam: 'Free', prijs: 'Gratis', features: ['Beperkt gebruiksbudget', 'Chat, bestanden en webzoeken', 'Om te proeven, niet om op te bouwen'] },
    { naam: 'Pro', prijs: '$20/maand', features: ['$17/maand bij jaarbetaling', 'Projects en Research', 'Claude Code', 'Voor individuele professionals'] },
    { naam: 'Team', prijs: '$25/gebruiker/maand', features: ['$20/gebruiker bij jaarbetaling', '2 tot 150 gebruikers', 'Centraal beheer, SSO, gedeelde Projects', 'Standaard geen training op jullie data', 'Premium seat (5x ruimte): $125/maand', 'API-credits: $20 per seat, $100 per premium seat, samen max. $500/maand'] },
    { naam: 'Enterprise', prijs: '$20/seat/maand + verbruik', features: ['Alles van Team', 'Minimaal 20 seats', 'SCIM en audit logs', 'IP-allowlisting, instelbare retentie', 'Per jaar gefactureerd, zelf afsluiten of via sales'] },
  ],
  // Ultra is de nieuwe naam van Max 20x (support.claude.com/en/articles/17728952-what-is-the-ultra-plan).
  max: { prijs: '$100/maand', gebruik: '5x Pro', apiCredits: '$100' },
  ultra: { prijs: '$200/maand', gebruik: '10x Pro per week, geen 5-uurslimiet', apiCredits: '$200' },
} as const;
