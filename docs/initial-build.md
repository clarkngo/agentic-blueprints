Create a modern, responsive web application for an "AI Agentic Blueprint Directory".

### Requirements:
1. Tech Stack: Next.js (App Router) or Astro + React/Tailwind CSS.
2. Architecture:
   - Dynamic dynamic page routing: `/industry/[slug]` or `/company/[slug]`.
   - Landing page with a search bar and a grid of existing industry blueprints.
   - If a search query or route does not exist, show a clean "Create Blueprint" state with a button to copy the prompt or generate the page.
3. Industry/Company Page Component Structure:
   - **Hero Section**: Industry/Company overview, primary AI opportunity score, and key pain points.
   - **Single AI Agents Table/Grid**: High-impact standalone agents (Role, Trigger, Tool Stack, ROI).
   - **Multi-Agent Architecture**: Visual/interactive card layout showing Supervisor + Sub-Agent workflows (e.g., Supervisor Agent delegating to Specialized Agents).
   - **Agentic Workflow Pipeline**: Step-by-step state machine or flow diagram (Input -> Reason -> Tool Execution -> Human-in-the-Loop -> Output).
   - **Data & System Integrations**: Required APIs, Webhooks, Vector DBs, and legacy enterprise software connections.
4. Data Source:
   - Use a clean JSON schema stored in a local `/data/blueprints/` folder so new pages can be added seamlessly by dropping in new JSON files.