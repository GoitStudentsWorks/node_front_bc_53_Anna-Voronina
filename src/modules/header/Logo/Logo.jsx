import icon from "../../../shared/icons/sprite.svg";
import { LogoLink, LogoSvg } from "./Logo.styled";

export const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoSvg>
        <use xlinkHref={icon + "#icon-logo"}></use>
      </LogoSvg>
      {/* <p> ManePage</p> */}
    </LogoLink>
  );
};
