import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { twMerge } from "tailwind-merge";
export interface CustomNodeProps extends NodeProps {
  hasTarget?: boolean;
  hasSource?: boolean;
  hasTwoSource?: boolean;
  type: string;
}

const CustomNode = (props: CustomNodeProps) => {
  const {
    hasTarget,
    hasSource,
    hasTwoSources,
    type: typeFromData,
  } = props.data;
  console.log("props", props);

  const TypeOfNode = () => {
    switch (typeFromData) {
      case "Inputs":
        return <InputNode {...props} />;
      case "Favorites":
        return <FavouriteNode {...props} />;
      case "Prefabs":
        return <PreFabsNode {...props} />;
      default:
        return <InputNode {...props} />;
    }
  };

  return (
    <>
      <TypeOfNode />
      {hasTarget && (
        <Handle
          type="target"
          position={Position.Left}
          className="border-.5 h-2.5 w-2.5 rounded border-violet-400/60 bg-neutral-800"
        />
      )}
      {hasSource && (
        <Handle
          type="source"
          position={Position.Right}
          id="a"
          style={{ top: hasTwoSources ? 10 : undefined }}
          className="border-.5 h-2.5 w-2.5 rounded border-violet-400/60 bg-neutral-800"
        />
      )}
      {hasTwoSources && hasSource && (
        <Handle
          type="source"
          position={Position.Right}
          id="b"
          style={{ top: 46 }}
          className="border-.5 h-2.5 w-2.5 rounded border-violet-400/60 bg-neutral-800"
        />
      )}
    </>
  );
};

const commonNodeStyle =
  "bg-gradient-to-r from-neutral-700/80 to-neutral-800/90 p-5 text-white hover:border-2 hover:border-violet-400";

const PreFabsNode = (props: CustomNodeProps) => {
  return (
    <div
      className={twMerge(
        "flex h-28 items-center justify-center rounded-xl rounded-r-[2.5rem]",
        commonNodeStyle
      )}
    >
      <p className="font-semibold ">{props.data.label}</p>
    </div>
  );
};

const FavouriteNode = (props: CustomNodeProps) => {
  return (
    <div
      className={twMerge(
        "flex h-28 items-center justify-center rounded-xl",
        commonNodeStyle
      )}
    >
      <p className="font-semibold ">{props.data.label}</p>
    </div>
  );
};

const InputNode = (props: CustomNodeProps) => {
  return (
    <div
      className={twMerge(
        "h-18 flex items-center justify-center rounded-xl",
        commonNodeStyle
      )}
    >
      <p className="font-semibold ">{props.data.label}</p>
    </div>
  );
};

export default memo(CustomNode);
