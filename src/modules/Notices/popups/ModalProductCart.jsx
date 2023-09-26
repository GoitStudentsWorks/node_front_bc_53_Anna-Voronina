// import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { Modal } from "../../../shared/components/Modal/Modal";
import {
  BottomContent,
  CategoryName,
  CommentsText,
  CommentsTextStrong,
  ModalWrapper,
  NoticesInfoImg,
  NoticesInfoParameters,
  NoticesInfoTitle,
  ParametersList,
  ParametersValue,
  ParamsBox,
  TopWrapper,
  WrapperBtn,
} from "./ModalProductCart.styled";
import Button from "../../../shared/components/Button/Button";

// Photo
import card from "../img/Rectangle 24.png";

export const ModalProductCart = ({ setIsModalOpen }) => {
  return (
    <Modal onClose={() => setIsModalOpen(false)}>
      <ModalWrapper>
        <TopWrapper>
          <CategoryName> Test</CategoryName>
          <NoticesInfoImg src={card} alt="icon" />

          <ParamsBox>
            <NoticesInfoTitle>Сute dog looking for a home</NoticesInfoTitle>

            <ParametersList>
              <NoticesInfoParameters>
                Name:
                <ParametersValue> Rich</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Birthday:
                <ParametersValue> 21.01.2020</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Type:
                <ParametersValue> Pomeranian</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Place:
                <ParametersValue> Lviv</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                The sex:
                <ParametersValue> male</ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Email:
                <ParametersValue $variant="yellow">
                  user001@gmail.com
                </ParametersValue>
              </NoticesInfoParameters>
              <NoticesInfoParameters>
                Phone:
                <ParametersValue $variant="yellow">
                  {" "}
                  +380981234567
                </ParametersValue>
              </NoticesInfoParameters>
            </ParametersList>
          </ParamsBox>
        </TopWrapper>
        <BottomContent>
          <CommentsText>
            <CommentsTextStrong>Comments: </CommentsTextStrong>
            Rich would be the perfect addition to an active family that loves to
            play and go on walks. I bet he would love having a doggy playmate
            too!
          </CommentsText>

          <WrapperBtn>
            <Button
              text="Add to"
              variant="mediumButtonFirst"
              iconVariant="transparent"
              iconPosition="right"
              icon="heart"
            />
            <Button text="Contact" variant="mediumButtonSecond" />
          </WrapperBtn>
        </BottomContent>
      </ModalWrapper>
    </Modal>
  );
};

ModalProductCart.propTypes = {
  setIsModalOpen: PropTypes.func,
};
