import { useState } from 'react';
import type { WorkflowStep } from '../lib/types';

interface WorkflowPipelineProps {
  steps: WorkflowStep[];
}

export default function WorkflowPipeline({ steps }: WorkflowPipelineProps) {
  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal">State machine</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
          Agentic workflow pipeline
        </h2>
        <p className="mt-3 text-slate leading-relaxed">
          Input → Reason → Tool Execution → Human-in-the-Loop → Output
        </p>
      </div>

      <div className="mt-10">
        <ol className="relative grid gap-3 md:grid-cols-5">
          <div className="pointer-events-none absolute left-0 right-0 top-[1.35rem] hidden h-px bg-line md:block" />
          {steps.map((step, index) => {
            const selected = index === active;
            return (
              <li key={step.id}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className="relative w-full text-left group"
                >
                  <span
                    className={`relative z-10 grid size-11 place-items-center rounded-full border-2 font-mono text-sm font-semibold transition-all ${
                      selected
                        ? 'border-teal bg-teal text-paper scale-105'
                        : 'border-line bg-white text-slate group-hover:border-teal/50'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={`mt-3 block font-semibold transition-colors ${
                      selected ? 'text-teal-deep' : 'text-ink'
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 rounded-2xl border border-line bg-white/80 p-6 sm:p-8 min-h-[140px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate">
            Step {active + 1} · {steps[active]?.id}
          </p>
          <h3 className="mt-2 font-display text-2xl font-bold text-ink">{steps[active]?.label}</h3>
          <p className="mt-3 max-w-3xl text-slate leading-relaxed">{steps[active]?.description}</p>
        </div>
      </div>
    </section>
  );
}
