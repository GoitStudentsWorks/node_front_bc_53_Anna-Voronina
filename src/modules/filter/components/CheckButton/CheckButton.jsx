import { transformString } from '../../helpers/transformString';
import { WrapperCheckButton } from './CheckButton.styled';
import { ageOptions, genderOptions } from '../../service/optionsService';
import Button from '@/shared/components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectCheckboxes } from '@/redux/global/globalSelectors';
import {
  setSelectCheckboxName,
  toggleAgeOption,
  toggleGenderOption,
} from '@/redux/global/globalSlice';

export const CheckButton = () => {
  const checkboxes = useSelector(selectCheckboxes);
  const dispatch = useDispatch();

  const toggleCheckBoxOption = (optionType, option) => {
    const isChecked = !checkboxes[`${optionType}Options`][option];
    dispatch(optionType === 'age' ? toggleAgeOption(option) : toggleGenderOption(option));
    dispatch(setSelectCheckboxName(isChecked ? option : null));
  };
  return (
    <WrapperCheckButton>
      {ageOptions.map(option => (
        <div key={option.value}>
          {checkboxes.ageOptions[option.value] && (
            <Button
              text={transformString(option.value)}
              variant="filterCheck"
              icon="cross-small"
              iconVariant="filterbutton"
              iconOnClick={() => toggleCheckBoxOption('age', option.value)}
              iconPosition="right"
            />
          )}
        </div>
      ))}
      {genderOptions.map(option => (
        <div key={option.value}>
          {checkboxes.genderOptions[option.value] && (
            <Button
              text={transformString(option.value)}
              variant="filterCheck"
              icon="cross-small"
              iconVariant="filterbutton"
              iconOnClick={() => toggleCheckBoxOption('gender', option.value)}
              iconPosition="right"
            />
          )}
        </div>
      ))}
    </WrapperCheckButton>
  );
};
