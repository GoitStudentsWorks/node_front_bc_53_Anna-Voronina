import Button from '@/shared/components/Button/Button';
import { CheckButton } from '../CheckButton/CheckButton';
import { FIlter } from '../Filter/Filter';

export const NoticesFilters = () => {
  return (
    <div>
      <CheckButton />
      <FIlter />
      <CheckButton />
      <Button
        variant="addPet"
        text="Add Pet"
        icon="plus"
        iconVariant="transparent"
        iconPosition="right"
      />
    </div>
  );
};
