import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

const Button = ({
  onClick = null,
  text,
  type = "button",
  icon = null,
  variant = "bigButtonFirst",
  iconPosition = "right",
}) => {
  return (
    <ButtonStyled type={type} onClick={onClick} $variant={variant}>
      {iconPosition === "left" && icon}
      {text}
      {iconPosition === "right" && icon && (
        <svg>
          <use href={icon} />
        </svg>
      )}
    </ButtonStyled>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
};
