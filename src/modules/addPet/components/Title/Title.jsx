import PropTypes from "prop-types";
import { StyledTitle } from "./Title.styled";

const Title = ({ text = "Add Pet" }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;

Title.propTypes = {
  text: PropTypes.string,
};
