import React from 'react';
import TreeNode from './TreeNode';

const TreeView = ({ data }) => {
  return (
    <div className="tree-view">
      <TreeNode node={data} />
    </div>
  );
};

export default TreeView;
