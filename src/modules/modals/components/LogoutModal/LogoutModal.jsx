import PropTypes from "prop-types";
import { Modal } from "../../../../shared/components/Modal/Modal";
import Button from "../../../../shared/components/Button/Button";
import { useNavigate } from "react-router";
import { ModalTitle, BtnContainer, Filling } from "./LogoutModal.styled";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../../../redux/auth/authOperations";
import { toast } from "react-toastify";

export const LogoutModal = ({ onClose, onMenuClose, variant }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const variantCheck = variant === "menu" || variant === "header";

  const handleYesClick = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        if (variantCheck) {
          onMenuClose();
        }
        onClose();
        navigate("/");
      })
      .catch((error) => toast.error(error));
  };

  return (
    <Modal onClose={onClose}>
      <Filling>
        <ModalTitle>Already leaving&#63;</ModalTitle>
        <BtnContainer>
          <Button onClick={onClose} text="Cancel" variant="cancel" />
          <Button
            onClick={handleYesClick}
            text="Yes"
            variant="logoutButton"
            icon="logout"
            iconPosition="right"
            iconVariant="transparent"
          />
        </BtnContainer>
      </Filling>
    </Modal>
  );
};

LogoutModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onMenuClose: PropTypes.func,
  variant: PropTypes.string,
};
