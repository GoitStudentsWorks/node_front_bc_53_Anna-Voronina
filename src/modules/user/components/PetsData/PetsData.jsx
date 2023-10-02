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

export const PetsData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  const user = useSelector(selectUser);
  const isLoading = useSelector(selectLoggedIn);

  const user = useSelector(selectUser);

  const handleClickRemove = () => {
    setIsModalOpen(true);
  };

  const pets = user?.pets;

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <>
      <PetsList>
        {pets?.map((el) => (
          <PetsCardContainer key={el.id}>
            <PetsCardImg src={el.img} alt="default" />
            <ul>
              <PetsCardText>
                <h3>Name: </h3>
                <p>{el.name}</p>
              </PetsCardText>
              <PetsCardText>
                <h3>Date of birth: </h3>
                <p>{el.birth}</p>
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
              onClick={handleClickRemove}
            >
              <PetsCardIcon width="24px" height="24px">
                <use href={Icon + "#trash-2"}></use>
              </PetsCardIcon>
            </button>
          </PetsCardContainer>
        ))}
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)} variant="remove">
            <PetsModalTitle>Delete adverstiment?</PetsModalTitle>
            <PetsModalText>
              Are you sure you want to delete
              <span> “Cute dog looking for a home”</span>? <br />
              You can`t undo this action.
            </PetsModalText>
            <PetsModalBtnContainer>
              <Button
                text="Cancel"
                onClick={() => setIsModalOpen(false)}
                variant="Cancel"
              />
              <Button text="Yes" icon="trash-2" variant="logoutButton" />
            </PetsModalBtnContainer>
          </Modal>
        )}

        <Pagination
          onPageChange={handlePageChange}
          currentPage={page}
          perPage={4}
          totalItems={pets?.length}
          variant={isLoading ? "hidden" : "visible"}
        />
      </PetsList>

      {pets?.length === 0 && <EmptyPetsList />}
    </>
  );
};
