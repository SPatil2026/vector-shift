// NoteNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [noteText, setNoteText] = useState(data?.text || 'Type your note here...');

  return (
    <BaseNode
      id={id}
      title="Note"
      style={{}}
    >
      <textarea 
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        style={{ 
          width: '100%', 
          height: '100px', 
          resize: 'none', 
          border: 'none', 
          backgroundColor: 'transparent',
          outline: 'none'
        }}
      />
    </BaseNode>
  );
}
