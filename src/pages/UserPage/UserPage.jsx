import { useState } from 'react';
import { Container } from '../../shared/components/Container/Container';
import { Logout } from '../../shared/components/Logout/Logout';
import { PetsData } from '../../modules/user/components/PetsData/PetsData';
import { UserData } from '../../modules/user/components/UserData/UserData';
import {
  AddBtn,
  ContainerUserPage,
  TitleUserInf,
  TitleUserPets,
  UserFormContainer,
} from './UserPage.styled';
import { useSelector } from 'react-redux';
import { selectIsSuccess } from '../../redux/global/globalSelectors';
import { ModalAuth } from '../../modules/authForm/components/ModalAuth/ModalAuth';
import Button from '../../shared/components/Button/Button';

const UserPage = () => {
  const [editing, setEditing] = useState(false);
  const isSuccess = useSelector(selectIsSuccess);
  console.log(`isSuccess:`, isSuccess);

  const handleEditClick = () => {
    setEditing(prevState => !prevState);
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
      {isSuccess && <ModalAuth />}
    </Container>
  );
};

export default UserPage;
