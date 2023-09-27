import {
  CheckboxInput,
  CheckboxLabel,
  Filter2,
  FilterWrapper,
  Options,
  SvgCheck,
  WrapperNoticesFilter,
  WrapperOpenOptions,
} from './Filter.styled';

import sprite from '@/shared/icons/sprite.svg';

import Button from '@/shared/components/Button/Button';

import { ageOptions, genderOptions } from '../../service/optionsService';

import { FilterButton } from '../FilterButton/FilterButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSelectCheckboxName,
  toggleAgeOption,
  toggleButtons,
  toggleCheckboxByAge,
  toggleCheckboxByGender,
  toggleGenderOption,
} from '../../../../redux/global/globalSlice';
import { selectCheckboxes, selectIsButtonsVisible } from '../../../../redux/global/globalSelectors';
import { CheckButton } from '../CheckButton/CheckButton';

export const FIlter = () => {
  const dispatch = useDispatch();
  const isButtonsVisible = useSelector(selectIsButtonsVisible);
  const checkboxes = useSelector(selectCheckboxes);

  // console.log(checkboxes);

  const toggleButtonsFilter = () => {
    dispatch(toggleButtons());
  };

  const toggleSelectByAge = () => {
    dispatch(toggleCheckboxByAge());
  };

  const toggleSelectByGender = () => {
    dispatch(toggleCheckboxByGender());
  };

  const toggleCheckBoxAgeOption = option => {
    const isChecked = !checkboxes.ageOptions[option];
    dispatch(toggleAgeOption(option));
    dispatch(setSelectCheckboxName(isChecked ? option : null));
  };

  const toggleCheckBoxGenderOption = option => {
    const isChecked = !checkboxes.genderOptions[option];
    dispatch(toggleGenderOption(option));
    dispatch(setSelectCheckboxName(isChecked ? option : null));
  };

  return (
    <>
      <WrapperNoticesFilter>
        <FilterWrapper>
          <Button
            onClick={toggleButtonsFilter}
            text="Filter"
            variant="filter"
            icon="filters-3"
            iconVariant="transparent"
            iconPosition="right"
            isButtonsVisible={isButtonsVisible}
          />
          {isButtonsVisible && (
            <Filter2>
              <WrapperOpenOptions>
                <Button
                  text="By age"
                  variant="filterBySelect"
                  icon={checkboxes.showCheckboxByAge ? 'chevron-up' : 'chevron-down'}
                  iconVariant="transparent"
                  iconPosition="left"
                  onClick={toggleSelectByAge}
                />
                {checkboxes.showCheckboxByAge && (
                  <Options>
                    {ageOptions.map(option => (
                      <CheckboxLabel key={option.value}>
                        <CheckboxInput
                          type="checkbox"
                          name="age"
                          value={option.value}
                          checked={checkboxes.ageOptions[option.value]}
                          onChange={() => toggleCheckBoxAgeOption(option.value)}
                        />
                        {option.name}
                        {checkboxes.ageOptions[option.value] ? (
                          <SvgCheck width="24" height="24">
                            <use href={sprite + '#check-round'}></use>
                          </SvgCheck>
                        ) : (
                          <SvgCheck width="24" height="24">
                            <use href={sprite + '#round'}></use>
                          </SvgCheck>
                        )}
                      </CheckboxLabel>
                    ))}
                  </Options>
                )}
              </WrapperOpenOptions>
              <WrapperOpenOptions>
                <Button
                  text="By Gender"
                  variant="filterBySelect"
                  icon={checkboxes.showCheckboxByGender ? 'chevron-up' : 'chevron-down'}
                  iconVariant="transparent"
                  iconPosition="left"
                  onClick={toggleSelectByGender}
                />
                {checkboxes.showCheckboxByGender && (
                  <Options>
                    {genderOptions.map(option => (
                      <CheckboxLabel key={option.value}>
                        <CheckboxInput
                          type="checkbox"
                          name="gender"
                          value={option.value}
                          checked={checkboxes.genderOptions[option.value]}
                          onChange={() => toggleCheckBoxGenderOption(option.value)}
                        />
                        {option.name}
                        {checkboxes.genderOptions[option.value] ? (
                          <SvgCheck width="24" height="24">
                            <use href={sprite + '#check-round'}></use>
                          </SvgCheck>
                        ) : (
                          <SvgCheck width="24" height="24">
                            <use href={sprite + '#round'}></use>
                          </SvgCheck>
                        )}
                      </CheckboxLabel>
                    ))}
                  </Options>
                )}
              </WrapperOpenOptions>
            </Filter2>
          )}
        </FilterWrapper>
        <FilterButton />
      </WrapperNoticesFilter>
      <div>
        <CheckButton checkboxes={checkboxes} />
      </div>
    </>
  );
};
