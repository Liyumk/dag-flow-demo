import { useDrag } from "react-dnd";
import Draggable from "../Draggable";

const RightSideBar = () => {
  //Create an array with length of 4 map throught it and return div for each element
  const sideBarItem = Array.from({ length: 4 });
  return (
    <div>
      {sideBarItem.map(() => {
        return (
          <Draggable item={{ name: "box" }} type="box">
            <div>Hey there</div>
          </Draggable>
        );
      })}
    </div>
  );
};

export default RightSideBar;
