// import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectChosenNotice } from "../../../redux/notices/noticesSelectors";
import { Modal } from "../../../shared/components/Modal/Modal";
import {
  CategoryName,
  CommentsText,
  CommentsTextStrong,
  ModalWrapper,
  NoticesInfoImg,
  NoticesInfoParameters,
  NoticesInfoTitle,
  PhotoDiv,
  ParametersList,
  ParametersValue,
  ParamsBox,
  TopWrapper,
  WrapperBtn,
  NavValue,
} from "./ModalProductCart.styled";
import Button from "../../../shared/components/Button/Button";

// Photo
// import card from "../img/Rectangle 24.png";

export const ModalProductCart = ({ setIsModalOpen }) => {
  const {
    category,
    comments,
    date,
    file,
    location,
    name,
    email,
    phone,
    sex,
    title,
    type,
    _id,
  } = useSelector(selectChosenNotice);

  return (
    <Modal onClose={() => setIsModalOpen(false)} variant="petsModal">
      <ModalWrapper key={_id}>
        <TopWrapper>
          <PhotoDiv>
            <CategoryName>{category}</CategoryName>
            <NoticesInfoImg src={file} alt="icon" />
          </PhotoDiv>

          <ParamsBox>
            <NoticesInfoTitle>{title}</NoticesInfoTitle>

            <ParametersList>
              <NoticesInfoParameters>
                Name:
                <ParametersValue>{name}</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Birthday:
                <ParametersValue>{date}</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Type:
                <ParametersValue> {type}</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Place:
                <NavValue
                  href={`https://www.google.com/maps/place/${location}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {location}
                </NavValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                The sex:
                <ParametersValue>{sex}</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Email:
                <NavValue href="mailto:user001@gmail.com" $variant="yellow">
                  {email}
                </NavValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Phone:
                <NavValue href="tel:+380981234567" $variant="yellow">
                  {phone}
                </NavValue>
              </NoticesInfoParameters>
            </ParametersList>
          </ParamsBox>
        </TopWrapper>

        <CommentsText>
          <CommentsTextStrong>Comments: </CommentsTextStrong>
          {comments}
        </CommentsText>

        <WrapperBtn>
          <Button
            text="Add to"
            variant="logoutButton"
            iconVariant="transparent"
            iconPosition="right"
            icon="heart"
          />
          <Button text="Contact" variant="cancel" />
        </WrapperBtn>
      </ModalWrapper>
    </Modal>
  );
};

ModalProductCart.propTypes = {
  setIsModalOpen: PropTypes.func,
};
