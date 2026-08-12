import type { Blueprint } from '../lib/types';
import AgentsTable from './AgentsTable';
import HeroSection from './HeroSection';
import Integrations from './Integrations';
import MultiAgentArchitecture from './MultiAgentArchitecture';
import WorkflowPipeline from './WorkflowPipeline';

interface BlueprintPageProps {
  blueprint: Blueprint;
  baseUrl: string;
}

export default function BlueprintPage({ blueprint, baseUrl }: BlueprintPageProps) {
  return (
    <article>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-6">
        <a href={baseUrl} className="text-sm text-slate hover:text-ink transition-colors">
          ← Back to directory
        </a>
      </div>
      <HeroSection blueprint={blueprint} />
      <AgentsTable agents={blueprint.singleAgents} />
      <MultiAgentArchitecture system={blueprint.multiAgent} />
      <WorkflowPipeline steps={blueprint.workflow} />
      <Integrations integrations={blueprint.integrations} />
    </article>
  );
}
