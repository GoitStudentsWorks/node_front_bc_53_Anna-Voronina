import { FormError } from "../../../authForm/components/FormError/FormError";
import {
  FieldStyled,
  StyledLabel,
  WrapperField,
} from "./PersonalDetails.styled";

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
      </WrapperField>
      <WrapperField>
        <StyledLabel>Pet's name:</StyledLabel>
        <FieldStyled
          type="text"
          name="name"
          placeholder="Type name pet"
          required
        />
      </WrapperField>
      <WrapperField>
        <StyledLabel>Date of Birth:</StyledLabel>
        <FieldStyled
          type="text"
          name="date"
          placeholder="Type date of birth"
          required
        />
      </WrapperField>
      <WrapperField>
        <StyledLabel>Type of Pet:</StyledLabel>
        <FieldStyled
          type="text"
          name="type"
          placeholder="Type of pet"
          required
        />
        <FormError name="choice" errors={errors} touched={touched} />
      </WrapperField>
    </>
  );
};

export default PersonalDetails;
