import PropTypes from "prop-types";
import { BurgerHeader, Button, Div, Svgsmall } from "./BurgerMenu.styled";
import { AuthNav } from "../AuthNav/AuthNav";
import { Nav } from "../Nav/Nav";
import { UserNav } from "../UserNav/UserNav";
import icon from "../../../shared/icons/sprite.svg";
import { Logo } from "../Logo/Logo";

export const BurgerMenu = ({ onClick, isOpen = false }) => {
  return (
    <>
      <Div className={isOpen ? "open" : "closed"}>
        <BurgerHeader>
          <Logo variant="menu" onClick={onClick} />
          {/* <AuthNav variant="tabletMenu" onClick={onClick} /> */}
          <UserNav variant="tabletMenu" onClick={onClick} />
          <Button onClick={onClick}>
            <Svgsmall width={24} height={24}>
              <use xlinkHref={icon + "#cross-small"}></use>
            </Svgsmall>
          </Button>
        </BurgerHeader>
        {/* <AuthNav variant="menu" onClick={onClick} /> */}
        <UserNav variant="menu" onClick={onClick} />
        <Nav variant="menu" onClick={onClick} />
      </Div>
    </>
  );
};

BurgerMenu.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};
