import { useState } from 'react';
import type { MultiAgentSystem } from '../lib/types';

interface MultiAgentArchitectureProps {
  system: MultiAgentSystem;
}

export default function MultiAgentArchitecture({ system }: MultiAgentArchitectureProps) {
  const [active, setActive] = useState(0);
  const current = system.subAgents[active] ?? system.subAgents[0];

  return (
    <section className="border-y border-line bg-white/50">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal">Orchestration</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Multi-agent architecture
          </h2>
          <p className="mt-3 text-slate leading-relaxed">{system.description}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-2xl border border-ink/10 bg-ink text-paper p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 size-32 rounded-full bg-teal/30 blur-2xl animate-pulse-soft" />
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist/70">Supervisor</p>
            <h3 className="relative mt-3 font-display text-2xl font-bold">{system.supervisor.name}</h3>
            <p className="relative mt-4 text-sm leading-relaxed text-mist/90">
              {system.supervisor.responsibilities}
            </p>
            <div className="relative mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist/60">Routing logic</p>
              <p className="mt-2 text-sm leading-relaxed text-mist/90">{system.supervisor.routingLogic}</p>
            </div>
          </article>

          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {system.subAgents.map((agent, index) => {
                const selected = index === active;
                return (
                  <button
                    key={agent.name}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`text-left rounded-xl border p-4 transition-all ${
                      selected
                        ? 'border-teal bg-teal/5 shadow-sm'
                        : 'border-line bg-white/80 hover:border-teal/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] text-slate">Sub-agent 0{index + 1}</span>
                      <span className={`size-2 rounded-full ${selected ? 'bg-teal' : 'bg-line'}`} />
                    </div>
                    <h4 className="mt-2 font-semibold text-ink">{agent.name}</h4>
                    <p className="mt-1 text-sm text-slate">{agent.role}</p>
                  </button>
                );
              })}
            </div>

            {current && (
              <div className="mt-4 rounded-2xl border border-line bg-paper/80 p-6">
                <div className="flex items-center gap-3 text-sm text-slate">
                  <span className="font-medium text-ink">{system.supervisor.name}</span>
                  <span aria-hidden="true">→</span>
                  <span className="font-medium text-teal">{current.name}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {current.responsibilities.map((item) => (
                    <li key={item} className="text-sm text-ink-soft flex gap-2">
                      <span className="text-teal">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate">
                    Context handoff
                  </span>
                  <span className="mt-2 block text-ink-soft leading-relaxed">{current.contextHandoff}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-amber/30 bg-amber/5 px-5 py-4 text-sm text-ink-soft">
          <span className="font-semibold text-ink">Conflict resolution: </span>
          {system.conflictResolution}
        </div>
      </div>
    </section>
  );
}
