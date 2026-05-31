import { Handle, Position } from 'reactflow';

export const BaseNode = ({ 
    id, 
    title, 
    children, 
    leftHandles = [], 
    rightHandles = [],
    style = {} 
}) => {
    return (
        <div className="node-container" style={style}>
            {leftHandles.map((handle, index) => (
                <Handle
                    key={handle.id}
                    type="target"
                    position={Position.Left}
                    id={handle.id}
                    style={{ 
                        top: `${((index + 1) * 100) / (leftHandles.length + 1)}%`, 
                        ...handle.style 
                    }}
                />
            ))}
            
            <div className="node-header">
                <span>{title}</span>
            </div>
            
            <div className="node-content">
                {children}
            </div>

            {rightHandles.map((handle, index) => (
                <Handle
                    key={handle.id}
                    type="source"
                    position={Position.Right}
                    id={handle.id}
                    style={{ 
                        top: `${((index + 1) * 100) / (rightHandles.length + 1)}%`, 
                        ...handle.style 
                    }}
                />
            ))}
        </div>
    );
};
