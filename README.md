# Agentic Blueprints

A modern directory of AI agentic implementation blueprints for industries and companies.

**Live site:** https://clarkngo.github.io/agentic-blueprints/

## Stack

- [Astro](https://astro.build) (static) + React islands
- Tailwind CSS v4
- JSON blueprints in `data/blueprints/`
- GitHub Pages via GitHub Actions

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Add a blueprint

1. Copy the generation prompt from the site’s **Create Blueprint** state (search for a missing name, or open an unknown `/industry/[slug]` / `/company/[slug]` route).
2. Save the model output as `data/blueprints/<slug>.json`.
3. Commit and push to `main` — Pages redeploys automatically.

### Schema

| Field | Description |
| --- | --- |
| `slug` / `type` / `name` | Route identity (`industry` or `company`) |
| `tagline` / `overview` | Hero copy |
| `opportunityScore` | 0–100 AI opportunity score |
| `painPoints` / `strategicImpact` | Core bottlenecks and metrics |
| `singleAgents[]` | Standalone agents (role, trigger, tools, ROI) |
| `multiAgent` | Supervisor + sub-agents + conflict resolution |
| `workflow[]` | Input → Reason → Tools → HITL → Output |
| `integrations` | APIs, webhooks, vector DBs, legacy, security |

## Routes

- `/` — search + directory grid
- `/industry/[slug]/` — industry blueprint
- `/company/[slug]/` — company blueprint
- Unknown routes / empty search → **Create Blueprint** prompt UI
