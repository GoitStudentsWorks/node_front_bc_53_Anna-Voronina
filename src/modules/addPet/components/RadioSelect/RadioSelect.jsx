import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RadioWrapper, SelectRadio, StyledRadio } from "./RadioSelect.styled";

const validationSchema = Yup.object().shape({
  choice: Yup.string().required("Choose one of the options"),
});

const RadioSelect = ({ selectedOption, handleOptionChange }) => {
  const formik = useFormik({
    initialValues: {
      choice: "",
    },
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <RadioWrapper>
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
      </RadioWrapper>
      {formik.errors.choice && formik.touched.choice && (
        <div className="error">{formik.errors.choice}</div>
      )}
    </form>
  );
};

RadioSelect.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  // hideOptions: PropTypes.bool.isRequired,
  // submitButtonClicked: PropTypes.bool.isRequired,
};

export default RadioSelect;
