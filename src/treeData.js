import React from 'react';
import TreeView from './TreeView';

const treeData = {
  name: 'Root',
  children: [
    {
      name: 'Node 1',
      children: [
        { name: 'Node 1.1' },
        { name: 'Node 1.2' }
      ]
    },
    {
      name: 'Node 2',
      children: [
        { name: 'Node 2.1' },
        { name: 'Node 2.2' }
      ]
    }
  ]
};

const App = () => {
  return (
    <div>
      <h1>Tree View Example</h1>
      <TreeView data={treeData} />
    </div>
  );
};

export default App;
