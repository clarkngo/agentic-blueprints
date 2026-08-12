export type BlueprintType = 'industry' | 'company';

export interface SingleAgent {
  name: string;
  role: string;
  trigger: string;
  toolStack: string[];
  output: string;
  roi: string;
}

export interface SubAgent {
  name: string;
  role: string;
  responsibilities: string[];
  contextHandoff: string;
}

export interface MultiAgentSystem {
  name: string;
  description: string;
  supervisor: {
    name: string;
    responsibilities: string;
    routingLogic: string;
  };
  subAgents: SubAgent[];
  conflictResolution: string;
}

export interface WorkflowStep {
  id: string;
  label: string;
  description: string;
}

export interface Integrations {
  apis: string[];
  webhooks: string[];
  vectorDbs: string[];
  legacySystems: string[];
  security: string[];
}

export interface Blueprint {
  slug: string;
  type: BlueprintType;
  name: string;
  tagline: string;
  overview: string;
  opportunityScore: number;
  painPoints: string[];
  strategicImpact: string[];
  singleAgents: SingleAgent[];
  multiAgent: MultiAgentSystem;
  workflow: WorkflowStep[];
  integrations: Integrations;
}

export interface BlueprintSummary {
  slug: string;
  type: BlueprintType;
  name: string;
  tagline: string;
  opportunityScore: number;
  painPoints: string[];
}
