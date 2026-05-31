// WebhookNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const WebhookNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com/webhook');
  const [method, setMethod] = useState(data?.method || 'POST');

  return (
    <BaseNode
      id={id}
      title="Webhook"
      leftHandles={[{ id: `${id}-trigger` }, { id: `${id}-payload` }]}
      rightHandles={[{ id: `${id}-response` }]}
    >
      <label>
        Method:
        <select value={method} onChange={(e) => setMethod(e.target.value)} style={{ width: '100%' }}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
        </select>
      </label>
      <label style={{ marginTop: '8px', display: 'block' }}>
        URL:
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)}
          style={{ width: '100%' }}
        />
      </label>
    </BaseNode>
  );
}
