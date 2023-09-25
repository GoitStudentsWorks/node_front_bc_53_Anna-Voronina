import { useState } from 'react';
import {
  CheckboxInput,
  CheckboxLabel,
  Filter2,
  FilterWrapper,
  Options,
  WrapperOpenOptions,
} from './Filter.styled';
import Button from '@/shared/components/Button/Button';

import sprite from '@/shared/icons/sprite.svg';

export const FIlter = () => {
  const [isButtonsVisible, setButtonsVisible] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    showCheckboxByAge: false,
    showCheckboxByGender: false,
  });

  const toggleButtons = () => {
    setButtonsVisible(!isButtonsVisible);
    setCheckboxes({
      showCheckboxByAge: false,
      showCheckboxByGender: false,
    });
  };

  const showCheckboxDiv = checkboxName => {
    setCheckboxes(prevCheckboxes => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  const ageOptions = [
    { name: 'up to 1 year', value: 'up to 1 year' },
    { name: 'up to 2 years', value: 'up to 2 years' },
    { name: 'from 2 years', value: 'from 2 years' },
  ];

  const genderOptions = [
    { name: 'female', value: 'female' },
    { name: 'male', value: 'male' },
  ];

  return (
    <FilterWrapper>
      <Button
        onClick={toggleButtons}
        text="Filter"
        variant="filter"
        icon="filters-3"
        iconVariant="transparent"
      />
      {isButtonsVisible && (
        <Filter2>
          <WrapperOpenOptions>
            <Button
              onClick={() => showCheckboxDiv('showCheckboxByAge')}
              text="By age"
              variant="filterBySelect"
              icon="chevron-down"
              iconVariant="transparent"
              iconPosition="left"
            />
            {checkboxes.showCheckboxByAge && (
              <Options>
                {ageOptions.map(option => (
                  <CheckboxLabel key={option.value}>
                    <CheckboxInput type="checkbox" name="age" value={option.value} />
                    {option.name}
                  </CheckboxLabel>
                ))}
              </Options>
            )}
          </WrapperOpenOptions>
          <WrapperOpenOptions>
            <Button
              onClick={() => showCheckboxDiv('showCheckboxByGender')}
              text="By Gender"
              variant="filterBySelect"
              icon="chevron-down"
              iconVariant="transparent"
              iconPosition="left"
            />
            {checkboxes.showCheckboxByGender && (
              <Options>
                {genderOptions.map(option => (
                  <CheckboxLabel key={option.value}>
                    <CheckboxInput type="checkbox" name="gender" value={option.value} />
                    {option.name}
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
