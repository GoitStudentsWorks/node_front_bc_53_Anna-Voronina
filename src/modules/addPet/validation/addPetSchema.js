import * as yup from "yup";
import { nameValidator, cityValidator } from "@/shared/constants/regexp";

export const categorySchema = yup.object().shape({
  category: yup.string().required("Choose one of the options"),
});

export const sellSchema = yup.object().shape({
  title: yup
    .string()
    .test("trim", (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .min(8, "the name must contain a minimum of 8 characters")
    .max(50, "the name must contain a maximum of 20 characters")
    .required("required field"),
  name: yup
    .string()
    .test("trim", "The field must not start or end with spaces", (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .required("required field")
    .matches(nameValidator, "the name must contain only letters")
    .min(2, "the name must contain a minimum of 2 characters")
    .max(30, "the name must contain a maximum of 30 characters"),
  date: yup
    .date()
    .required("required field")
    .test("is-in-the-past", "Date must be current or in the past", (value) => {
      if (!value) return true;
      const inputDate = new Date(value);
      const currentDate = new Date();
      return inputDate <= currentDate;
    }),
  type: yup
    .string()
    .test("trim", "The field must not start or end with spaces", (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .required("required field")
    .min(2, "the name must contain a minimum of 2 characters")
    .max(50, "the name must contain a maximum of 50 characters"),
});

export const detailsSchema = yup.object().shape({
  name: yup
    .string()
    .test("trim", (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .required("required field")
    .matches(nameValidator, "the name must contain only letters")
    .min(2, "the name must contain a minimum of 2 characters")
    .max(30, "the name must contain a maximum of 30 characters"),
  date: yup
    .date()
    .required("required field")
    .test("is-in-the-past", "Date must be current or in the past", (value) => {
      if (!value) return true;
      const inputDate = new Date(value);
      const currentDate = new Date();
      return inputDate <= currentDate;
    }),
  type: yup
    .string()
    .test("trim", (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .required("required field")
    .min(2, "the name must contain a minimum of 2 characters")
    .max(50, "the name must contain a maximum of 50 characters"),
});

export const moreInfoOwnSchema = yup.object().shape({
  file: yup
    .mixed()
    .test("fileSize", "The file size must not exceed 3 MB", (value) => {
      return value && value.size <= 3 * 1024 * 1024;
    })
    .test("fileType", "Available image formats: JPG, JPEG, PNG", (value) => {
      return (
        value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
      );
    })
    .required("Add a photo"),
  comments: yup
    .string()
    .test("trim", (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .max(120, "the name must contain a maximum of 120 characters"),
});

export const moreInfoSellSchema = yup.object().shape({
  sex: yup.string().required("Choose one of the options"),
  location: yup
    .string()
    .matches(
      cityValidator,
      "Incorrect city format. Example: Brovary, Kyiv, Akhtyrka, Sumy"
    )
    .required("Location field is required"),
  file: yup
    .mixed()
    .test("fileSize", "The file size must not exceed 3 MB", (value) => {
      return value && value.size <= 3 * 1024 * 1024;
    })
    .test("fileType", "Available image formats: JPG, JPEG, PNG", (value) => {
      return (
        value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
      );
    })
    .required("Add a photo"),
  price: yup.number().required("required field").positive().min(1),
  comments: yup
    .string()
    .test("trim", (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .max(120, "the name must contain a maximum of 120 characters"),
});

export const notForSellSchema = yup.object().shape({
  sex: yup.string().required("Choose one of the options"),
  location: yup
    .string()
    .matches(
      cityValidator,
      "Incorrect city format. Example: Brovary, Kyiv, Akhtyrka, Sumy"
    )
    .required("Location field is required"),
  file: yup
    .mixed()
    .test("fileSize", "The file size must not exceed 3 MB", (value) => {
      return value && value.size <= 3 * 1024 * 1024;
    })
    .test("fileType", "Available image formats: JPG, JPEG, PNG", (value) => {
      return (
        value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
      );
    })
    .required("Add a photo"),
  comments: yup
    .string()
    .test("trim", (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .max(120, "the name must contain a maximum of 120 characters"),
});
