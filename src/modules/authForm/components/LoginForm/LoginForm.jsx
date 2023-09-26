import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { loginThunk } from '@/redux/auth/authOperations';

import { selectIsSuccess } from '@/redux/global/globalSelectors';

import { toast } from 'react-toastify';

import { Title } from '../Title/Title';

import { usePasswordToggle } from '@/hooks/usePasswordToggle';

import {
  WrapperМessages,
  FieldStyled,
  FormStyled,
  WrapperAbsoluteEye,
  WrapperAbsoluteMessages,
  WrapperButton,
  WrapperField,
  WrapperForm,
} from './LoginForm.styled';
import { FormError } from '../FormError/FormError';
import { TogglePasswordIcon } from '../TogglePasswordVisibility/TogglePasswordVisibility';
import { TextWithRouterLink } from '../TextWithRouterLink/TextWithRouterLink';
import { loginSchema } from '../../validations/loginSchema';
import Button from '@/shared/components/Button/Button';
import { FormFieldIcon } from '../FormFieldIcon/FormFieldIcon';
import { getClassName } from '../../helpers/getClassName';

export const LoginForm = () => {
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle(['password1']);
  const isSuccess = useSelector(selectIsSuccess);

  console.log(`isSuccess:`, isSuccess);

  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    const { email, password } = value;
    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(data => {
        toast.success(
          `${data.token}, Thank you for registering. Welcome to the Flea Nursery. We hope you don't get bitten :)`
        );
      })
      .catch(error => {
        toast.error(error);
      });
    resetForm();
  };

  return (
    <>
      <WrapperForm>
        <Title text="Login" />
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, touched, errors }) => (
            <FormStyled autoComplete="off">
              <WrapperField>
                <WrapperAbsoluteMessages>
                  <FieldStyled
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                    className={getClassName(touched.email, errors.email)}
                  />

                  <FormFieldIcon touched={touched.email} error={errors.email} />

                  <WrapperМessages>
                    <FormError name="email" touched={touched} errors={errors} />
                  </WrapperМessages>
                </WrapperAbsoluteMessages>
                <WrapperAbsoluteMessages>
                  <WrapperAbsoluteEye>
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
                      className={getClassName(touched.password, errors.password)}
                    />
                    <FormFieldIcon
                      touched={touched.password}
                      error={errors.password}
                      right="52px"
                    />
                    <TogglePasswordIcon
                      showPassword={showPasswords.password1}
                      onToggle={() => togglePasswordVisibility('password1')}
                    />
                  </WrapperAbsoluteEye>
                  <WrapperМessages>
                    <FormError name="password" touched={touched} errors={errors} />
                  </WrapperМessages>
                </WrapperAbsoluteMessages>
              </WrapperField>
              <WrapperButton>
                <Button type="submit" text="Login" variant="authButton" />
                <TextWithRouterLink
                  text="Already have an account?  "
                  linkText="Register"
                  linkTo="/register"
                />
              </WrapperButton>
            </FormStyled>
          )}
        </Formik>
      </WrapperForm>
    </>
  );
};
