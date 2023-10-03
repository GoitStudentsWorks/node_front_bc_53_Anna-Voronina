import pets from "../../images/pets.png";
import pets1x from "../../images/pets@1x.webp";
import pets2x from "../../images/pets@2x.webp";
import { EmptyPetsImg, EmptyPetsText } from "./EmptyPetsList.styled";

export const EmptyPetsList = () => {
  return (
    <>
      <EmptyPetsImg
        srcSet={`${pets1x} 1x, ${pets2x} 2x`}
        src={pets}
        alt="Empty pets list"
      />
      <EmptyPetsText>
        You have not added your pets, if you want to add them, click on the
        button &#34;Add pet&#34;
      </EmptyPetsText>
    </>
  );
};
