import { useState } from "react";
import { Modal } from "../../../../shared/components/Modal/Modal";
import Button from "../../../../shared/components/Button/Button";
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
import user from "../../images/user.jpg";

export const PetsData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickRemove = () => {
    setIsModalOpen(true);
  };

  const pets = [
    {
      id: 123456789,
      img: user,
      name: "Jack",
      birth: "22.04.2018",
      type: "Persian cat",
      comments:
        "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal and affectionate lap cat.",
    },
    {
      id: 987654321,
      img: user,
      name: "John",
      birth: "20.02.2016",
      type: "Dog",
      comments:
        "Jack is a handsome Basenji with short, shiny red fur and perky ears. He's an active and intelligent dog that loves to explore and play. Jack is independent and strong-willed, but also affectionate and loyal to his family. He's a curious and energetic companion that brings joy and adventure to his family's life.",
    },
  ];

  return (
    <PetsList>
      {pets.map((el) => (
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
    </PetsList>
  );
};
