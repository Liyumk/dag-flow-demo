import { useDrag } from "react-dnd";
import Draggable from "../DnD/Draggable";
import { DraggableNode } from "../../types/workflow/node";

const RightSideBar = () => {
  //Create an array with length of 4 map throught it and return div for each element
  const draggableItems: DraggableNode[] = [
    {
      id: "key-word",
      name: "Key Word",
    },
    {
      id: "run-script",
      name: "Run Script",
    },
    {
      id: "script-filter",
      name: "Script Filter",
    },
  ];

  return (
    <div>
      {draggableItems.map((item, index: number) => {
        return (
          <Draggable item={{ name: item.name, id: item.id }} type="NODE">
            <p>{item.name}</p>
          </Draggable>
        );
      })}
    </div>
  );
};

export default RightSideBar;
