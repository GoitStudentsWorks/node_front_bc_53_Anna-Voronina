import {
  FieldStyled,
  StyledLabel,
  WrapperField,
} from "./MyPetFirstStep.styled";

const MyPetFirstStep = (formikProps) => {
  const { errors, touched } = formikProps;
  return (
    <>
      <WrapperField>
        <StyledLabel>Pet's name:</StyledLabel>
        <FieldStyled
          type="text"
          name="name"
          placeholder="Type name pet"
          required
        />
        {touched.name && errors.name && (
          <div className="error">{errors.name}</div>
        )}
      </WrapperField>
      <WrapperField>
        <StyledLabel>Date of Birth:</StyledLabel>
        <FieldStyled
          type="text"
          name="date"
          placeholder="Type date of birth"
          required
        />
        {touched.date && errors.date && (
          <div className="error">{errors.date}</div>
        )}
      </WrapperField>
      <WrapperField>
        <StyledLabel>Type of Pet:</StyledLabel>
        <FieldStyled
          type="text"
          name="type"
          placeholder="Type of pet"
          required
        />
        {touched.type && errors.type && (
          <div className="error">{errors.type}</div>
        )}
      </WrapperField>
    </>
  );
};

export default MyPetFirstStep;
