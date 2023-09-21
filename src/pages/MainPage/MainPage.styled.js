import styled from "styled-components";
import bcgMob from "../../shared/assets/images/background/bg_mob@1x.png";
import bcgRetinaMob from "../../shared/assets/images/background/bg_mob@2x.png";
import bcgTab from "../../shared/assets/images/background/bg_tab@1x.png";
import bcgTabRetina from "../../shared/assets/images/background/bg_tab@2x.png";
import bcgDesc from "../../shared/assets/images/background/bg_desc@1x.png";
import bcgDescRetina from "../../shared/assets/images/background/bg_desc@2x.png";

export const Wrapper = styled.div`
  max-width: 320px;

  outline: 1px solid red;

  background-image: url(${bcgMob});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -90px;
  background-position-x: 3px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bcgRetinaMob});
  }

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    background-image: url(${bcgTab});
    background-position-y: -140px;
    background-position-x: 10px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bcgTabRetina});
    }
  }
  @media only screen and (min-width: 1280px) {
    min-width: 1280px;
    display: flex;
    align-items: center;
    background-image: url(${bcgDesc});
    background-position-y: -140px;
    background-position-x: 10px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bcgDescRetina});
    }
  }
`;

export const StyledPicture = styled.picture``;

export const StyledTittle = styled.h1`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 44px;

  @media only screen and (min-width: 768px) {
    margin-left: 32px;
    margin-right: 148px;
    font-size: 68px;
    line-height: 100px;
  }
  @media only screen and (min-width: 1280px) {
    margin-left: 16px;
    margin-right: 0;
    font-size: 68px;

    font-weight: 800;
    line-height: 130%;
    width: 100%; /* Установите ширину в 100% для растяжения текста */
  }
`;
export const TittleWrapper = styled.div`
  @media only screen and (min-width: 1280px) {
    width: 501px;
    height: 264px;
  }
`;
