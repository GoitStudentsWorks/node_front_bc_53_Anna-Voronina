import { useSelector } from "react-redux";
import { LoginForm } from "@/modules/authForm/components/LoginForm/LoginForm";
import { Loader } from "@/shared/components/Loader/Loader";
import { selectAuthLoading } from "@/redux/auth/authSelectors";
import { RegisterPageWrapper } from "../RegisterPage/RegisterPage.styled";

const LoginPage = () => {
  const isLoading = useSelector(selectAuthLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <RegisterPageWrapper>
          <LoginForm />
        </RegisterPageWrapper>
      )}
    </>
  );
};

export default LoginPage;
