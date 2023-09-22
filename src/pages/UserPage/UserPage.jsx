import { useState } from "react";
import { Container } from "../../shared/components/Container/Container";
import { Logout } from "../../modules/user/Logout/Logout";
import { PetsData } from "../../modules/user/PetsData/PetsData";
import { UserData } from "../../modules/user/UserData/UserData";
import {
  ContainerUserPage,
  TitleUserPage,
  UserFormContainer,
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
          <TitleUserPage>My information:</TitleUserPage>
          <UserFormContainer>
            <UserData editing={editing} handleEditClick={handleEditClick} />
            {!editing ? <Logout /> : null}
          </UserFormContainer>
        </div>
        <div>
          <TitleUserPage>My pets:</TitleUserPage>
          <PetsData />
        </div>
      </ContainerUserPage>
    </Container>
  );
};

export default UserPage;
