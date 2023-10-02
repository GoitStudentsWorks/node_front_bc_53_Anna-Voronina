import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchUserDataThunk } from "../../redux/auth/authOperations";
import { selectIsSuccess } from "../../redux/global/globalSelectors";
import { Container } from "../../shared/components/Container/Container";
import { Logout } from "../../shared/components/Logout/Logout";
import { PetsData } from "../../modules/user/components/PetsData/PetsData";
import { UserData } from "../../modules/user/components/UserData/UserData";
import {
  AddBtn,
  ContainerUserPage,
  TitleUserInf,
  TitleUserPets,
  UserFormContainer,
} from "./UserPage.styled";
import { selectIsSuccess } from "../../redux/global/globalSelectors";
import { ModalAuth } from "../../modules/authForm/components/ModalAuth/ModalAuth";
import Button from "../../shared/components/Button/Button";

const UserPage = () => {
  const [editing, setEditing] = useState(false);
  const isSuccess = useSelector(selectIsSuccess);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchUserDataThunk());
  }, [dispatch]);

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
          <AddBtn to="/add-pet" state={{ from: location }}>
            <Button
              text="Add&nbsp;pet"
              icon="plus"
              iconPosition="right"
              variant="addButton"
            />
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
