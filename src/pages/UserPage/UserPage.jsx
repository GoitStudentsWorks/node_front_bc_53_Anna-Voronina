import { useState } from "react";
import { Container } from "../../shared/components/Container/Container";
import { Logout } from "../../modules/user/Logout/Logout";
import { PetsData } from "../../modules/user/PetsData/PetsData";
import { UserData } from "../../modules/user/UserData/UserData";
import { TitleUserPage, UserFormContainer } from "./UserPage.styled";

const UserPage = () => {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing((prevState) => !prevState);
  };

  return (
    <Container>
      <TitleUserPage>My information:</TitleUserPage>
      <UserFormContainer>
        <UserData editing={editing} handleEditClick={handleEditClick} />
        {!editing ? <Logout /> : null}
      </UserFormContainer>

      <PetsData />
    </Container>
  );
};

export default UserPage;
