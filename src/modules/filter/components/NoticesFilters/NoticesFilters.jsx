import { useLocation } from "react-router-dom";
import { CheckButton } from "../CheckButton/CheckButton";
import { FIlter } from "../Filter/Filter";
import {
  WrapperNoticesFilter,
  WrapperRightSide,
  WrapperRightFilterButton,
  AddPetLink,
} from "./NoticesFilters.styled";
import { FilterButton } from "../FilterButton/FilterButton";
import sprite from "../../../../shared/icons/sprite.svg";

export const NoticesFilters = () => {
  const location = useLocation();

  return (
    <WrapperNoticesFilter>
      <FilterButton />
      <WrapperRightSide>
        <CheckButton />
        <WrapperRightFilterButton>
          <FIlter />
          <AddPetLink to="/add-pet" state={{ from: location }}>
            <span>Add Pet</span>
            <svg width={24} height={24}>
              <use href={sprite + "#plus-small"}></use>
            </svg>
          </AddPetLink>
        </WrapperRightFilterButton>
      </WrapperRightSide>
    </WrapperNoticesFilter>
  );
};
