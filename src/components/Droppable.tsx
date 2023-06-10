import { useDrop } from "react-dnd";
import styles from "../styles/Droppable.module.css";
import { CSSProperties, PropsWithChildren } from "react";

const style: CSSProperties = {
  // height: "12rem",
  // width: "12rem",
  // marginRight: "1.5rem",
  // marginBottom: "1.5rem",
  // color: "white",
  // padding: "1rem",
  // textAlign: "center",
  // fontSize: "1rem",
  // lineHeight: "normal",
  // float: "left",
};

interface Props extends PropsWithChildren {}

function Droppable({ children }: Props) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  // let backgroundColor = "#222";
  // if (isActive) {
  //   backgroundColor = "darkgreen";
  // } else if (canDrop) {
  //   backgroundColor = "darkkhaki";
  // }

  return (
    <div
      ref={drop}
      data-testid="dustbin"
      className="flex h-full w-full items-center justify-center"
    >
      {/* {isActive ? "Release to drop" : "Drag a box here"} */}
      {children}
    </div>
  );
}

export default Droppable;
