import PropTypes from "prop-types";
import {
  StyledUserNav,
  UserName,
  UserNavIcon,
  UserNavLink,
} from "./UserNav.styled";
import { Logout } from "../../../shared/components/Logout/Logout";
import sprite from "@/shared/icons/sprite.svg";

export const UserNav = ({ variant = "" }) => {
  return (
    <StyledUserNav $variant={variant}>
      <Logout
        variant="header"
        type={variant === "tabletMenu" ? "tabletMenu" : null}
      />
      <UserNavLink $variant={variant} to="/user">
        <UserNavIcon width={28} height={28}>
          <use href={sprite + "#user-1"}></use>
        </UserNavIcon>
        <UserName $variant={variant}>Jackson</UserName>
      </UserNavLink>
      <Logout variant="menu" />
    </StyledUserNav>
  );
};

UserNav.propTypes = {
  variant: PropTypes.string,
};
