import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import {
  FieldStyled,
  SellForm,
  StyledLabel,
  WrapperField,
} from "./PersonalDetails.styled";

import { FormError } from "../../../authForm/components/FormError/FormError";
import { detailsSchema, sellSchema } from "../../validation/addPetSchema";
import { addPetFormData } from "@/redux/notices/noticesSlice";
import { PetFormButtons } from "../PetFormButtons/PetFormButtons";
import { selectPetFormData } from "@/redux/notices/noticesSelectors";
import { updateStep } from "../../../../redux/notices/noticesSlice";

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const petFormData = useSelector(selectPetFormData);

  const initialValues = {
    title: petFormData?.title ? petFormData?.title : "",
    name: petFormData?.name ? petFormData?.name : "",
    date: petFormData?.date ? petFormData?.date : "",
    type: petFormData?.type ? petFormData?.type : "",
  };

  const handleSubmit = (values) => {
    dispatch(addPetFormData(values));
    dispatch(updateStep(3));
    navigate("/add-pet/more-info");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={
        petFormData?.category !== "own" ? sellSchema : detailsSchema
      }
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, touched, errors }) => (
        <SellForm>
          {petFormData?.category !== "own" && (
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
          )}
          <WrapperField>
            <StyledLabel>Pet&apos;s name:</StyledLabel>
            <FieldStyled
              type="text"
              name="name"
              placeholder="Type name pet"
              required
            />
            <FormError name="name" touched={touched} errors={errors} />
          </WrapperField>
          <WrapperField>
            <StyledLabel>Date of Birth:</StyledLabel>
            <FieldStyled
              type="text"
              name="date"
              placeholder="Type date of birth"
              required
            />
            <FormError name="date" touched={touched} errors={errors} />
          </WrapperField>
          <WrapperField>
            <StyledLabel>Type of Pet:</StyledLabel>
            <FieldStyled
              type="text"
              name="type"
              placeholder="Type of pet"
              required
            />
            <FormError name="type" touched={touched} errors={errors} />
            <FormError name="choice" errors={errors} touched={touched} />
          </WrapperField>

          <PetFormButtons
            btnText="Next"
            linkText="Back"
            backLinkLocation="/add-pet"
          />
        </SellForm>
      )}
    </Formik>
  );
};

export default PersonalDetails;
