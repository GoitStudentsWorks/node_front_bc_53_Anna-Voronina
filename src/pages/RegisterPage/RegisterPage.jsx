import { useSelector } from "react-redux";
import { RegisterForm } from "../../modules/authForm/components/RegisterForm/RegisterForm";
import { selectAuthLoading } from "@/redux/auth/authSelectors";

import { RegisterPageWrapper } from "./RegisterPage.styled";
import { Loader } from "@/shared/components/Loader/Loader";

const RegisterPage = () => {
  const isLoading = useSelector(selectAuthLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <RegisterPageWrapper>
          <RegisterForm />
        </RegisterPageWrapper>
      )}
    </>
  );
};

export default RegisterPage;
