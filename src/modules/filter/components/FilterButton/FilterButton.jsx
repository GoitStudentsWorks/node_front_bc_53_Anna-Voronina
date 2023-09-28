import { FormStyled, InputStyled, LabelStyled } from './FilterButton.styled';
import { useState } from 'react';

export const FilterButton = () => {
  const [selectedOption, setSelectedOption] = useState('sell');

  const handleOptionChange = value => {
    setSelectedOption(value);
    console.log('Выбрана радиокнопка:', value);
  };

  return (
    <FormStyled>
      <LabelStyled>
        <InputStyled
          type="radio"
          name="selectedOption"
          value="sell"
          checked={selectedOption === 'sell'}
          onChange={() => handleOptionChange('sell')}
        />
        sell
      </LabelStyled>

      <LabelStyled>
        <InputStyled
          type="radio"
          name="selectedOption"
          value="lost-found"
          checked={selectedOption === 'lost-found'}
          onChange={() => handleOptionChange('lost-found')}
        />
        lost/found
      </LabelStyled>

      <LabelStyled>
        <InputStyled
          type="radio"
          name="selectedOption"
          value="in-good-hands"
          checked={selectedOption === 'in-good-hands'}
          onChange={() => handleOptionChange('in-good-hands')}
        />
        in good hands
      </LabelStyled>

      <LabelStyled>
        <InputStyled
          type="radio"
          name="selectedOption"
          value="favorite"
          checked={selectedOption === 'favorite'}
          onChange={() => handleOptionChange('favorite')}
        />
        favorite ads
      </LabelStyled>

      <LabelStyled>
        <InputStyled
          type="radio"
          name="selectedOption"
          value="own"
          checked={selectedOption === 'own'}
          onChange={() => handleOptionChange('own')}
        />
        my ads
      </LabelStyled>
    </FormStyled>
  );
};
