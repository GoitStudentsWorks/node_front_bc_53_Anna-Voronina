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
  const notice = useSelector(selectChosenNotice);

  return (
    <Modal onClose={() => setIsModalOpen(false)} variant="petsModal">
      <ModalWrapper key={notice?._id}>
        <TopWrapper>
          <PhotoDiv>
            <CategoryName>{notice?.category}</CategoryName>
            <NoticesInfoImg src={notice?.file} alt="icon" />
          </PhotoDiv>

          <ParamsBox>
            <NoticesInfoTitle>{notice?.title}</NoticesInfoTitle>

            <ParametersList>
              <NoticesInfoParameters>
                Name:
                <ParametersValue>{notice?.name}</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Birthday:
                <ParametersValue>{notice?.date}</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Type:
                <ParametersValue> {notice?.type}</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Place:
                <NavValue
                  href={`https://www.google.com/maps/place/${notice?.location}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {notice?.location}
                </NavValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                The sex:
                <ParametersValue>{notice?.sex}</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Email:
                <NavValue href="mailto:user001@gmail.com" $variant="yellow">
                  {notice?.email}
                </NavValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Phone:
                <NavValue href="tel:+380981234567" $variant="yellow">
                  {notice?.phone}
                </NavValue>
              </NoticesInfoParameters>
            </ParametersList>
          </ParamsBox>
        </TopWrapper>

        <CommentsText>
          <CommentsTextStrong>Comments: </CommentsTextStrong>
          {notice?.comments}
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
