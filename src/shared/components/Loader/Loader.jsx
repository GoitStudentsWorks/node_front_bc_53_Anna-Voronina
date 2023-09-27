import { AjaxLoader, PawStyled } from "./Loader.styled";
import sprite from "../../icons/sprite.svg";

export const Loader = () => {
  return (
    <AjaxLoader>
      <PawStyled>
        <svg>
          <use href={sprite + "#paw"}></use>
        </svg>
      </PawStyled>
      <PawStyled>
        <svg>
          <use href={sprite + "#paw"}></use>
        </svg>
      </PawStyled>
      <PawStyled>
        <svg>
          <use href={sprite + "#paw"}></use>
        </svg>
      </PawStyled>
      <PawStyled>
        <svg>
          <use href={sprite + "#paw"}></use>
        </svg>
      </PawStyled>
      <PawStyled>
        <svg>
          <use href={sprite + "#paw"}></use>
        </svg>
      </PawStyled>
      <PawStyled>
        <svg>
          <use href={sprite + "#paw"}></use>
        </svg>
      </PawStyled>
    </AjaxLoader>
  );
};
