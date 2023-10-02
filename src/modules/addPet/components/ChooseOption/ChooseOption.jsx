import PropTypes from 'prop-types';
import { RadioWrapper, SelectRadio, StyledRadio } from './ChooseOption.styled';
import { useState } from 'react';
import { FormError } from '../../../authForm/components/FormError/FormError';

//
//

const ChooseOption = ({ selectedOption, handleOptionChange, touched, errors }) => {
  const [isOptionSelected, setIsOptionSelected] = useState(true);

  const handleChange = e => {
    const selectedValue = e.target.value;
    handleOptionChange(selectedValue);

    if (!selectedValue) {
      setIsOptionSelected(false);
    } else {
      setIsOptionSelected(true);
    }
  };
  console.log(errors);
  console.log(touched);
  return (
    <RadioWrapper>
      <div>
        <SelectRadio className={selectedOption === 'option1' ? 'checked' : ''}>
          <StyledRadio
            type="radio"
            name="choice"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleChange}
          />
          your pet
        </SelectRadio>
      </div>
      <div>
        <SelectRadio className={selectedOption === 'option2' ? 'checked' : ''}>
          <StyledRadio
            type="radio"
            name="choice"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleChange}
          />
          sell
        </SelectRadio>
      </div>
      <div>
        <SelectRadio className={selectedOption === 'option3' ? 'checked' : ''}>
          <StyledRadio
            type="radio"
            name="choice"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleChange}
          />
          lost/found
        </SelectRadio>
      </div>
      <div>
        <SelectRadio className={selectedOption === 'option4' ? 'checked' : ''}>
          <StyledRadio
            type="radio"
            name="choice"
            value="option4"
            checked={selectedOption === 'option4'}
            onChange={handleChange}
          />
          in good hands
        </SelectRadio>
      </div>
      {errors.choice && <div style={{ color: 'red' }}>{errors.choice}</div>}
    </RadioWrapper>
  );
};

ChooseOption.propTypes = {
  errors: PropTypes.shape({
    choice: PropTypes.bool,
  }).isRequired,
  handleOptionChange: PropTypes.func.isRequired, // hideOptions: PropTypes.bool.isRequired,
  selectedOption: PropTypes.string.isRequired,
  touched: PropTypes.shape({
    choice: PropTypes.bool,
  }).isRequired,
};

export default ChooseOption;
