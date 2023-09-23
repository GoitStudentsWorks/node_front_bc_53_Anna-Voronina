import { useState } from "react";
import icon from "../../../shared/icons/sprite.svg";
import { Button, Svg } from "./ButtonMenu.styled";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
export const ButtonMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <>
      <Button onClick={open}>
        <Svg>
          <use xlinkHref={icon + "#menu-hamburger"}></use>
        </Svg>
      </Button>
      {isOpen && <BurgerMenu onClick={close} isOpen={isOpen} />}
    </>
  );
};
