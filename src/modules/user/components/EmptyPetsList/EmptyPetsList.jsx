import pets from "../../images/pets.png";
import { EmptyPetsImg, EmptyPetsText } from "./EmptyPetsList.styled";

export const EmptyPetsList = () => {
  return (
    <>
      <EmptyPetsImg src={pets} alt="Empty pets list" />
      <EmptyPetsText>
        You have not added your pets, if you want to add them, click on the
        button &#34;Add pet&#34;
      </EmptyPetsText>
    </>
  );
};
