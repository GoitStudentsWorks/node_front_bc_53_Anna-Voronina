import PropTypes from "prop-types";
import {
  FieldComentStyled,
  FileInput,
  FileInputContainer,
  FileWrapper,
  RadioContainer,
  RadioLabel,
  RadioParag,
  RadioWrapper,
  StyledLabel,
  StyledRadio,
  WrapperField,
} from "./MoreInfo.styled";
import { FieldStyled } from "../PersonalDetails/PersonalDetails.styled";

const MoreInfo = ({
  errors,
  touched,
  fileInputRef,
  handleFileChange,
  imageUrl,
}) => {
  return (
    <>
      <RadioContainer>
        <RadioParag>Sex</RadioParag>
        <RadioWrapper>
          <div>
            <RadioLabel>
              <StyledRadio type="radio" name="sex" value="female" />
              Female
            </RadioLabel>
          </div>
          <div>
            <RadioLabel>
              <StyledRadio type="radio" name="sex" value="male" />
              Male
            </RadioLabel>
          </div>
        </RadioWrapper>
      </RadioContainer>
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
        <StyledLabel>Location:</StyledLabel>
        <FieldStyled
          type="text"
          name="location"
          placeholder="Enter location"
          required
        />
        {touched.name && errors.name && (
          <div className="error">{errors.name}</div>
        )}
      </WrapperField>
      <WrapperField>
        <StyledLabel>Price:</StyledLabel>
        <FieldStyled type="text" name="price" placeholder="Price" required />
        {touched.name && errors.name && (
          <div className="error">{errors.name}</div>
        )}
      </WrapperField>
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

MoreInfo.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  fileInputRef: PropTypes.object.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
};

export default MoreInfo;
