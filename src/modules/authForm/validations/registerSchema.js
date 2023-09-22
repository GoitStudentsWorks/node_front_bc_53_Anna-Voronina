import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .test('trim', 'The field must not start or end with spaces', value => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .required('required field')
    .matches(/^[a-zA-Z]+$/, 'the name must contain only letters')
    .min(2, 'the name must contain a minimum of 2 characters')
    .max(16, 'the name must contain a maximum of 16 characters'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .test('trim', 'The field must not start or end with spaces', value => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .required('required field')
    .max(16, 'the name must contain a maximum of 30 characters'),
  password: yup
    .string()
    .test('trim', 'The field must not start or end with spaces', value => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .required('required field')
    .min(6, 'Password must contain at least 6 characters')
    .max(12, 'Password must contain a maximum of 12 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d|.*[!@#$%^&*()_+\-=.<>])[a-zA-Z\d!@#$%^&*()_+\-=.<>]{6,16}$/,
      'Minimum 1 uppercase letter, 1 lowercase letter and 1 number'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});
