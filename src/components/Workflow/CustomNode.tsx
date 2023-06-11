import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
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
          className="h-10 w-2.5 rounded-none border-0 bg-transparent"
        />
      )}
      {hasSource && (
        <Handle
          type="source"
          position={Position.Right}
          id="a"
          style={{ top: hasTwoSources ? 10 : undefined }}
          className="h-10 w-2.5 rounded-none border-0 bg-transparent"
        />
      )}
      {hasTwoSources && hasSource && (
        <Handle
          type="source"
          position={Position.Right}
          id="b"
          style={{ top: 45 }}
          className=" h-10 w-2.5 rounded-none border-0 bg-transparent"
        />
      )}
    </>
  );
};

const PreFabsNode = (props: CustomNodeProps) => {
  return (
    <div className="flex h-28 items-center justify-center rounded-l-xl rounded-r-[3rem] bg-gradient-to-r from-neutral-700/80 to-neutral-800/90 p-5 text-white hover:border hover:border-violet-400">
      <p className="font-semibold ">{props.data.label}</p>
    </div>
  );
};

const FavouriteNode = (props: CustomNodeProps) => {
  return (
    <div className="flex h-28 items-center justify-center rounded-xl rounded-l-xl bg-gradient-to-r from-neutral-700/80 to-neutral-800/90 p-5 text-white hover:border hover:border-violet-400">
      <p className="font-semibold ">{props.data.label}</p>
    </div>
  );
};

const InputNode = (props: CustomNodeProps) => {
  return (
    <div className="h-18 flex items-center justify-center rounded-xl bg-gradient-to-r from-neutral-700/80 to-neutral-800/90 p-5 text-white hover:border hover:border-violet-400">
      <p className="font-semibold ">{props.data.label}</p>
    </div>
  );
};

export default memo(CustomNode);
