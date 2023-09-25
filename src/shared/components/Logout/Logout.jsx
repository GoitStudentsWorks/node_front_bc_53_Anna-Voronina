import PropTypes from "prop-types";
import { useState } from "react";
import { LogoutBtn } from "./Logout.styled.js";
import { Modal } from "../Modal/Modal.jsx";
import Button from "../Button/Button.jsx";
import Icons from "../../icons/sprite.svg";

export const Logout = ({ variant, type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickLogout = () => {
    setIsModalOpen(true);
  };

  const handleYesClick = () => {
    setIsModalOpen(false);
    window.location.href = "/";
  };

  return (
    <>
      <LogoutBtn onClick={handleClickLogout} $variant={variant} $type={type}>
        Log out
        <svg>
          <use href={Icons + "#logout"}> </use>
        </svg>
      </LogoutBtn>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} variant="logout">
          <h3>Already leaving?</h3>
          <div>
            <Button
              text="Cancel"
              onClick={() => setIsModalOpen(false)}
              variant="Cancel"
            />
            <Button
              text="Yes"
              onClick={handleYesClick}
              icon="logout"
              variant="logoutButton"
            />
          </div>
        </Modal>
      )}
    </>
  );
};

Logout.propTypes = {
  variant: PropTypes.string.isRequired,
  type: PropTypes.string,
};
