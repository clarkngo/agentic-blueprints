import { useMemo, useState } from 'react';
import { buildBlueprintPrompt } from '../lib/prompt';

interface CreateBlueprintProps {
  target: string;
  variant?: 'inline' | 'page';
  suggestedType?: 'industry' | 'company';
}

export default function CreateBlueprint({
  target,
  variant = 'inline',
  suggestedType = 'industry',
}: CreateBlueprintProps) {
  const [copied, setCopied] = useState(false);
  const cleanTarget = target.trim() || 'Untitled Target';
  const prompt = useMemo(() => buildBlueprintPrompt(cleanTarget), [cleanTarget]);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const area = document.createElement('textarea');
      area.value = prompt;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      document.body.removeChild(area);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  const slugHint = cleanTarget
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return (
    <section
      className={
        variant === 'page'
          ? 'mx-auto max-w-3xl px-5 sm:px-8 py-20'
          : 'rounded-2xl border border-dashed border-teal/40 bg-white/70 p-8 sm:p-10'
      }
    >
      <div className="animate-rise">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal">Create Blueprint</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink text-balance">
          No blueprint yet for {cleanTarget}
        </h2>
        <p className="mt-4 text-slate leading-relaxed max-w-2xl">
          Generate a full agentic implementation blueprint with an LLM, then drop the JSON into{' '}
          <code className="font-mono text-ink-soft text-sm">data/blueprints/{slugHint || 'slug'}.json</code>{' '}
          to publish a <span className="text-ink">/{suggestedType}/{slugHint || 'slug'}</span> page.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={copyPrompt}
            className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-teal-deep transition-colors"
          >
            {copied ? 'Prompt copied' : 'Copy generation prompt'}
          </button>
          <a
            href="https://github.com/clarkngo/agentic-blueprints/tree/main/data/blueprints"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-teal hover:text-teal-deep transition-colors"
          >
            Browse JSON folder
          </a>
        </div>

        <details className="mt-8 group">
          <summary className="cursor-pointer list-none font-medium text-ink flex items-center gap-2">
            <span className="size-5 rounded border border-line grid place-items-center text-xs text-slate group-open:rotate-90 transition-transform">
              ▸
            </span>
            Preview prompt
          </summary>
          <pre className="mt-4 max-h-80 overflow-auto rounded-xl bg-ink text-mist p-5 text-xs leading-relaxed font-mono whitespace-pre-wrap">
            {prompt}
          </pre>
        </details>
      </div>
    </section>
  );
}
