import PropTypes from "prop-types";

export const StepButton = ({ step, onSubmit, values }) => {
  const handleButtonClick = () => {
    if (step === 1) {
      onSubmit();
    } else if (step === 2) {
      onSubmit();
    }
  };

  return (
    <button type="button" onClick={handleButtonClick} values={values}>
      {step === 1 ? "Next" : step === 2 ? "Done" : ""}
    </button>
  );
};

StepButton.propTypes = {
  step: PropTypes.number,
  onSubmit: PropTypes.func,
  values: PropTypes.object,
};
