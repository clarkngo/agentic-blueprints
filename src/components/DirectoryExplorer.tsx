import { useMemo, useState } from 'react';
import type { BlueprintSummary } from '../lib/types';
import CreateBlueprint from './CreateBlueprint';

interface DirectoryExplorerProps {
  blueprints: BlueprintSummary[];
  baseUrl: string;
}

type Filter = 'all' | 'industry' | 'company';

export default function DirectoryExplorer({ blueprints, baseUrl }: DirectoryExplorerProps) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blueprints.filter((bp) => {
      if (filter !== 'all' && bp.type !== filter) return false;
      if (!q) return true;
      const haystack = [bp.name, bp.tagline, bp.slug, ...bp.painPoints].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }, [blueprints, filter, query]);

  const showCreate = query.trim().length > 0 && filtered.length === 0;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <label className="relative block flex-1">
          <span className="sr-only">Search blueprints</span>
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search industries, companies, or pain points…"
            className="w-full rounded-xl border border-line bg-white/90 py-3.5 pl-11 pr-4 text-ink shadow-sm outline-none ring-teal/30 placeholder:text-slate/80 focus:border-teal focus:ring-4 transition"
          />
        </label>
        <div className="flex rounded-xl border border-line bg-white/90 p-1 text-sm">
          {(['all', 'industry', 'company'] as Filter[]).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={`rounded-lg px-3.5 py-2 capitalize transition-colors ${
                filter === value ? 'bg-ink text-paper' : 'text-slate hover:text-ink'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {showCreate ? (
        <div className="mt-10">
          <CreateBlueprint target={query} />
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((bp, index) => (
            <a
              key={`${bp.type}-${bp.slug}`}
              href={`${baseUrl}${bp.type}/${bp.slug}/`}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white/80 p-6 shadow-[0_1px_0_rgba(15,28,46,0.04)] hover:border-teal/50 hover:shadow-[0_16px_40px_rgba(15,28,46,0.08)] transition-all duration-300"
              style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-teal">
                  {bp.type}
                </span>
                <span className="font-mono text-sm tabular-nums text-score font-medium">
                  {bp.opportunityScore}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink group-hover:text-teal-deep transition-colors">
                {bp.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate line-clamp-3">{bp.tagline}</p>
              <ul className="mt-5 space-y-1.5">
                {bp.painPoints.slice(0, 2).map((point) => (
                  <li key={point} className="text-xs text-ink-soft/90 flex gap-2">
                    <span className="mt-1.5 size-1 rounded-full bg-amber shrink-0" />
                    <span className="line-clamp-1">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-sm font-semibold text-teal opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                Open blueprint →
              </div>
            </a>
          ))}
        </div>
      )}

      {!showCreate && filtered.length > 0 && (
        <p className="mt-8 text-sm text-slate">
          Showing {filtered.length} of {blueprints.length} blueprints
        </p>
      )}
    </div>
  );
}
