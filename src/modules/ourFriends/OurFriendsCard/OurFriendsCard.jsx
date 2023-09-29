import PropTypes from "prop-types";
import { useState } from "react";
import {
  StyledCardWrapper,
  StyledH3,
  StyledImg,
  StyledList,
  StyledP,
  StyledText,
  StyledTittle,
  Wrapper,
} from "./OurFriendsCard.styled";
import { WorkDays } from "../WorkDays/WorkDays";

export const OurFriendsCard = ({
  title,
  imageUrl,
  addressUrl,
  address,
  email,
  phone,
  workDays,
  url,
}) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const handleBtnClick = () => {
    setIsListOpen((prev) => !prev);
  };

  const openDay = workDays?.filter((day) => day.isOpen);

  return (
    <Wrapper>
      <a href={url}>
        <StyledTittle>{title}</StyledTittle>
      </a>
      <StyledCardWrapper>
        <a href={url}>
          <StyledImg src={imageUrl} alt={title} />
        </a>

        <address>
          <ul>
            <StyledList>
              <button>
                <StyledH3>Time:</StyledH3>
                {workDays ? (
                  <WorkDays
                    days={openDay}
                    isActive={isListOpen}
                    toggleActive={() => handleBtnClick()}
                  />
                ) : (
                  <StyledP>day and night</StyledP>
                )}
              </button>
            </StyledList>
            <StyledList>
              <StyledH3>Address:</StyledH3>
              {addressUrl ? (
                <StyledText
                  href={addressUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {address}
                </StyledText>
              ) : (
                <StyledP>website only</StyledP>
              )}
            </StyledList>
            <StyledList>
              <StyledH3>Email:</StyledH3>
              {email ? (
                <StyledText href={`mailto:${email}`}>{email}</StyledText>
              ) : (
                <StyledP>website only</StyledP>
              )}
            </StyledList>
            <StyledList>
              <StyledH3>Phone:</StyledH3>
              {phone ? (
                <StyledText href={`tel:${phone}`}>{phone}</StyledText>
              ) : (
                <StyledP>website only</StyledP>
              )}
            </StyledList>
          </ul>
        </address>
      </StyledCardWrapper>
    </Wrapper>
  );
};

OurFriendsCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  addressUrl: PropTypes.string,
  address: PropTypes.string,
  url: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  workDays: PropTypes.array,
};
