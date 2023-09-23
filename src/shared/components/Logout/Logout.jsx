import PropTypes from "prop-types";
import { LogoutBtn } from "./Logout.styled.js";
import Icons from "../../../shared/icons/sprite.svg";

export const Logout = ({ variant }) => {
  return (
    <LogoutBtn $variant={variant}>
      Log out
      <svg>
        <use xlinkHref={Icons + "#logout"}> </use>
      </svg>
    </LogoutBtn>
  );
};

Logout.propTypes = {
  variant: PropTypes.string.isRequired,
};
