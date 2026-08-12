import type { Blueprint, BlueprintSummary, BlueprintType } from './types';

const modules = import.meta.glob('../../data/blueprints/*.json', { eager: true }) as Record<
  string,
  { default: Blueprint }
>;

function loadAll(): Blueprint[] {
  return Object.values(modules)
    .map((mod) => mod.default)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getAllBlueprints(): Blueprint[] {
  return loadAll();
}

export function getBlueprintSummaries(): BlueprintSummary[] {
  return getAllBlueprints().map(
    ({ slug, type, name, tagline, opportunityScore, painPoints }) => ({
      slug,
      type,
      name,
      tagline,
      opportunityScore,
      painPoints: painPoints.slice(0, 3),
    }),
  );
}

export function getBlueprint(type: BlueprintType, slug: string): Blueprint | undefined {
  return getAllBlueprints().find((bp) => bp.type === type && bp.slug === slug);
}

export function getSlugsByType(type: BlueprintType): string[] {
  return getAllBlueprints().filter((bp) => bp.type === type).map((bp) => bp.slug);
}

export function blueprintPath(bp: Pick<Blueprint, 'type' | 'slug'>): string {
  return `/${bp.type}/${bp.slug}`;
}
