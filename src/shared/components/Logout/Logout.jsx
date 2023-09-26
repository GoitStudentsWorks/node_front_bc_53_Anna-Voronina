import PropTypes from "prop-types";
import { useState } from "react";
import { LogoutBtn } from "./Logout.styled.js";
import { LogoutModal } from "../../../modules/modals/components/LogoutModal/LogoutModal.jsx";
import Icons from "../../icons/sprite.svg";

export const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <LogoutBtn onClick={toggleModal} $variant="profile">
        Log Out
        <svg>
          <use href={Icons + "#logout"}> </use>
        </svg>
      </LogoutBtn>
      {isModalOpen && <LogoutModal onClose={toggleModal} />}
    </>
  );
};

Logout.propTypes = {
  variant: PropTypes.string.isRequired,
};
