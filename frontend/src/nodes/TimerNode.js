// TimerNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || 1000);

  return (
    <BaseNode
      id={id}
      title="Timer (Wait)"
      leftHandles={[{ id: `${id}-trigger` }]}
      rightHandles={[{ id: `${id}-done` }]}
    >
      <label>
        Delay (ms):
        <input 
          type="number" 
          value={delay} 
          onChange={(e) => setDelay(e.target.value)}
          style={{ width: '100%' }}
        />
      </label>
    </BaseNode>
  );
}
