import Button from '@/shared/components/Button/Button';
import { Modal } from '@/shared/components/Modal/Modal';
import { Title } from '../Title/Title';
import { Text, WrapperModalAuth } from './ModalAuth.styled';

export const ModalAuth = () => {
  spf;
  return (
    <Modal>
      <WrapperModalAuth>
        <Title text="Congrats!" />
        <Text>Youre registration is success</Text>
        <Button
          text="Go to Profile"
          icon="pawprint"
          variant="bigButtonSecond"
          iconPosition="right"
        />
      </WrapperModalAuth>
    </Modal>
  );
};
