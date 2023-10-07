import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { updateChosenNotice } from "@/redux/notices/noticesSlice";
import { Backdrop, ModalStyled, ButtonCloseModal } from "./Modal.styled";
import sprite from "../../icons/sprite.svg";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ children, onClose, variant }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
        document.body.style.overflow = "auto";
        if (variant === "petsModal") {
          dispatch(updateChosenNotice());
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, onClose, variant]);

  const handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      document.body.style.overflow = "auto";
      if (variant === "petsModal") {
        dispatch(updateChosenNotice());
      }
    }
  };

  const handleCloseModal = () => {
    onClose();
    document.body.style.overflow = "auto";
    if (variant === "petsModal") {
      dispatch(updateChosenNotice());
    }
  };

  return createPortal(
    <Backdrop onClick={handleClickBackdrop}>
      <ModalStyled $variant={variant}>
        <ButtonCloseModal
          $variant={variant}
          aria-label="close modal"
          onClick={handleCloseModal}
        >
          <svg width={24} height={24}>
            <use href={sprite + "#cross-small"}></use>
          </svg>
        </ButtonCloseModal>
        {children}
      </ModalStyled>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.string,
};
