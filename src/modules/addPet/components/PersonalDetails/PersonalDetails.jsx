import {
  FieldStyled,
  StyledLabel,
  WrapperField,
} from "./PersonalDetails.styled";

const PersonalDetails = (formikProps) => {
  const { errors, touched } = formikProps;
  return (
    <>
      <WrapperField>
        <StyledLabel>Title of add:</StyledLabel>
        <FieldStyled
          type="text"
          name="title"
          placeholder="Title of add"
          required
        />
        {touched.name && errors.name && (
          <div className="error">{errors.name}</div>
        )}
      </WrapperField>
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

export default PersonalDetails;
