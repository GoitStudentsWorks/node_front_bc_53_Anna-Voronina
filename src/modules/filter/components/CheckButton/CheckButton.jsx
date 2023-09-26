import PropTypes from 'prop-types';

import { transformString } from '../../helpers/transformString';
import { WrapperCheckButton } from './CheckButton.styled';
import { ageOptions, genderOptions } from '../../service/optionsService';
import Button from '@/shared/components/Button/Button';

export const CheckButton = ({ checkboxes, handleCheckboxChange }) => {
  return (
    <WrapperCheckButton>
      {ageOptions.map(option => (
        <div key={option.value}>
          {checkboxes.ageOptions[option.value] && (
            <Button
              text={transformString(option.value)}
              variant="filterCheck"
              icon="cross-small"
              iconVariant="transparent"
              iconOnClick={() => handleCheckboxChange('ageOptions', option.value)}
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
              iconVariant="transparent"
              iconOnClick={() => handleCheckboxChange('genderOptions', option.value)}
              iconPosition="right"
            />
          )}
        </div>
      ))}
    </WrapperCheckButton>
  );
};

CheckButton.propTypes = {
  checkboxes: PropTypes.shape({
    ageOptions: PropTypes.object,
    genderOptions: PropTypes.object,
  }).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};
