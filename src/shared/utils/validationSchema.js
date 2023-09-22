import * as Yup from "yup";

const PHONE_REGEXP = /^\+380\d{9}$/;

const EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const userValidationSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .required("Download avatar is required")
    .test("fileSize", "Avatar size must not exceed 3 MB", (value) => {
      if (!value) return true;
      return value.size <= 3000000;
    }),

  name: Yup.string()
    .required("The 'Name' field is required")
    .matches(/^[a-zA-Z]{2,16}$/, "Name must contain only letters and spaces"),

  email: Yup.string()
    .matches(EMAIL_REGEXP, "Invalid email format")
    .required("The field 'Email' is required"),

  birthday: Yup.string()
    .required("Date of birth is required")
    .matches(
      /^(\d{2}-\d{2}-\d{4})$/,
      "Date of birth must be in the format DD-MM-YYYY"
    ),

  phone: Yup.string()
    .required("The 'Phone' field is required")
    .matches(PHONE_REGEXP, "Incorrect phone format. Example: +380671234567"),

  city: Yup.string().matches(
    /^[A-Za-z\s,]+$/,
    "Incorrect city format. Example: Brovary, Kyiv, Akhtyrka, Sumy"
  ),
});
