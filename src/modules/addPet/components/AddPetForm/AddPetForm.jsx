import { Form, Formik } from "formik";
import { useState } from "react";
import { useRef } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import Title from "../Title/Title";
import { BtnWrapper, WrapperForm } from "./AddPetForm.styled";
import ChooseOption from "../ChooseOption/ChooseOption";
import { StepButton } from "../StepButton/StepButton";
import Button from "../../../../shared/components/Button/Button";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import MoreInfo from "../MoreInfo/MoreInfo";
import { addPetSchema } from "../../validation/addPetSchema";

const optionTitles = {
  option1: "Add Your Pet",
  option2: "Add Pet For Sale",
  option3: "Lost/Found Pet",
  option4: "In Good Hands",
};

const AddPetForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    choice: "",
    title: "",
    name: "",
    date: "",
    type: "",
    sex: "",
    location: "",
    price: "",
    file: null,
    comments: "",
  });

  const fileInputRef = useRef(null);

  const handleSubmit = (values) => {
    if (step === 3) {
      console.log("Data send:", values);
    } else if (step === 1 || step === 2) {
      setFormData({
        ...formData,
        ...values,
      });
    }
    setStep((prevStep) => prevStep + 1);
  };

  // обираємо опцію в радіо
  const handleOptionChange = (selectedOption) => {
    setFormData({
      ...formData,
      choice: selectedOption,
    });
  };

  return (
    <WrapperForm step={step}>
      <Title step={step} text={optionTitles[formData.choice]} />
      <ProgressBar step={step} />
      <Formik
        enableReinitialize
        initialValues={{ ...formData }}
        onSubmit={handleSubmit}
        validationSchema={addPetSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form encType="multipart/form-data">
            {step === 1 ? (
              <ChooseOption
                errors={errors}
                touched={touched}
                selectedOption={formData.choice}
                handleOptionChange={handleOptionChange}
              />
            ) : step === 2 ? (
              <PersonalDetails
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                touched={touched}
              />
            ) : (
              <MoreInfo
                errors={errors}
                touched={touched}
                fileInputRef={fileInputRef}
                handleFileChange={(e) => {
                  const file = e.target.files[0];
                  setFormData({
                    ...formData,
                    file: file,
                  });
                }}
                formData={formData}
                imageUrl={formData.file && URL.createObjectURL(formData.file)}
              />
            )}
            <BtnWrapper>
              <StepButton step={step} onSubmit={() => handleSubmit(values)} />
              {step === 1 ? (
                <Button
                  variant="cancelBtnAddPet"
                  text="Cancel"
                  type="button"
                  onClick={() => {
                    window.history.back();
                  }}
                />
              ) : (
                <Button
                  variant="cancelBtnAddPet"
                  text="Back"
                  type="button"
                  onClick={() => setStep((prevStep) => prevStep - 1)}
                />
              )}
            </BtnWrapper>
          </Form>
        )}
      </Formik>
    </WrapperForm>
  );
};

export default AddPetForm;
