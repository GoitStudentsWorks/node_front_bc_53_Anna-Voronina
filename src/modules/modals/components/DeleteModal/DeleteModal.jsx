import PropTypes from "prop-types";
import { Modal } from "../../../../shared/components/Modal/Modal";
import Button from "../../../../shared/components/Button/Button";
import {
  Filling,
  BlockText,
  Title,
  TextStyled,
  BoldText,
  BlockButton,
} from "./DeleteModal.styled";

export const DeleteModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Filling>
        <Title>Delete adverstiment&#63;</Title>
        <BlockText>
          <TextStyled>
            Are you sure you want to delete
            <BoldText> “Cute dog looking for a home”&#63; </BoldText>
          </TextStyled>
          <TextStyled>You can`t undo this action.</TextStyled>
        </BlockText>

        <BlockButton>
          <Button onClick={onClose} text="Cancel" variant="cancel" />
          <Button
            text="Yes"
            variant="logoutButton"
            icon="trash-2"
            iconPosition="right"
            iconVariant="transparent"
          />
        </BlockButton>
      </Filling>
    </Modal>
  );
};

DeleteModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
