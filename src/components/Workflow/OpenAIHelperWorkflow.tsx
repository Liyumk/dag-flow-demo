import { useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Connection,
  useReactFlow,
} from "reactflow";
import Droppable from "../DnD/Droppable";
import { XYCoord } from "react-dnd";

const OpenAIHelperWorkflow = () => {
  const initialNodes = [
    { id: "1", position: { x: 100, y: 0 }, data: { label: "1" } },
    { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  ];
  const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { project } = useReactFlow();

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNewNode = (id: string, coords: XYCoord, label: string) => {
    const newNode = {
      id,
      position: project({
        ...coords,
      }),
      data: { label },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <Droppable addNewNode={addNewNode} nodes={nodes}>
      <div style={{ width: "100%", height: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          attributionPosition="bottom-left"
        >
          <Controls className="flex bg-zinc-600" position="bottom-right" />
          <Background color="gray" gap={12} size={1} />
        </ReactFlow>
      </div>
    </Droppable>
  );
};

export default OpenAIHelperWorkflow;
