import PropTypes from "prop-types";
import {
  FieldComentStyled,
  FileInput,
  FileInputContainer,
  FileWrapper,
  StyledLabel,
  WrapperField,
} from "./MyPetSecondStep.styled";

const MyPetSecondStep = ({
  errors,
  touched,
  fileInputRef,
  handleFileChange,
  imageUrl,
}) => {
  return (
    <>
      <FileWrapper>
        <StyledLabel>
          Load the pet’s <br /> image:
        </StyledLabel>
        <FileInputContainer imageUrl={imageUrl}>
          <FileInput
            type="file"
            name="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            autoComplete="off"
            required
          />
          {touched.file && errors.file && (
            <div className="error">{errors.file}</div>
          )}
        </FileInputContainer>
      </FileWrapper>
      <WrapperField>
        <StyledLabel>Comments:</StyledLabel>
        <FieldComentStyled
          type="text"
          name="comments"
          placeholder="Comments"
          autoComplete="off"
          component="textarea"
        />
      </WrapperField>
    </>
  );
};

MyPetSecondStep.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  fileInputRef: PropTypes.object.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  imageUrl: PropTypes.object,
};

export default MyPetSecondStep;
