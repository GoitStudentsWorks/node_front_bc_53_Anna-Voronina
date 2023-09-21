import { Button } from "./LogOut.styled";
import icon from "../../../shared/icons/sprite.svg";
export const LogOut = () => {
  return (
    <Button>
      Log out
      <svg>
        <use xlinkHref={icon + "#logout"}> </use>
      </svg>
    </Button>
  );
};
