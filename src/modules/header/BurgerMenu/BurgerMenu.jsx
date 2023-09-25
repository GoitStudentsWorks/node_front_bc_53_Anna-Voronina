import PropTypes from "prop-types";
import { BurgerHeader, Button, Div, Svgsmall } from "./BurgerMenu.styled";
import { AuthNav } from "../AuthNav/AuthNav";
import { Nav } from "../Nav/Nav";
import { UserNav } from "../UserNav/UserNav";
import icon from "../../../shared/icons/sprite.svg";
import { Logo } from "../Logo/Logo";

export const BurgerMenu = ({ onClick, isOpen = null }) => {
  return (
    <>
      {isOpen && (
        <Div open={isOpen}>
          <BurgerHeader>
            <Logo />
            <AuthNav variant="tabletMenu" />
            <Button onClick={onClick}>
              <Svgsmall width={24} height={24}>
                <use xlinkHref={icon + "#cross-small"}></use>
              </Svgsmall>
            </Button>
          </BurgerHeader>
          <AuthNav variant="menu" />
          {/* <UserNav variant={isOpen ? "flex" : "none"} /> */}
          <Nav variant="menu" />
        </Div>
      )}
    </>
  );
};

BurgerMenu.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};
