import ChooseOption from "../ChooseOption/ChooseOption";
import { useParams } from "react-router-dom";

const AddPetForm = () => {
  const { type } = useParams();
  return (
    <div>
      {(() => {
        switch (type) {
          case "main":
            return <ChooseOption />;

          case "gender":
            return <Gender />;

          case "bodyparams":
            return <BodyParams />;
          case "activity":
            return <Activity />;

          default:
            break;
        }
      })()}
    </div>
  );
};

export default AddPetForm;
