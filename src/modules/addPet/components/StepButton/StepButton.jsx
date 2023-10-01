import PropTypes from "prop-types";
import Button from "../../../../shared/components/Button/Button";

export const StepButton = ({ step, onSubmit, values }) => {
  const handleButtonClick = () => {
    if (step === 1) {
      onSubmit();
    } else if (step === 2) {
      onSubmit();
    } else if (step === 3) {
      onSubmit();
    }
  };

  return (
    <Button
      text={step < 3 ? "Next" : step === 3 ? "Done" : ""}
      type="button"
      icon="paws"
      iconPosition="right"
      variant="bigButtonSecond"
      onClick={handleButtonClick}
      values={values}
    />
  );
};

StepButton.propTypes = {
  step: PropTypes.number,
  onSubmit: PropTypes.func,
  values: PropTypes.object,
};
