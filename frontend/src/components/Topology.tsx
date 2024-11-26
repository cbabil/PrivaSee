import React, { useCallback, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ConnectionMode,
  Panel,
  NodeProps,
  Handle,
  Position,
} from 'reactflow';
import { Wifi, Server, Monitor } from 'lucide-react';
import 'reactflow/dist/style.css';

const CustomNode: React.FC<NodeProps> = ({ data }) => {
  const Icon = data.icon;
  
  return (
    <div className="px-4 py-2 shadow-lg rounded-lg border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 min-w-[150px]">
      <Handle type="target" position={Position.Left} className="w-3 h-3 bg-primary-500" />
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-primary-500" />
        <div className="text-sm font-medium text-gray-700 dark:text-gray-200">{data.label}</div>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-primary-500" />
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

// Horizontal layout positions
const initialNodes: Node[] = [
  {
    id: 'router',
    type: 'custom',
    position: { x: 100, y: 250 },
    data: { label: 'Main Router', icon: Wifi },
  },
  {
    id: 'switch1',
    type: 'custom',
    position: { x: 350, y: 150 },
    data: { label: 'Switch 1', icon: Server },
  },
  {
    id: 'switch2',
    type: 'custom',
    position: { x: 350, y: 350 },
    data: { label: 'Switch 2', icon: Server },
  },
  {
    id: 'pc1',
    type: 'custom',
    position: { x: 600, y: 50 },
    data: { label: 'Desktop PC', icon: Monitor },
  },
  {
    id: 'pc2',
    type: 'custom',
    position: { x: 600, y: 200 },
    data: { label: 'Laptop', icon: Monitor },
  },
  {
    id: 'pc3',
    type: 'custom',
    position: { x: 600, y: 350 },
    data: { label: 'Smart TV', icon: Monitor },
  },
  {
    id: 'pc4',
    type: 'custom',
    position: { x: 600, y: 500 },
    data: { label: 'Mobile Phone', icon: Monitor },
  },
];

const initialEdges: Edge[] = [
  { id: 'r-s1', source: 'router', target: 'switch1', animated: true, style: { stroke: '#6366f1' } },
  { id: 'r-s2', source: 'router', target: 'switch2', animated: true, style: { stroke: '#6366f1' } },
  { id: 's1-pc1', source: 'switch1', target: 'pc1', style: { stroke: '#6366f1' } },
  { id: 's1-pc2', source: 'switch1', target: 'pc2', style: { stroke: '#6366f1' } },
  { id: 's2-pc3', source: 'switch2', target: 'pc3', style: { stroke: '#6366f1' } },
  { id: 's2-pc4', source: 'switch2', target: 'pc4', style: { stroke: '#6366f1' } },
];

const Topology: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isDragging, setIsDragging] = useState(false);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#6366f1' } }, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-[calc(100vh-theme(spacing.24))] bg-gray-50 dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        onNodeDragStart={() => setIsDragging(true)}
        onNodeDragStop={() => setIsDragging(false)}
        fitView
        minZoom={0.5}
        maxZoom={2}
        defaultEdgeOptions={{
          type: 'smoothstep',
          style: { strokeWidth: 2 },
        }}
      >
        <Background color="#6366f1" size={1.5} />
        <Controls className="bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg overflow-hidden" />
        <Panel position="top-right" className="p-2 bg-white dark:bg-dark-700 rounded-lg shadow-sm border border-gray-200 dark:border-dark-600">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {isDragging ? 'Release to drop' : 'Drag nodes to reposition'}
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default Topology;