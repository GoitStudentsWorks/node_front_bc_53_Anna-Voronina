// import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { registerSchema } from '../../validations/registerSchema';
import { usePasswordToggle } from '../../../../hooks/usePasswordToggle';
// import { signUpThunk } from 'redux/auth/authOperations';

import { Button } from '../../../../shared/components/Button/Button';
import { FormError } from '../FormError/FormError';

import { IndicatorPasswordStrenght } from '../IndicatorPasswordStrenght/IndicatorPasswordStrenght';
import { TogglePasswordIcon } from '../TogglePasswordVisibility/TogglePasswordVisibility';
import { ConfirmPasswordIndicator } from '../ConfirmPasswordIndicator/ConfirmPasswordIndicator';

import {
  WrapperМessages,
  FieldStyled,
  FormStyled,
  WrapperButton,
  WrapperField,
  WrapperForm,
  WrapperIcon3,
} from '../LoginForm/LoginForm.styled';
import { Title } from '../Title/Title';
import { TextWithRouterLink } from '../TextWithRouterLink/TextWithRouterLink';
// import { toast } from 'react-toastify';

export const RegisterForm = () => {
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle(['password1', 'password2']);

  // const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (value, { resetForm }) => {
    // const { name, email, password } = value;
    // dispatch(signUpThunk({ name, email, password }))
    //   .unwrap()
    //   .then(data => {
    //     resetForm();
    //     toast.success(
    //       `${data.user.name}, thanks for signing up. Welcome to Money Guard! We are happy to have you on board.`
    //     );
    //   })
    //   .catch(error => {
    //     toast.error(error.message);
    //   });
    resetForm();
  };

  return (
    <WrapperForm>
      <Title text="Registration" />
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <FormStyled autoComplete="off">
            <WrapperField>
              <WrapperIcon3>
                <FieldStyled
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="off"
                  required
                />
                <WrapperМessages>
                  <FormError name="name" touched={touched} errors={errors} />
                </WrapperМessages>
              </WrapperIcon3>
              <WrapperIcon3>
                <FieldStyled
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                />
                <WrapperМessages>
                  <FormError name="email" touched={touched} errors={errors} />
                </WrapperМessages>
              </WrapperIcon3>
              <WrapperIcon3>
                <FieldStyled
                  type={showPasswords.password1 ? 'text' : 'password'}
                  name="password"
                  title="Enter the password more difficult, letter, digit, capital letter."
                  placeholder="Password"
                  required
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />

                <TogglePasswordIcon
                  showPassword={showPasswords.password1}
                  onToggle={() => togglePasswordVisibility('password1')}
                />
                <WrapperМessages>
                  <IndicatorPasswordStrenght values={values} />
                  <FormError name="password" touched={touched} errors={errors} />
                </WrapperМessages>
              </WrapperIcon3>
              <WrapperIcon3>
                <FieldStyled
                  type={showPasswords.password2 ? 'text' : 'password'}
                  name="confirmPassword"
                  title="Enter the password more difficult, letter, digit, capital letter."
                  placeholder="Confirm Password"
                  autoComplete="off"
                  required
                />

                <TogglePasswordIcon
                  showPassword={showPasswords.password2}
                  onToggle={() => togglePasswordVisibility('password2')}
                />

                <WrapperМessages>
                  <ConfirmPasswordIndicator
                    values={values}
                    passwordsMatch={
                      values.password === values.confirmPassword && values.confirmPassword !== ''
                    }
                  />
                  <FormError name="confirmPassword" />
                </WrapperМessages>
              </WrapperIcon3>
            </WrapperField>
            <WrapperButton>
              <Button type="submit" text="register" />
              <TextWithRouterLink
                text="Already have an account?  "
                linkText="Login"
                linkTo="/login"
              />
            </WrapperButton>
          </FormStyled>
        )}
      </Formik>
    </WrapperForm>
  );
};
