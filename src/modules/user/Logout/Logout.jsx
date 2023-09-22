import Icons from "../../../shared/icons/sprite.svg";
import { LogoutBtn } from "./Logout.styled";

export const Logout = () => {
  return (
    <>
      <LogoutBtn>
        <svg>
          <use href={Icons + "#logout"}></use>
        </svg>
        <p>Log Out</p>
      </LogoutBtn>
    </>
  );
};
