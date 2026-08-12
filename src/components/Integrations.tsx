import type { Integrations as IntegrationsType } from '../lib/types';

interface IntegrationsProps {
  integrations: IntegrationsType;
}

const sections: { key: keyof IntegrationsType; title: string; hint: string }[] = [
  { key: 'apis', title: 'APIs', hint: 'Primary system interfaces' },
  { key: 'webhooks', title: 'Webhooks', hint: 'Event triggers' },
  { key: 'vectorDbs', title: 'Vector DBs / RAG', hint: 'Knowledge retrieval' },
  { key: 'legacySystems', title: 'Legacy systems', hint: 'Enterprise connectors' },
  { key: 'security', title: 'Security & compliance', hint: 'Guardrails' },
];

export default function Integrations({ integrations }: IntegrationsProps) {
  return (
    <section className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal">Stack</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Data & system integrations
          </h2>
          <p className="mt-3 text-mist/80 leading-relaxed">
            Required APIs, webhooks, vector stores, and legacy connections to make the blueprint real.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <article
              key={section.key}
              className={`rounded-2xl border border-white/10 bg-white/5 p-5 ${
                index === sections.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mist/50">
                {section.hint}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {integrations[section.key].map((item) => (
                  <li key={item} className="text-sm text-mist/85 flex gap-2">
                    <span className="text-teal">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
