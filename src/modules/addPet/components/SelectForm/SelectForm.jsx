import { useEffect, useState } from "react";
import MyPetFormOption from "../MyPetFormOption/MyPetForm";
import { WrapperForm } from "./SelectForm.styled";
import ProgressBar from "../ProgressBar/ProgressBar";
import Title from "../Title/Title";
import RadioSelect from "../RadioSelect/RadioSelect";
import BtnComponent from "../Buttons/BtnComponent";

const SelectForm = () => {
  const [titleText, setTitleText] = useState("Add Pet");
  const [selectedOption, setSelectedOption] = useState("");
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const [hideOptions, setHideOptions] = useState(false);
  const [nextStepClicked, setNextStepClicked] = useState(false);
  const [showBtnComponent, setShowBtnComponent] = useState(true);

  const optionTitles = {
    option1: "Add Your Pet",
    option2: "Add Pet For Sale",
    option3: "Lost/Found Pet",
    option4: "In Good Hands",
  };

  useEffect(() => {
    let newTitleText = "Add Pet";
    if (nextStepClicked) {
      newTitleText = optionTitles[selectedOption] || newTitleText;
    }
    setTitleText(newTitleText);
  }, [selectedOption, nextStepClicked]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextClick = () => {
    setSubmitButtonClicked(true);
    setHideOptions(true);
    setNextStepClicked(true);
    setShowBtnComponent(false);
  };

  const handleCancelClick = () => {
    window.history.back();
  };

  return (
    <WrapperForm>
      <Title text={titleText} />
      <ProgressBar />
      {!submitButtonClicked ? (
        <RadioSelect
          handleOptionChange={handleOptionChange}
          selectedOption={selectedOption}
        />
      ) : selectedOption === "option1" ? (
        <MyPetFormOption />
      ) : selectedOption === "option2" ? (
        <MyPetFormOption />
      ) : selectedOption === "option3" ? (
        <MyPetFormOption />
      ) : selectedOption === "option4" ? (
        <MyPetFormOption />
      ) : null}
      {showBtnComponent && (
        <BtnComponent
          submitButtonClicked={submitButtonClicked}
          nextStepClicked={nextStepClicked}
          handleNextClick={handleNextClick}
          handleCancelClick={handleCancelClick}
        />
      )}
    </WrapperForm>
  );
};

export default SelectForm;
