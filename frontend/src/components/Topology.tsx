import React, { useCallback } from 'react';
import ReactFlow, { Node, Edge, Controls, useNodesState, useEdgesState, addEdge, Position } from 'reactflow';
import Card from './Card';
import 'reactflow/dist/style.css';
import '../styles/Topology.css';

const nodeDefaultsIn = {
    sourcePosition: Position.Right,
    type: 'input',
};

const nodeDefaultsOut = {
    targetPosition: Position.Left,
    type: 'output',
};

const nodeDefaultsInOut = {
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
}

const initialNodes: Node[] = [
  { id: 'router', position: { x: 0, y: 125 }, data: { label: 'Router' }, ...nodeDefaultsIn },
  { id: 'switch', position: { x: 200, y: 125 }, data: { label: 'Switch' }, ...nodeDefaultsInOut },
  { id: 'host-a', position: { x: 500, y: 25 }, data: { label: 'Host A' }, ...nodeDefaultsOut },
  { id: 'host-b', position: { x: 500, y: 75 }, data: { label: 'Host B' }, ...nodeDefaultsOut },
  { id: 'host-c', position: { x: 500, y: 125 }, data: { label: 'Host C' }, ...nodeDefaultsOut },
  { id: 'host-d', position: { x: 500, y: 175 }, data: { label: 'Host D' }, ...nodeDefaultsOut },
  { id: 'host-e', position: { x: 500, y: 225 }, data: { label: 'Host E' }, ...nodeDefaultsOut },
];

const initialEdges: Edge[] = [
    { id: 'e1-2', source: 'router', target: 'switch' },
    { id: 'e2-3', source: 'switch', target: 'host-a' },
    { id: 'e2-4', source: 'switch', target: 'host-b' },
    { id: 'e2-5', source: 'switch', target: 'host-c' },
    { id: 'e2-6', source: 'switch', target: 'host-d' },
    { id: 'e2-7', source: 'switch', target: 'host-e' },
];

const renderFlow: React.FC = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes as Node[]);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges as Edge[]);
  
    const onConnect = useCallback(
      (params: Edge<any> | Connection) => setEdges((els) => addEdge(params, els)),
      []
    );
  
    return (
      <div className="react-flow-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          attributionPosition="bottom-left"
        >
          <Controls />
        </ReactFlow>
      </div>
    );
  };


const Topology: React.FC = () => {
    return (
        <Card 
            content={renderFlow()}
            height="100%" 
            width="100%"
        />
    );
}

export default Topology;
