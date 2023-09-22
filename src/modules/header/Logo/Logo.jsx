import { Link } from "react-router-dom";
import icon from "../../../shared/icons/sprite.svg";
import { Svg } from "./Logo.styled";
export const Logo = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/main">
            <Svg>
              <use xlinkHref={icon + "#icon-logo"}></use>
            </Svg>
            {/* <p> ManePage</p> */}
          </Link>
        </li>
      </ul>
    </>
  );
};
