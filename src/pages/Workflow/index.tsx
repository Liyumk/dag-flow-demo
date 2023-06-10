import { useParams } from "react-router-dom";
import OpenAIHelperWorkflow from "../../components/Workflow/OpenAIHelperWorkflow";

const Workflow = () => {
  const { workflow } = useParams();

  switch (workflow) {
    case "openai-helper":
      return <OpenAIHelperWorkflow />;
    default:
      return (
        <div className="flex h-full items-center justify-center">
          #{workflow}
        </div>
      );
  }
};

export default Workflow;
