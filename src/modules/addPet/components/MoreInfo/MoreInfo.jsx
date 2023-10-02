import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, useFormik } from "formik";

import { addPetFormData, updateStep } from "@/redux/notices/noticesSlice";
import { selectPetFormData } from "@/redux/notices/noticesSelectors";
import {
  moreInfoOwnSchema,
  moreInfoSellSchema,
  notForSellSchema,
} from "../../validation/addPetSchema";

import {
  FieldComentStyled,
  FieldContainer,
  FileInput,
  FileInputContainer,
  FileWrapper,
  FlexContainer,
  FormContainer,
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
import { PetFormButtons } from "../PetFormButtons/PetFormButtons";
import { FormError } from "../../../authForm/components/FormError/FormError";
import { addNewNoticeThunk } from "../../../../redux/notices/noticesOperations";

const MoreInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const petFormData = useSelector(selectPetFormData);

  const initialValues = {
    sex: petFormData?.sex ? petFormData?.sex : "",
    location: petFormData?.location ? petFormData?.location : "",
    price: petFormData?.price ? petFormData?.price : "",
    file: petFormData?.file ? petFormData?.file : null,
    comments: petFormData?.comments ? petFormData?.comments : "",
  };

  const handleSubmit = (values) => {
    console.log(values);

    const formData = new FormData();
    formData.append("file", values?.file);

    dispatch(addNewNoticeThunk({ ...petFormData, ...values }))
      .unwrap()
      .then(() => {
        dispatch(addPetFormData({}));
        dispatch(updateStep(1));
        navigate(`/`);
      });
  };

  const determineSchema = (category) => {
    switch (category) {
      case "sell":
        return moreInfoSellSchema;

      case "own":
        return moreInfoOwnSchema;

      default:
        return notForSellSchema;
    }
  };

  console.log(petFormData?.category);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={determineSchema(petFormData?.category)}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, setFieldValue, touched, errors }) => (
        <FormContainer>
          <FlexContainer>
            {petFormData?.category !== "own" && (
              <ImgSexContainer>
                <RadioContainer>
                  <RadioParag>Sex</RadioParag>
                  <RadioWrapper>
                    <RadioLabel
                      className={values?.sex === "female" ? "checked" : ""}
                    >
                      <StyledRadio
                        type="radio"
                        id="female"
                        name="sex"
                        value="female"
                        checked={values?.sex === "female"}
                        onChange={handleChange}
                      />
                      <IconFemale>
                        <use href={sprite + "#female"}></use>
                      </IconFemale>
                      Female
                    </RadioLabel>
                    <RadioLabel
                      className={values?.sex === "male" ? "checked" : ""}
                    >
                      <StyledRadio
                        type="radio"
                        name="sex"
                        value="male"
                        checked={values?.sex === "male"}
                        onChange={handleChange}
                      />
                      <IconMale>
                        <use href={sprite + "#male"}></use>
                      </IconMale>
                      Male
                    </RadioLabel>
                  </RadioWrapper>
                  <FormError name="sex" touched={touched} errors={errors} />
                </RadioContainer>
                <FileWrapper>
                  <StyledLabel>Load the pet&apos;s image:</StyledLabel>
                  <FileInputContainer
                    $imageUrl={
                      values?.file ? URL.createObjectURL(values?.file) : ""
                    }
                  >
                    <FileInput
                      type="file"
                      name="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(event) => {
                        setFieldValue("file", event.target.files[0]);
                      }}
                      autoComplete="off"
                    />
                    <IconPlus $visible={values?.file ? "no" : "yes"}>
                      <use href={sprite + "#plus"}></use>
                    </IconPlus>
                  </FileInputContainer>
                  <FormError name="file" touched={touched} errors={errors} />
                </FileWrapper>
              </ImgSexContainer>
            )}
            <FieldContainer>
              {petFormData?.category !== "own" && (
                <WrapperField>
                  <StyledLabel>Location:</StyledLabel>
                  <FieldStyled
                    type="text"
                    name="location"
                    placeholder="Enter location"
                  />
                  <FormError
                    name="location"
                    touched={touched}
                    errors={errors}
                  />
                </WrapperField>
              )}

              {petFormData?.category === "sell" && (
                <WrapperField>
                  <StyledLabel>Price:</StyledLabel>
                  <FieldStyled type="text" name="price" placeholder="Price" />
                  <FormError name="price" touched={touched} errors={errors} />
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
                <FormError name="comments" touched={touched} errors={errors} />
              </WrapperField>
            </FieldContainer>
          </FlexContainer>
          <PetFormButtons
            btnText="Done"
            linkText="Back"
            backLinkLocation="/add-pet/details"
          />
        </FormContainer>
      )}
    </Formik>
  );
};

export default MoreInfo;
