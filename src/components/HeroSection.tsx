import { useEffect, useState } from 'react';
import type { Blueprint } from '../lib/types';

interface HeroSectionProps {
  blueprint: Blueprint;
}

export default function HeroSection({ blueprint }: HeroSectionProps) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let frame = 0;
    const target = blueprint.opportunityScore;
    const start = performance.now();
    const duration = 900;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setScore(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [blueprint.opportunityScore]);

  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-white/90 via-paper to-mist/60">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,122,122,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,122,122,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div>
            <div className="animate-rise flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-teal">
                {blueprint.type} blueprint
              </span>
              <span className="text-line">/</span>
              <span className="font-mono text-xs text-slate">{blueprint.slug}</span>
            </div>
            <h1 className="animate-rise-delay-1 mt-4 font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-ink text-balance">
              {blueprint.name}
            </h1>
            <p className="animate-rise-delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-slate">
              {blueprint.overview}
            </p>
            <p className="animate-rise-delay-3 mt-4 max-w-2xl text-ink-soft font-medium">
              {blueprint.tagline}
            </p>
          </div>

          <div className="animate-rise-delay-2 rounded-2xl border border-line bg-white/80 p-6 shadow-sm">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">
              AI opportunity score
            </p>
            <div className="mt-3 flex items-end gap-2">
              <span className="font-display text-6xl font-extrabold tabular-nums text-score leading-none">
                {score}
              </span>
              <span className="pb-2 text-slate">/ 100</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-mist">
              <div
                className="h-full rounded-full bg-gradient-to-r from-teal to-score transition-all duration-700"
                style={{ width: `${score}%` }}
              />
            </div>
            <ul className="mt-6 space-y-2">
              {blueprint.strategicImpact.slice(0, 3).map((item) => (
                <li key={item} className="text-sm text-ink-soft flex gap-2">
                  <span className="text-teal">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="animate-rise-delay-3 mt-12">
          <h2 className="font-display text-xl font-bold text-ink">Key pain points</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {blueprint.painPoints.map((point, i) => (
              <div
                key={point}
                className="rounded-xl border border-line/80 bg-white/70 px-4 py-4"
              >
                <span className="font-mono text-xs text-amber">0{i + 1}</span>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
