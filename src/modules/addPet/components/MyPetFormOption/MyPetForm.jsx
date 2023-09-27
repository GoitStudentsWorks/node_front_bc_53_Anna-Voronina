import { useState, useRef } from "react";
import MyPetFirstStep from "./MyPetFirstStep";
import MyPetSecondStep from "./MyPetSecondStep";
import { myPetSchema } from "../../validation/myPetSchema";
import { Form, Formik } from "formik";
import { StepButton } from "../StepButton/StepButton";

const MyPetFormOption = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    type: "",
    file: null,
    comments: "",
  });

  const fileInputRef = useRef(null);

  const handleSubmit = (values) => {
    if (step === 2) {
      console.log("Data send:", values);
    } else if (step === 1) {
      setFormData({
        ...formData,
        ...values,
      });
    }

    setStep((step) => step + 1);
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ ...formData }}
        onSubmit={handleSubmit}
        validationSchema={myPetSchema}
      >
        {({ values, errors, touched }) => (
          <Form encType="multipart/form-data">
            {step === 1 ? (
              <MyPetFirstStep errors={errors} touched={touched} />
            ) : (
              <MyPetSecondStep
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
              />
            )}
            <div>
              <button
                type="button"
                onClick={() => setStep((prevStep) => prevStep - 1)}
              >
                Back
              </button>
              <StepButton step={step} onSubmit={() => handleSubmit(values)} />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MyPetFormOption;
