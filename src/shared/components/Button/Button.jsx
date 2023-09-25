import PropTypes from 'prop-types';
import { ButtonStyled, SvgStyled } from './Button.styled';
import sprite from '../../icons/sprite.svg';

const Button = ({
  onClick = null,
  text,
  type = 'button',
  icon = null,
  variant = 'bigButtonFirst',
  iconPosition = 'right',
  iconVariant = '',
}) => {
  return (
    <ButtonStyled type={type} onClick={onClick} $variant={variant}>
      {iconPosition === 'left' && (
        <SvgStyled width="24" height="24" $iconVariant={iconVariant}>
          <use href={`${sprite}#${icon}`}></use>
        </SvgStyled>
      )}
      {text}
      {iconPosition === 'right' && (
        <SvgStyled width="24" height="24" $iconVariant={iconVariant}>
          <use href={`${sprite}#${icon}`}></use>
        </SvgStyled>
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
  iconVariant: PropTypes.string,
};
