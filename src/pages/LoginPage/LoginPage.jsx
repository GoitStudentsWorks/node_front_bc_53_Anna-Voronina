import { LoginForm } from '@/modules/authForm/components/LoginForm/LoginForm';
import { RegisterPageWrapper } from '../RegisterPage/RegisterPage.styled';

const LoginPage = () => {
  return (
    <RegisterPageWrapper>
      <LoginForm />
    </RegisterPageWrapper>
  );
};

export default LoginPage;
