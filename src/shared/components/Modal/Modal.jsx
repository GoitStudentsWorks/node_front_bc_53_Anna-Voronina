import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { Backdrop, ModalStyled, IconCloseModal } from "./Modal.styled";
import { useEffect } from "react";
import sprite from "../../icons/sprite.svg";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ children, onClose, variant }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      document.body.style.overflow = "auto";
    }
  };

  const handleCloseModal = () => {
    onClose();
    document.body.style.overflow = "auto";
  };

  return createPortal(
    <Backdrop onClick={handleClickBackdrop}>
      <ModalStyled $variant={variant}>
        <IconCloseModal onClick={handleCloseModal}>
          <use href={sprite + "#cross-small"}></use>
        </IconCloseModal>
        {children}
      </ModalStyled>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
