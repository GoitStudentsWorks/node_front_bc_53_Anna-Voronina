import { useFormik } from "formik";
import PropTypes from "prop-types";
import { userValidationSchema } from "../../../shared/utils/validationSchema";
import {
  ProfileForm,
  Avatar,
  SelectedPhoto,
  EditPhoto,
  PhotoSvg,
  CrossPhotoSvg,
  UserLabel,
  UserInput,
  SaveBtn,
} from "./UserForm.styled";
import user from "../images/user.jpg";
import user2x from "../images/user@2x.jpg";
import Icons from "../../../shared/icons/sprite.svg";

export const UserForm = ({ editing, handleEditClick }) => {
  const formik = useFormik({
    initialValues: {
      avatar: "",
      name: "",
      email: "",
      birthday: "",
      phone: "",
      city: "",
    },
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });
  const { avatar, name, email, birthday, phone, city } = formik.values;

  return (
    <>
      <ProfileForm>
        <Avatar htmlFor="avatar">
          {avatar ? (
            <img src={URL.createObjectURL(avatar)} alt="User photo" />
          ) : (
            <img
              srcSet={`${user} 1x, ${user2x} 2x`}
              src="../images/user.jpg"
              alt="default avatar"
            />
          )}
          {editing ? (
            <SelectedPhoto>
              <EditPhoto>
                {!avatar ? (
                  <>
                    <PhotoSvg>
                      <use href={Icons + "#camera"}></use>
                    </PhotoSvg>
                    <p> Edit photo</p>
                  </>
                ) : (
                  <>
                    <div>
                      <PhotoSvg>
                        <use href={Icons + "#check"}></use>
                      </PhotoSvg>
                      <p>Confirm</p>
                    </div>

                    <CrossPhotoSvg>
                      <use href={Icons + "#cross-small"}></use>
                    </CrossPhotoSvg>
                  </>
                )}
              </EditPhoto>
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={(event) => {
                  formik.setFieldValue("avatar", event.target.files[0]);
                }}
              />
            </SelectedPhoto>
          ) : null}

          {formik.touched.avatar && formik.errors.avatar ? (
            <p>{formik.errors.avatar}</p>
          ) : null}
        </Avatar>
        <UserLabel htmlFor="name">
          <p>Name:</p>
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
            <p>{formik.errors.name}</p>
          ) : null}
        </UserLabel>
        <UserLabel htmlFor="email">
          <p>Email:</p>
          <UserInput
            type="email"
            name="email"
            placeholder="anna00@gmail.com"
            value={email}
            onChange={formik.handleChange}
            readOnly={!editing}
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </UserLabel>
        <UserLabel htmlFor="birthday">
          <p>Birthday:</p>
          <UserInput
            type="date"
            name="birthday"
            value={birthday ? birthday : "2000-12-01"}
            onChange={formik.handleChange}
            readOnly={!editing}
          />
          {formik.touched.birthday && formik.errors.birthday ? (
            <p>{formik.errors.birthday}</p>
          ) : null}
        </UserLabel>
        <UserLabel htmlFor="phone">
          <p>Phone:</p>
          <UserInput
            type="tel"
            name="phone"
            placeholder="+38000000000"
            value={phone}
            onChange={formik.handleChange}
            readOnly={!editing}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p>{formik.errors.phone}</p>
          ) : null}
        </UserLabel>
        <UserLabel htmlFor="city">
          <p>City:</p>
          <UserInput
            type="text"
            name="city"
            placeholder="Kyiv"
            value={city}
            onChange={formik.handleChange}
            readOnly={!editing}
          />
          {formik.touched.city && formik.errors.city ? (
            <p>{formik.errors.city}</p>
          ) : null}
        </UserLabel>

        {editing && <SaveBtn onClick={handleEditClick}>Save</SaveBtn>}
      </ProfileForm>
    </>
  );
};

UserForm.propTypes = {
  editing: PropTypes.bool.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};
