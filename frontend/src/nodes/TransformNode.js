// TransformNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [transform, setTransform] = useState(data?.transform || 'x.toUpperCase()');

  return (
    <BaseNode
      id={id}
      title="Transform"
      leftHandles={[{ id: `${id}-input` }]}
      rightHandles={[{ id: `${id}-output` }]}
    >
      <label>
        Expression:
        <textarea 
          value={transform} 
          onChange={(e) => setTransform(e.target.value)}
          style={{ width: '100%', resize: 'none', height: '40px' }}
        />
      </label>
    </BaseNode>
  );
}
