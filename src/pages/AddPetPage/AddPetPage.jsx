import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { WrapperForm } from "./AddPetPage.styled";
import Title from "../../modules/addPet/components/Title/Title";
import ProgressBar from "../../modules/addPet/components/ProgressBar/ProgressBar";
import { selectStep } from "@/redux/notices/noticesSelectors";

const AddPetPage = () => {
  const step = useSelector(selectStep);
  console.log(step);

  return (
    <>
      <WrapperForm step={step}>
        <Title />
        <ProgressBar />
        <Outlet />
      </WrapperForm>
    </>
  );
};

export default AddPetPage;
