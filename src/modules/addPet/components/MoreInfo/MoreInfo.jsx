import PropTypes from "prop-types";
import {
  FieldComentStyled,
  FieldContainer,
  FileInput,
  FileInputContainer,
  FileWrapper,
  FlexContainer,
  IconFemale,
  IconMale,
  IconPlus,
  ImgSexContainer,
  RadioContainer,
  RadioLabel,
  RadioParag,
  RadioWrapper,
  StyledLabel,
  StyledRadio,
  WrapperField,
} from "./MoreInfo.styled";
import { FieldStyled } from "../PersonalDetails/PersonalDetails.styled";
import sprite from "@/shared/icons/sprite.svg";
import { useState } from "react";

const MoreInfo = ({
  errors,
  touched,
  fileInputRef,
  handleFileChange,
  imageUrl,
  formData,
}) => {
  const [selectedSex, setSelectedSex] = useState("");
  const optionsToHidePrice = ["option1", "option3", "option3"];
  const handleSexChange = (event) => {
    setSelectedSex(event.target.value);
  };

  return (
    <FlexContainer>
      <ImgSexContainer>
        <RadioContainer>
          <RadioParag>Sex</RadioParag>
          <RadioWrapper>
            <RadioLabel className={selectedSex === "female" ? "checked" : ""}>
              <StyledRadio
                type="radio"
                id="female"
                name="sex"
                value="female"
                checked={selectedSex === "female"}
                onChange={handleSexChange}
              />
              <IconFemale>
                <use href={sprite + "#female"}></use>
              </IconFemale>
              Female
            </RadioLabel>
            <RadioLabel className={selectedSex === "male" ? "checked" : ""}>
              <StyledRadio
                type="radio"
                name="sex"
                value="male"
                checked={selectedSex === "male"}
                onChange={handleSexChange}
              />
              <IconMale>
                <use href={sprite + "#male"}></use>
              </IconMale>
              Male
            </RadioLabel>
          </RadioWrapper>
        </RadioContainer>
        <FileWrapper>
          <StyledLabel>Load the pet’s image:</StyledLabel>
          <FileInputContainer imageUrl={imageUrl}>
            <FileInput
              type="file"
              name="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              autoComplete="off"
              required
            />
            <IconPlus>
              <use href={sprite + "#plus"}></use>
            </IconPlus>
          </FileInputContainer>
        </FileWrapper>
      </ImgSexContainer>
      <FieldContainer>
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
        {formData.choice && !optionsToHidePrice.includes(formData.choice) && (
          <WrapperField>
            <StyledLabel>Price:</StyledLabel>
            <FieldStyled
              type="text"
              name="price"
              placeholder="Price"
              required
            />
            {touched.name && errors.name && (
              <div className="error">{errors.name}</div>
            )}
          </WrapperField>
        )}
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
      </FieldContainer>
    </FlexContainer>
  );
};

MoreInfo.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  fileInputRef: PropTypes.object.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
  formData: PropTypes.object,
};

export default MoreInfo;
