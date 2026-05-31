// textNode.js

import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    // Extract variables using regex
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;
    const matches = new Set();
    let match;
    while ((match = regex.exec(currText)) !== null) {
      matches.add(match[1]);
    }
    setVariables(Array.from(matches));
    
    // Auto-resize logic on load/change
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      
      // Auto width logic (basic approximation)
      const lines = currText.split('\n');
      const maxLineLength = Math.max(...lines.map(l => l.length));
      const calculatedWidth = Math.max(200, maxLineLength * 8); // ~8px per character
      textareaRef.current.style.width = `${calculatedWidth}px`;
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      leftHandles={variables.map(v => ({ id: `${id}-${v}` }))}
      rightHandles={[{ id: `${id}-output` }]}
    >
      <label>
        Text:
        <textarea 
          ref={textareaRef}
          value={currText} 
          onChange={handleTextChange}
          style={{ resize: 'none', overflow: 'hidden', minHeight: '30px', minWidth: '100%', boxSizing: 'border-box' }}
        />
      </label>
    </BaseNode>
  );
}
