import PropTypes from "prop-types";
import { StyledTitle } from "./Title.styled";

const Title = ({ step, text = "Add Pet" }) => {
  const isStep3 = step === 3;

  return (
    <StyledTitle className={isStep3 ? "centered" : ""}>{text}</StyledTitle>
  );
};

Title.propTypes = {
  text: PropTypes.string,
  step: PropTypes.number,
};

export default Title;
