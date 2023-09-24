import {
  Button,
  Div,
  Headermenu,
  Section,
  Svg,
  Svgsmall,
} from "./BurgerMenu.styled";
import PropTypes from "prop-types";
import icon from "../../../shared/icons/sprite.svg";
import { AuthNav } from "../AuthNav/AuthNav";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";

export const BurgerMenu = ({ onClick, isOpen = null }) => {
  return (
    <>
      {isOpen && (
        <Div open={isOpen}>
          <Headermenu>
            <Link to="/main">
              <Svg>
                <use xlinkHref={icon + "#icon-logo"}></use>
              </Svg>
            </Link>

            {isOpen && <AuthNav variant={isOpen ? "none" : "flex"} />}

            <Button onClick={onClick}>
              <Svgsmall>
                <use xlinkHref={icon + "#cross-small"}></use>
              </Svgsmall>
            </Button>
          </Headermenu>
          {isOpen && <AuthNav variant={isOpen ? "flex" : "none"} />}

          <Section>
            {isOpen && <Nav variant={isOpen ? "flex" : "none"} />}
          </Section>
        </Div>
      )}
    </>
  );
};
BurgerMenu.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};
