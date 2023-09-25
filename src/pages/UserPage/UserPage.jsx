import { useState } from "react";
import { Container } from "../../shared/components/Container/Container";
import { Logout } from "../../shared/components/Logout/Logout";
import Button from "../../shared/components/Button/Button";
import { PetsData } from "../../modules/user/components/PetsData/PetsData";
import { UserData } from "../../modules/user/components/UserData/UserData";
import {
  ContainerUserPage,
  TitleUserInf,
  TitleUserPets,
  UserFormContainer,
  AddBtn,
} from "./UserPage.styled";

const UserPage = () => {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing((prevState) => !prevState);
  };

  return (
    <Container>
      <ContainerUserPage>
        <div>
          <TitleUserInf>My information:</TitleUserInf>
          <UserFormContainer>
            <UserData editing={editing} handleEditClick={handleEditClick} />
            {!editing ? <Logout variant="profile" /> : null}
          </UserFormContainer>
        </div>
        <div>
          <AddBtn to="/add-pet">
            <Button text="Add&nbsp;pet" icon="plus" variant="AddButton" />
          </AddBtn>
          <TitleUserPets>My pets:</TitleUserPets>
          <PetsData />
        </div>
      </ContainerUserPage>
    </Container>
  );
};

export default UserPage;
