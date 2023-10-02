import { Outlet } from 'react-router-dom';

import { WrapperForm } from './AddPetPage.styled';
import Title from '../../modules/addPet/components/Title/Title';
import ProgressBar from '../../modules/addPet/components/ProgressBar/ProgressBar';

const optionTitles = {
  option1: 'Add Your Pet',
  option2: 'Add Pet For Sale',
  option3: 'Lost/Found Pet',
  option4: 'In Good Hands',
};

const AddPetPage = () => {
  return (
    <>
      <WrapperForm>
        <Title />
        <ProgressBar />
        <Outlet />
      </WrapperForm>
    </>
  );
};

export default AddPetPage;
