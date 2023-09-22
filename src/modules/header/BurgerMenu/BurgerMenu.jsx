import {
  Div,
  Headermenu,
  Item,
  LinkMenu,
  Section,
  Svg,
  Svgsmall,
} from "./BurgerMenu.styled";
import icon from "../../../shared/icons/sprite.svg";
import { AuthNav } from "../AuthNav/AuthNav";

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
            <button onClick={onClick}>
              <Svgsmall>
                <use xlinkHref={icon + "#cross-small"}></use>
              </Svgsmall>
            </button>
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
// BurgerMenu.propTypes = {
//   onClick: PropTypes.func,
//   isOpen: PropTypes.bulean,
// };
