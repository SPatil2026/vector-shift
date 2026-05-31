// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      leftHandles={[
        { id: `${id}-system` },
        { id: `${id}-prompt` }
      ]}
      rightHandles={[
        { id: `${id}-response` }
      ]}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
}
