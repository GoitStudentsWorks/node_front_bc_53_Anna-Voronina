import * as yup from 'yup';
import { emailValidator, passwordValidator } from '@/shared/constants/regexp';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailValidator, 'Please enter a valid email address')
    .test('trim', 'The field must not start or end with spaces', value => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .required('required field')
    .max(16, 'the name must contain a maximum of 16 characters'),
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
    .max(12, 'maximum 12 characters possible')
    .matches(passwordValidator, 'Minimum 1 uppercase letter, 1 lowercase letter and 1 number'),
});
