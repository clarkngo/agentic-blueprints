import type { SingleAgent } from '../lib/types';

interface AgentsTableProps {
  agents: SingleAgent[];
}

export default function AgentsTable({ agents }: AgentsTableProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal">Quick wins</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
          Single AI agents
        </h2>
        <p className="mt-3 text-slate leading-relaxed">
          High-impact standalone agents that ship value without a full multi-agent stack.
        </p>
      </div>

      <div className="mt-8 hidden sm:block overflow-x-auto rounded-2xl border border-line bg-white/80 shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-mist/70 text-slate font-mono text-[11px] uppercase tracking-[0.14em]">
            <tr>
              <th className="px-5 py-4 font-medium">Role</th>
              <th className="px-5 py-4 font-medium">Trigger</th>
              <th className="px-5 py-4 font-medium">Tool stack</th>
              <th className="px-5 py-4 font-medium">ROI</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr key={agent.name} className="border-t border-line/80 align-top hover:bg-paper/80 transition-colors">
                <td className="px-5 py-5">
                  <div className="font-semibold text-ink">{agent.name}</div>
                  <div className="mt-1 text-slate">{agent.role}</div>
                  <div className="mt-2 text-xs text-ink-soft">
                    <span className="text-slate">Output:</span> {agent.output}
                  </div>
                </td>
                <td className="px-5 py-5 text-ink-soft max-w-[14rem]">{agent.trigger}</td>
                <td className="px-5 py-5">
                  <div className="flex flex-wrap gap-1.5 max-w-[16rem]">
                    {agent.toolStack.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-line bg-paper px-2 py-1 text-xs text-ink-soft"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-5 py-5 font-medium text-score max-w-[12rem]">{agent.roi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 grid gap-4 sm:hidden">
        {agents.map((agent) => (
          <article key={agent.name} className="rounded-2xl border border-line bg-white/80 p-5">
            <h3 className="font-semibold text-ink">{agent.name}</h3>
            <p className="mt-1 text-sm text-slate">{agent.role}</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate">Trigger</dt>
                <dd className="mt-1 text-ink-soft">{agent.trigger}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate">Tools</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {agent.toolStack.map((tool) => (
                    <span key={tool} className="rounded-md border border-line bg-paper px-2 py-1 text-xs">
                      {tool}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate">ROI</dt>
                <dd className="mt-1 font-medium text-score">{agent.roi}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
