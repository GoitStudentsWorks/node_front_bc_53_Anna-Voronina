import PropTypes from "prop-types";
import Button from "../../../../shared/components/Button/Button";

export const StepButton = ({ step, onSubmit, values }) => {
  const handleButtonClick = () => {
    if (step === 1) {
      onSubmit();
    } else if (step === 2) {
      onSubmit();
    }
  };

  return (
    <Button
      text={step === 1 ? "Next" : step === 2 ? "Done" : ""}
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
