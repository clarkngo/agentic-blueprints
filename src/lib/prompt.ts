export function buildBlueprintPrompt(target: string): string {
  return `You are a Principal AI Systems Architect and Enterprise Automation Expert.

Generate an end-to-end AI Agentic Implementation Blueprint for:
Target: "${target}"

Analyze the operations, common manual bottlenecks, data silos, and operational overhead for this target. Then produce a structured blueprint as a JSON file matching this schema exactly:

{
  "slug": "kebab-case-name",
  "type": "industry" | "company",
  "name": "Display Name",
  "tagline": "One-line value proposition",
  "overview": "2-3 sentence overview of AI opportunity",
  "opportunityScore": 0-100,
  "painPoints": ["Top bottleneck 1", "Top bottleneck 2", "Top bottleneck 3"],
  "strategicImpact": ["Metric improved 1", "Metric improved 2", "Metric improved 3"],
  "singleAgents": [
    {
      "name": "Agent Name",
      "role": "What it does",
      "trigger": "When it fires",
      "toolStack": ["Tool 1", "Tool 2"],
      "output": "What it produces",
      "roi": "Estimated ROI / hours saved"
    }
  ],
  "multiAgent": {
    "name": "System name",
    "description": "What the team accomplishes",
    "supervisor": {
      "name": "Supervisor Agent",
      "responsibilities": "Orchestration duties",
      "routingLogic": "How work is delegated"
    },
    "subAgents": [
      {
        "name": "Specialist Agent",
        "role": "Specialty",
        "responsibilities": ["Task 1", "Task 2"],
        "contextHandoff": "What it passes to the next agent"
      }
    ],
    "conflictResolution": "How errors and edge cases are handled"
  },
  "workflow": [
    { "id": "input", "label": "Input", "description": "Trigger & perception" },
    { "id": "reason", "label": "Reason", "description": "Reasoning & planning" },
    { "id": "tools", "label": "Tool Execution", "description": "Tool call & execution" },
    { "id": "hitl", "label": "Human-in-the-Loop", "description": "Validation & guardrails" },
    { "id": "output", "label": "Output", "description": "Final action" }
  ],
  "integrations": {
    "apis": ["API 1"],
    "webhooks": ["Webhook 1"],
    "vectorDbs": ["Vector store / RAG source"],
    "legacySystems": ["Legacy system"],
    "security": ["Compliance / PII control"]
  }
}

Provide 3-4 single agents and 3-4 sub-agents. Keep recommendations technically realistic, emphasize LLM tool orchestration, and prioritize high-value business outcomes.

Save the result as data/blueprints/<slug>.json in the Agentic Blueprints repo.`;
}
