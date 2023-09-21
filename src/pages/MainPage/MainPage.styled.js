import styled from "styled-components";
import bcgMob from "../../shared/assets/images/background/bg_mob@1x.png";
import bcgRetinaMob from "../../shared/assets/images/background/bg_mob@2x.png";
import bcgTab from "../../shared/assets/images/background/bg_tab@1x.png";
import bcgTabRetina from "../../shared/assets/images/background/bg_tab@2x.png";
import bcgDesc from "../../shared/assets/images/background/bg_desc@1x.png";
import bcgDescRetina from "../../shared/assets/images/background/bg_desc@2x.png";

export const Wrapper = styled.div`
  max-width: 320px;
  position: relative;

  outline: 1px solid red;

  background-image: url(${bcgMob});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -90px;
  background-position-x: 5px;

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
    max-width: 1280px;

    background-image: url(${bcgDesc});
    background-position-y: -110px;
    background-position-x: 10px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bcgDescRetina});
    }
  }
`;

export const StyledPicture = styled.picture`
  @media only screen and (min-width: 1280px) {
    display: block;
    margin-left: 363px;
  }
`;

export const StyledTittle = styled.h1`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: calc(44 / 32);

  @media only screen and (min-width: 768px) {
    margin-left: 32px;
    margin-right: 148px;
    font-size: 68px;
    line-height: calc(100 / 68);
    font-family: ${({ theme }) => theme.fonts.manrope.bold};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
  @media only screen and (min-width: 1280px) {
    position: absolute;
    max-width: 500px;
    top: 25%;

    margin-left: 16px;
    margin-right: 0;
    font-size: 68px;
    font-family: ${({ theme }) => theme.fonts.manrope.extraBold};
    font-weight: ${({ theme }) => theme.fontWeights.extraBold};

    line-height: calc(88 / 68);
  }
`;
