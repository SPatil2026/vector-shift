// ConditionNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'x > 10');

  return (
    <BaseNode
      id={id}
      title="Condition"
      leftHandles={[{ id: `${id}-input` }]}
      rightHandles={[
        { id: `${id}-true`, label: 'True' },
        { id: `${id}-false`, label: 'False' }
      ]}
    >
      <label>
        Logic:
        <input 
          type="text" 
          value={condition} 
          onChange={(e) => setCondition(e.target.value)}
          style={{ width: '100%' }}
          placeholder="e.g. length > 0"
        />
      </label>
    </BaseNode>
  );
}
