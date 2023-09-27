import PropTypes from "prop-types";
import { Field } from "formik";

const MyPetSecondStep = ({
  errors,
  touched,
  fileInputRef,
  handleFileChange,
}) => {
  return (
    <>
      <div>
        <label>Upload File:</label>
        <input
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
      </div>
      <div>
        <label>Comments:</label>
        <Field
          type="text"
          name="comments"
          placeholder="Comments"
          autoComplete="off"
        />
      </div>
    </>
  );
};

MyPetSecondStep.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  fileInputRef: PropTypes.object.isRequired,
  handleFileChange: PropTypes.func.isRequired,
};

export default MyPetSecondStep;
