import { useEffect, useState } from 'react';
import CreateBlueprint from './CreateBlueprint';

function parseTarget(baseUrl: string): { target: string; type: 'industry' | 'company' } {
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  let path = window.location.pathname;
  if (path.startsWith(normalizedBase)) {
    path = path.slice(normalizedBase.length - 1);
  }
  path = path.replace(/\/$/, '');
  const match = path.match(/^\/(industry|company)\/([^/]+)$/);
  if (!match) {
    return { target: 'this route', type: 'industry' };
  }
  const type = match[1] as 'industry' | 'company';
  const target = match[2]
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
  return { target, type };
}

interface CreateBlueprintFromRouteProps {
  baseUrl: string;
}

export default function CreateBlueprintFromRoute({ baseUrl }: CreateBlueprintFromRouteProps) {
  const [state, setState] = useState<{ target: string; type: 'industry' | 'company' }>({
    target: 'this route',
    type: 'industry',
  });

  useEffect(() => {
    setState(parseTarget(baseUrl));
  }, [baseUrl]);

  return <CreateBlueprint target={state.target} suggestedType={state.type} variant="page" />;
}
