import {
  CheckboxInput,
  CheckboxLabel,
  Filter2,
  FilterWrapper,
  Options,
  SvgCheck,
  TitleFilter,
  WrapperOpenOptions,
} from './Filter.styled';

import sprite from '@/shared/icons/sprite.svg';

import Button from '@/shared/components/Button/Button';

import { ageOptions, genderOptions } from '../../service/optionsService';

import { useDispatch, useSelector } from 'react-redux';
import {
  setSelectCheckboxName,
  toggleAgeOption,
  toggleButtons,
  toggleCheckboxByAge,
  toggleCheckboxByGender,
  toggleGenderOption,
} from '@/redux/global/globalSlice';
import { selectCheckboxes, selectIsButtonsVisible } from '@/redux/global/globalSelectors';
import { useEffect, useState } from 'react';

export const FIlter = () => {
  const [buttonText, setButtonText] = useState(window.innerWidth < 768 ? ' ' : 'Filter');
  const dispatch = useDispatch();
  const isButtonsVisible = useSelector(selectIsButtonsVisible);
  const checkboxes = useSelector(selectCheckboxes);

  useEffect(() => {
    const handleResize = () => {
      setButtonText(window.innerWidth < 768 ? ' ' : 'Filter');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleButtonsFilter = () => {
    dispatch(toggleButtons());
  };

  const toggleSelectByOption = optionType => {
    optionType === 'age' ? dispatch(toggleCheckboxByAge()) : dispatch(toggleCheckboxByGender());
  };

  const toggleCheckBoxOption = (optionType, option) => {
    const isChecked = !checkboxes[`${optionType}Options`][option];
    dispatch(optionType === 'age' ? toggleAgeOption(option) : toggleGenderOption(option));
    dispatch(setSelectCheckboxName(isChecked ? option : null));
  };

  return (
    <FilterWrapper>
      <Button
        onClick={toggleButtonsFilter}
        text={buttonText}
        variant="filter"
        icon="filters-3"
        iconVariant="transparent"
        iconPosition="right"
        isButtonsVisible={isButtonsVisible}
      />
      {isButtonsVisible && (
        <Filter2>
          <TitleFilter>Filters</TitleFilter>
          <WrapperOpenOptions>
            <Button
              text="By age"
              variant="filterBySelect"
              icon={checkboxes.showCheckboxByAge ? 'chevron-up' : 'chevron-down'}
              iconVariant="transparent"
              iconPosition="left"
              onClick={() => toggleSelectByOption('age')}
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
                      onChange={() => toggleCheckBoxOption('age', option.value)}
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
              onClick={() => toggleSelectByOption('gender')}
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
                      onChange={() => toggleCheckBoxOption('gender', option.value)}
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
  );
};
