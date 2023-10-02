import PropTypes from "prop-types";
import { toast } from "react-toastify";
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
import { useDispatch } from "react-redux";
import {
  deleteOwnNoticeThunk,
  deletePetThunk,
} from "../../../../redux/notices/noticesOperations";

export const DeleteModal = ({ onClose, title, type, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (type === "own") {
      dispatch(deletePetThunk(id))
        .unwrap()
        .then(() => {
          onClose();
          toast.success("Deleting completed successfully");
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      dispatch(deleteOwnNoticeThunk(id))
        .unwrap()
        .then(() => {
          onClose();
          toast.success("Deleting completed successfully");
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  return (
    <Modal onClose={onClose}>
      <Filling>
        <Title>
          Delete {type === "own" ? "your pet" : "advertisement"}&#63;
        </Title>
        <BlockText>
          <TextStyled>
            Are you sure you want to delete
            <BoldText> “{title}”&#63; </BoldText>
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
            onClick={handleDelete}
          />
        </BlockButton>
      </Filling>
    </Modal>
  );
};

DeleteModal.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};
