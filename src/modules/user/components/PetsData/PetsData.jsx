import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectLoggedIn,
  selectUser,
} from "../../../../redux/auth/authSelectors";
import { Modal } from "../../../../shared/components/Modal/Modal";
import Button from "../../../../shared/components/Button/Button";
import { EmptyPetsList } from "../EmptyPetsList/EmptyPetsList";
import { Pagination } from "@/shared/components/Pagination/Pagination";
import {
  PetsList,
  PetsCardContainer,
  PetsCardText,
  PetsCardImg,
  PetsCardIcon,
  PetsModalTitle,
  PetsModalText,
  PetsModalBtnContainer,
} from "./PetsData.styled";
import Icon from "../../../../shared/icons/sprite.svg";
import { DeleteModal } from "../../../modals/components/DeleteModal/DeleteModal";

export const PetsData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedPetName, setSelectedPetName] = useState("");
  const [selectedPetId, setSelectedPetId] = useState("");

  const user = useSelector(selectUser);
  const isLoading = useSelector(selectLoggedIn);

  const handleModalOpen = ({ id, name }) => {
    setIsModalOpen((prev) => !prev);
    setSelectedPetName(name);
    setSelectedPetId(id);
  };

  const handleModalClose = () => {
    setIsModalOpen((prev) => !prev);
  };

  const pets = user?.pets;

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <>
      <PetsList>
        {pets?.map((el) => (
          <PetsCardContainer key={el._id}>
            <PetsCardImg src={el.file} alt="default" />
            <ul>
              <PetsCardText>
                <h3>Name: </h3>
                <p>{el.name}</p>
              </PetsCardText>
              <PetsCardText>
                <h3>Date of birth: </h3>
                <p>{el.date}</p>
              </PetsCardText>
              <PetsCardText>
                <h3>Type: </h3>
                <p>{el.type}</p>
              </PetsCardText>
              <PetsCardText>
                <h3> Comments: </h3>
                <p>{el.comments}</p>
              </PetsCardText>
            </ul>
            <button
              type="button"
              aria-label="Remove the card"
              onClick={() => handleModalOpen({ name: el.name, id: el._id })}
            >
              <PetsCardIcon width="24px" height="24px">
                <use href={Icon + "#trash-2"}></use>
              </PetsCardIcon>
            </button>
          </PetsCardContainer>
        ))}
      </PetsList>

      {isModalOpen && (
        <DeleteModal
          onClose={handleModalClose}
          type="own"
          title={selectedPetName}
          id={selectedPetId}
        />
      )}

      <Pagination
        onPageChange={handlePageChange}
        currentPage={page}
        perPage={4}
        totalItems={pets?.length}
        variant={isLoading ? "hidden" : "visible"}
      />

      {pets?.length === 0 && <EmptyPetsList />}
    </>
  );
};
