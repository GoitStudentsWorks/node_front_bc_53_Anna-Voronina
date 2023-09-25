import { useState } from "react";
import { Container } from "../../shared/components/Container/Container";
import { Logout } from "../../shared/components/Logout/Logout";
import { PetsData } from "../../modules/user/components/PetsData/PetsData";
import { UserData } from "../../modules/user/components/UserData/UserData";
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
            {!editing ? <Logout variant="profile" /> : null}
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
