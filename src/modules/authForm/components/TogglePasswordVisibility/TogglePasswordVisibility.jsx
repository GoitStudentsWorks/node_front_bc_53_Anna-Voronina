import PropTypes from 'prop-types';
import { FaEyeSlashStyled, FaEyeStyled, PasswordIconLook } from './TogglePasswordVisibility.styled';

export const TogglePasswordIcon = ({ showPassword, onToggle }) => {
  return (
    <PasswordIconLook>
      {showPassword ? <FaEyeStyled onClick={onToggle} /> : <FaEyeSlashStyled onClick={onToggle} />}
    </PasswordIconLook>
  );
};

TogglePasswordIcon.propTypes = {
  onToggle: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
};
