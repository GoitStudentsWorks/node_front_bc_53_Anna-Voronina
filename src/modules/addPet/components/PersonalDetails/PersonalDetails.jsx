import { FieldStyled, StyledLabel, WrapperField } from './PersonalDetails.styled';

import { FormError } from '../../../authForm/components/FormError/FormError';

const PersonalDetails = ({ handleChange, handleBlur, errors, touched }) => {
  return (
    <>
      <WrapperField>
        <StyledLabel>Title of add:</StyledLabel>
        <FieldStyled
          type="text"
          name="title"
          placeholder="Title of add"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        <FormError name="title" touched={touched} errors={errors} />
      </WrapperField>
      <WrapperField>
        <StyledLabel>Pet's name:</StyledLabel>
        <FieldStyled type="text" name="name" placeholder="Type name pet" required />
        <FormError name="name" touched={touched} errors={errors} />
      </WrapperField>
      <WrapperField>
        <StyledLabel>Date of Birth:</StyledLabel>
        <FieldStyled type="text" name="date" placeholder="Type date of birth" required />
        <FormError name="date" touched={touched} errors={errors} />
      </WrapperField>
      <WrapperField>
        <StyledLabel>Type of Pet:</StyledLabel>
        <FieldStyled type="text" name="type" placeholder="Type of pet" required />
        <FormError name="type" touched={touched} errors={errors} />
        <FormError name="choice" errors={errors} touched={touched} />
      </WrapperField>
    </>
  );
};

export default PersonalDetails;
