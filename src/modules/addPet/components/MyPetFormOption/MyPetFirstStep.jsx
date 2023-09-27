import { Field } from "formik";

const MyPetFirstStep = (formikProps) => {
  const { errors, touched } = formikProps;
  return (
    <>
      <div>
        <label>Name:</label>
        <Field type="text" name="name" placeholder="Type name pet" required />
        {touched.name && errors.name && (
          <div className="error">{errors.name}</div>
        )}
      </div>
      <div>
        <label>Date of Birth:</label>
        <Field
          type="text"
          name="date"
          placeholder="Type date of birth"
          required
        />
        {touched.date && errors.date && (
          <div className="error">{errors.date}</div>
        )}
      </div>
      <div>
        <label>Type of Pet:</label>
        <Field type="text" name="type" placeholder="Type of pet" required />
        {touched.type && errors.type && (
          <div className="error">{errors.type}</div>
        )}
      </div>
    </>
  );
};

export default MyPetFirstStep;
