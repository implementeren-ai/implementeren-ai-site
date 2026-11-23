import { getCollection, type CollectionEntry } from 'astro:content';
import { isLive } from './publicatie.mjs';
import { bouwtVendorPagina } from '../data/livegang.mjs';

/**
 * Collecties die het `status`-veld uit baseSeoFields dragen
 * (zie src/content.config.ts). Collecties zonder status-veld
 * (diensten, methodologie, cases) vallen hier bewust buiten.
 */
export type StatusCollectie =
  | 'verticalen'
  | 'integraties'
  | 'usecases'
  | 'vergelijkingen'
  | 'compliance'
  | 'training'
  | 'nieuws'
  | 'prijs'
  | 'vendors';

/**
 * Alleen live entries horen in de build (en dus in de sitemap): status 'published' en een
 * publishDate op of voor de bouwdatum. Een ingeplande entry (datum in de toekomst) wacht op
 * de dagelijkse build van zijn datum. De regel staat in src/lib/publicatie.mjs.
 */
export function isPublished<C extends StatusCollectie>(entry: CollectionEntry<C>): boolean {
  return isLive(entry.data);
}

/** Haalt een collectie op en filtert op live entries (zie isPublished). */
export async function getPublished<C extends StatusCollectie>(
  collection: C,
): Promise<CollectionEntry<C>[]> {
  return (await getCollection(collection)).filter((entry) => isPublished(entry));
}

/**
 * Wordt deze vendorpagina gebouwd: live (zie isPublished), niet geschrapt en zijn schakelaar aan
 * (src/data/livegang.mjs; STAGING=1 STAGING_VENDORS=alle negeert de schakelaars). Gebruik dit
 * voor de vendors-collectie in plaats van isPublished / getPublished('vendors').
 */
export function isVendorGebouwd(entry: CollectionEntry<'vendors'>): boolean {
  return bouwtVendorPagina(entry.id, entry.data);
}

/** Alle gebouwde vendorpagina's (zie isVendorGebouwd). */
export async function getVendorPaginas(): Promise<CollectionEntry<'vendors'>[]> {
  return (await getCollection('vendors')).filter((entry) => isVendorGebouwd(entry));
}
