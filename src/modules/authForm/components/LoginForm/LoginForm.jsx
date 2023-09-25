import { Formik } from 'formik';
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
import { IndicatorPasswordStrenght } from '../IndicatorPasswordStrenght/IndicatorPasswordStrenght';
import { TextWithRouterLink } from '../TextWithRouterLink/TextWithRouterLink';
import { loginSchema } from '../../validations/loginSchema';
import Button from '@/shared/components/Button/Button';
import { FormFieldIcon } from '../FormFieldIcon/FormFieldIcon';
import { getClassName } from '../../helpers/getClassName';
import { FIlter } from '../../../filter/components/FIlter';

export const LoginForm = () => {
  const { showPasswords, togglePasswordVisibility } = usePasswordToggle(['password1']);

  // const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    // const {  email, password } = value;
    // dispatch(signUpThunk({  email, password }))
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
    <>
      <FIlter />
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
                    <IndicatorPasswordStrenght values={values} />
                    <FormError name="password" touched={touched} errors={errors} />
                  </WrapperМessages>
                </WrapperAbsoluteMessages>
              </WrapperField>
              <WrapperButton>
                <Button type="submit" text="Login" variant="AuthButton" />
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
