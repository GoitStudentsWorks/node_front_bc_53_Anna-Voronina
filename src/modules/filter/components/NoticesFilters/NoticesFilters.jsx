import Button from '@/shared/components/Button/Button';
import { CheckButton } from '../CheckButton/CheckButton';
import { FIlter } from '../Filter/Filter';
import {
  WrapperNoticesFilter,
  WrapperRightSide,
  WrapperRightFilterButton,
} from './NoticesFilters.styled';
import { FilterButton } from '../FilterButton/FilterButton';

export const NoticesFilters = () => {
  return (
    <WrapperNoticesFilter>
      <FilterButton />
      <WrapperRightSide>
        <CheckButton />
        <WrapperRightFilterButton>
          <FIlter />
          <Button
            variant="addPet"
            text="Add Pet"
            icon="plus-small"
            iconVariant="transparent"
            iconPosition="right"
          />
        </WrapperRightFilterButton>
      </WrapperRightSide>
    </WrapperNoticesFilter>
  );
};
