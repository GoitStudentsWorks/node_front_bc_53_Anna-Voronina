import PropTypes from "prop-types";
import { RadioWrapper, SelectRadio, StyledRadio } from "./ChooseOption.styled";
import { FormError } from "../../../authForm/components/FormError/FormError";

const ChooseOption = ({
  selectedOption,
  handleOptionChange,
  errors,
  touched,
}) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    handleOptionChange(selectedValue);
  };
  console.log(errors);
  console.log(touched);
  return (
    <RadioWrapper>
      <div>
        <SelectRadio className={selectedOption === "option1" ? "checked" : ""}>
          <StyledRadio
            type="radio"
            name="choice"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleChange}
          />
          your pet
        </SelectRadio>
      </div>
      <div>
        <SelectRadio className={selectedOption === "option2" ? "checked" : ""}>
          <StyledRadio
            type="radio"
            name="choice"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleChange}
          />
          sell
        </SelectRadio>
      </div>
      <div>
        <SelectRadio className={selectedOption === "option3" ? "checked" : ""}>
          <StyledRadio
            type="radio"
            name="choice"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleChange}
          />
          lost/found
        </SelectRadio>
      </div>
      <div>
        <SelectRadio className={selectedOption === "option4" ? "checked" : ""}>
          <StyledRadio
            type="radio"
            name="choice"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={handleChange}
          />
          in good hands
        </SelectRadio>
      </div>
      <FormError name="choice" errors={errors} touched={touched} />
    </RadioWrapper>
  );
};

ChooseOption.propTypes = {
  selectedOption: PropTypes.string,
  handleOptionChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  touched: PropTypes.object,
};

export default ChooseOption;
