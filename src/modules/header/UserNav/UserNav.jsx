import PropTypes from "prop-types";
import {
  StyledUserNav,
  UserName,
  UserNavIcon,
  UserNavLink,
} from "./UserNav.styled";
import { Logout } from "../../../shared/components/Logout/Logout";
import sprite from "@/shared/icons/sprite.svg";

export const UserNav = ({ variant = "", onClick }) => {
  const variantCheck = variant === "menu" || "tabletMenu";

  return (
    <StyledUserNav $variant={variant}>
      <Logout
        variant="header"
        type={variant === "tabletMenu" ? "tabletMenu" : null}
        onMenuClose={variant === "tabletMenu" ? onClick : null}
      />
      <UserNavLink
        $variant={variant}
        to="/user"
        onClick={variantCheck ? onClick : null}
      >
        <UserNavIcon width={28} height={28}>
          <use href={sprite + "#user-1"}></use>
        </UserNavIcon>
        <UserName $variant={variant}>Jackson</UserName>
      </UserNavLink>
      <Logout variant="menu" onMenuClose={onClick} />
    </StyledUserNav>
  );
};

UserNav.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
