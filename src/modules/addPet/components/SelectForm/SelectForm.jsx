import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import MyPetFormOption from "../MyPetFormOption/MyPetForm";
import { RadioWrapper, SelectRadio, StyledRadio } from "./SelectForm.styled";

const validationSchema = Yup.object().shape({
  choice: Yup.string().required("Оберіть один з варіантів"),
});

const SelectForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const [hideOptions, setHideOptions] = useState(false);
  const [nextStepClicked, setNextStepClicked] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      choice: "",
    },
    validationSchema,
    onSubmit: () => {
      if (submitButtonClicked) {
        console.log("Відправлено:", selectedOption);
      }
    },
  });

  const handleNextClick = () => {
    setSubmitButtonClicked(true);
    setHideOptions(true);
    setNextStepClicked(true);
  };

  const handleCancelClick = () => {
    window.history.back();
  };

  return (
    <div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <RadioWrapper>
            {!hideOptions && (
              <>
                <div>
                  <SelectRadio>
                    <StyledRadio
                      type="radio"
                      name="choice"
                      value="option1"
                      checked={selectedOption === "option1"}
                      onChange={handleOptionChange}
                    />
                    your pet
                  </SelectRadio>
                </div>
                <div>
                  <SelectRadio>
                    <StyledRadio
                      type="radio"
                      name="choice"
                      value="option2"
                      checked={selectedOption === "option2"}
                      onChange={handleOptionChange}
                    />
                    sell
                  </SelectRadio>
                </div>
                <div>
                  <SelectRadio>
                    <StyledRadio
                      type="radio"
                      name="choice"
                      value="option3"
                      checked={selectedOption === "option3"}
                      onChange={handleOptionChange}
                    />
                    lost/found
                  </SelectRadio>
                </div>
                <div>
                  <SelectRadio>
                    <StyledRadio
                      type="radio"
                      name="choice"
                      value="option4"
                      checked={selectedOption === "option4"}
                      onChange={handleOptionChange}
                    />
                    in good hands
                  </SelectRadio>
                </div>
              </>
            )}
          </RadioWrapper>
          {formik.errors.choice && formik.touched.choice && (
            <div className="error">{formik.errors.choice}</div>
          )}
        </form>
      </div>
      <div>
        {nextStepClicked ? null : (
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        )}
        {!submitButtonClicked && (
          <button type="button" onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>

      {submitButtonClicked && selectedOption === "option1" && (
        <MyPetFormOption />
      )}
    </div>
  );
};

export default SelectForm;
