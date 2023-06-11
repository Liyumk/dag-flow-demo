import { DropTargetMonitor, XYCoord, useDrop } from "react-dnd";
import { CSSProperties, PropsWithChildren, useRef } from "react";
import { DraggableNode } from "../../types/workflow/node";
import { Node } from "reactflow";
import { generateId } from "../../utils/generateId";

interface Props extends PropsWithChildren {
  addNewNode: (id: string, coords: XYCoord, label: string) => void;
  nodes: Node<
    {
      label: string;
    },
    string | undefined
  >[];
}

function Droppable({ children, addNewNode, nodes }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleDrop = (monitor: DropTargetMonitor, item: DraggableNode) => {
    const containerY = containerRef.current?.getBoundingClientRect().y;
    const containerX = containerRef.current?.getBoundingClientRect().x;
    const { x: draggableX, y: draggableY } =
      monitor.getClientOffset() as XYCoord;

    if (!!containerX && !!containerY) {
      let x = draggableX - containerX - 75;
      let y = draggableY - containerY;
      const id = generateId(item.id);
      addNewNode(id, { x, y }, item.name);
    }
  };

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "NODE",
    drop: (item: DraggableNode, monitor: DropTargetMonitor) => {
      handleDrop(monitor, item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      dropItem: monitor.getItem(),
    }),
  }));
  const isActive = canDrop && isOver;

  return (
    <div ref={containerRef} className="h-full w-full">
      <div
        ref={drop}
        data-testid="dustbin"
        className="flex h-full w-full items-center justify-center"
      >
        {/* {isActive ? "Release to drop" : "Drag a box here"} */}
        {children}
      </div>
    </div>
  );
}

export default Droppable;
