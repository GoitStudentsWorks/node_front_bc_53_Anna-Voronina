import PropTypes from "prop-types";
import { StyledTitle } from "./Title.styled";

const Title = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
