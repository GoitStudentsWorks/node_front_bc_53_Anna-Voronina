import PropTypes from 'prop-types';
import { RadioWrapper, SelectRadio, StyledRadio } from './ChooseOption.styled';
import { useState } from 'react';
import { FormError } from '../../../authForm/components/FormError/FormError';
import { Formik } from 'formik';
import { FormStyled } from '../../../authForm/components/LoginForm/LoginForm.styled';
import { categorySchema } from '../../validation/addPetSchema';

//
//

const ChooseOption = () => {
  const [option, setOption] = useState('own');

  const initialValues = {
    category: '',
  };

  const handleSubmit = (value, { resetForm }) => {
    const { category } = value;

    resetForm();
  };
  const handleChange = e => {
    const selectedValue = e.target.value;
    setOption(selectedValue);
  };

  return (
    <RadioWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={categorySchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <FormStyled autoComplete="off">
            <div>
              <SelectRadio className={option === 'own' ? 'checked' : ''}>
                <StyledRadio
                  type="radio"
                  name="category"
                  value="own"
                  checked={option === 'own'}
                  onChange={handleChange}
                />
                your pet
              </SelectRadio>
            </div>
            <div>
              <SelectRadio className={option === 'sell' ? 'checked' : ''}>
                <StyledRadio
                  type="radio"
                  name="category"
                  value="sell"
                  checked={option === 'sell'}
                  onChange={handleChange}
                />
                sell
              </SelectRadio>
            </div>
            <div>
              <SelectRadio className={option === 'lost-found' ? 'checked' : ''}>
                <StyledRadio
                  type="radio"
                  name="category"
                  value="lost-found"
                  checked={option === 'lost-found'}
                  onChange={handleChange}
                />
                lost/found
              </SelectRadio>
            </div>
            <div>
              <SelectRadio className={option === 'in-good-hands' ? 'checked' : ''}>
                <StyledRadio
                  type="radio"
                  name="category"
                  value="in-good-hands"
                  checked={option === 'in-good-hands'}
                  onChange={handleChange}
                />
                in good hands
              </SelectRadio>
            </div>

            <FormError name="category" touched={touched} errors={errors} />
          </FormStyled>
        )}
      </Formik>
    </RadioWrapper>
  );
};

export default ChooseOption;
