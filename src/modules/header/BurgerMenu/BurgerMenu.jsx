import {
  Button,
  Div,
  // DivLink,
  Headermenu,
  Item,
  LinkMenu,
  Section,
  Svg,
  Svgsmall,
} from "./BurgerMenu.styled";
import PropTypes from "prop-types";
import icon from "../../../shared/icons/sprite.svg";
import { AuthNav } from "../AuthNav/AuthNav";

const routes = [
  { path: "/login", text: "Log IN" },
  { path: "/register", text: " Registration" },
];

export const BurgerMenu = ({ onClick, isOpen }) => {
  return (
    <>
      {isOpen && (
        <Div open={isOpen}>
          <Headermenu>
            <Svg>
              <use xlinkHref={icon + "#icon-logo"}></use>
            </Svg>
            <AuthNav />
            <Button onClick={onClick}>
              <Svgsmall>
                <use xlinkHref={icon + "#cross-small"}></use>
              </Svgsmall>
            </Button>
          </Headermenu>
          <Section>
            <ul>
              <Item>
                <LinkMenu to="/news">News</LinkMenu>
              </Item>
              <Item>
                <LinkMenu to="/notices">Find pet</LinkMenu>
              </Item>
              <Item>
                <LinkMenu to="/friends">Our friends</LinkMenu>
              </Item>
            </ul>
          </Section>
        </Div>
      )}
    </>
  );
};
BurgerMenu.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bulean,
};
