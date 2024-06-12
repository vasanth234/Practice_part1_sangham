import React, { useState } from 'react';
import './TreeView.css';

const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  console.log("Node:", node); // Log the node object for debugging

  return (
    <div className="tree-node">
      <div className="node-content" onClick={handleToggle}>
        {node.children && <span className={isOpen ? 'toggle open' : 'toggle'}>▼</span>}
        {node.name}
      </div>
      {isOpen && node.children && (
        <div className="children">
          {node.children.map((childNode, index) => (
            <TreeNode key={index} node={childNode} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
