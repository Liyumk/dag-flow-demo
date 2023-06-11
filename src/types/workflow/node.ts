import { XYPosition } from "reactflow";

export type Node = {
  id: string;
  position: XYPosition;
  data: {
    label: string;
  };
};

export type DraggableNode = {
  id: string;
  name: string;
};
