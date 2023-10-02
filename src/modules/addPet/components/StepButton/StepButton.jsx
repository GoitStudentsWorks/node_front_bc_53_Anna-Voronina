import PropTypes from 'prop-types';
import Button from '../../../../shared/components/Button/Button';

export const StepButton = ({ step, onSubmit, values, disabled }) => {
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
      text={step < 3 ? 'Next' : step === 3 ? 'Done' : ''}
      type="submit"
      icon="paws"
      iconPosition="right"
      variant="bigButtonSecond"
      onClick={handleButtonClick}
      values={values}
      disabled={disabled}
    />
  );
};

StepButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  values: PropTypes.object.isRequired,
};
