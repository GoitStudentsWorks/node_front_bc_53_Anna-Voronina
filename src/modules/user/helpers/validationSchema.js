import * as Yup from "yup";
import {
  nameValidator,
  emailValidator,
  phoneValidator,
  birthdayValidator,
  cityValidator,
} from "../../../shared/constants/regexp";

export const userValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("The 'Name' field is required")
    .matches(nameValidator, "Name must contain only letters and spaces"),

  email: Yup.string()
    .matches(emailValidator, "Invalid email format")
    .required("The field 'Email' is required"),

  birthday: Yup.string()
    .required("Date of birth is required")
    .matches(
      birthdayValidator,
      "Date of birth must be in the format DD-MM-YYYY"
    ),

  phone: Yup.string()
    .required("The 'Phone' field is required")
    .matches(phoneValidator, "Incorrect phone format. Example: +380671234567"),

  city: Yup.string()
    .matches(
      cityValidator,
      "Incorrect city format. Example: Brovary, Kyiv, Akhtyrka, Sumy"
    )
    .required("The 'City' field is required"),
});

export const userAvatarValidationSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .required("Download avatar is required")
    .test("fileSize", "Avatar size must not exceed 3 MB", (value) => {
      if (!value) return true;
      return value.size <= 3000000;
    }),
});
