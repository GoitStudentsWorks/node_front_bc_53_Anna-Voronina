import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { parse, format } from "date-fns";
import PropTypes from "prop-types";
import { selectUser } from "../../../../redux/auth/authSelectors";
import { userValidationSchema } from "../../helpers/validationSchema";
import { updateUserDataThunk } from "../../../../redux/auth/authOperations";
import Button from "../../../../shared/components/Button/Button";
import {
  FormContainer,
  FormTitle,
  FormValidation,
  ProfileForm,
  UserInput,
  UserLabel,
} from "./FormDataUser.styled";

export const FormDataUser = ({ editing, handleEditClick }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      email: user?.email || "",
      birthday: "",
      phone: user?.phone || "",
      city: user?.city || "",
    },
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      const newValues = {
        ...values,
        birthday: values.birthday
          ? values.birthday.split("-").reverse().join("-")
          : "",
      };

      dispatch(updateUserDataThunk(newValues))
        .unwrap()
        .then(() => {
          handleEditClick();
          toast.success("Form updated successfully");
        })
        .catch((error) => {
          toast.error(error);
        });
    },
  });
  const { name, email, birthday, phone, city } = formik.values;

  let formattedDate = "";
  if (editing) {
    formattedDate = birthday;
  } else if (user?.birthday) {
    formattedDate = format(
      parse(user?.birthday, "dd-MM-yyyy", new Date()),
      "yyyy-MM-dd"
    );
  }

  console.log(user);
  console.log("Phone:", formik.values.phone);
  console.log("City:", formik.values.city);
  console.log(formik.values);

  return (
    <>
      <ProfileForm onSubmit={formik.handleSubmit}>
        <FormContainer>
          <UserLabel htmlFor="name">
            <FormTitle>Name:</FormTitle>
            <UserInput
              type="text"
              name="name"
              placeholder="Anna"
              autoComplete="off"
              value={name}
              onChange={formik.handleChange}
              readOnly={!editing}
            />
            {formik.touched.name && formik.errors.name ? (
              <FormValidation>{formik.errors.name}</FormValidation>
            ) : null}
          </UserLabel>
          <UserLabel htmlFor="email">
            <FormTitle>Email:</FormTitle>
            <UserInput
              type="email"
              name="email"
              placeholder="anna00@gmail.com"
              value={email}
              onChange={formik.handleChange}
              readOnly={!editing}
            />
            {formik.touched.email && formik.errors.email ? (
              <FormValidation>{formik.errors.email}</FormValidation>
            ) : null}
          </UserLabel>
          <UserLabel htmlFor="birthday">
            <FormTitle>Birthday:</FormTitle>
            <UserInput
              type="date"
              name="birthday"
              value={formattedDate}
              onChange={formik.handleChange}
              readOnly={!editing}
            />
            {formik.touched.birthday && formik.errors.birthday ? (
              <FormValidation>{formik.errors.birthday}</FormValidation>
            ) : null}
          </UserLabel>
          <UserLabel htmlFor="phone">
            <FormTitle>Phone:</FormTitle>
            <UserInput
              type="tel"
              name="phone"
              placeholder="+38000000000"
              value={phone}
              onChange={formik.handleChange}
              readOnly={!editing}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <FormValidation>{formik.errors.phone}</FormValidation>
            ) : null}
          </UserLabel>
          <UserLabel htmlFor="city">
            <FormTitle>City:</FormTitle>
            <UserInput
              type="text"
              name="city"
              placeholder="Kyiv"
              value={city}
              onChange={formik.handleChange}
              readOnly={!editing}
            />
            {formik.touched.city && formik.errors.city ? (
              <FormValidation>{formik.errors.city}</FormValidation>
            ) : null}
          </UserLabel>
        </FormContainer>

        {editing && <Button text="Save" type="submit" variant="Save" />}
      </ProfileForm>
    </>
  );
};

FormDataUser.propTypes = {
  editing: PropTypes.bool.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};
