import styled from "styled-components";

import bcgMob from "../../shared/assets/images/background/bg_mob@1x.png";
import bcgRetinaMob from "../../shared/assets/images/background/bg_mob@2x.png";
import bcgTab from "../../shared/assets/images/background/bg_tab@1x.png";
import bcgTabRetina from "../../shared/assets/images/background/bg_tab@2x.png";
import bcgDesc from "../../shared/assets/images/background/bg_desc@1x.png";
import bcgDescRetina from "../../shared/assets/images/background/bg_desc@2x.png";
import { StyledContainer } from "../../shared/components/Container/Container.styled";

export const RegisterPageWrapper = styled(StyledContainer)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: ${({ theme }) => theme.spacing(10)};
  padding-bottom: ${({ theme }) => theme.spacing(10)};

  background-image: url(${bcgMob});
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bcgRetinaMob});
  }

  @media only screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing(20)};
    padding-bottom: ${({ theme }) => theme.spacing(20)};

    background-image: url(${bcgTab});
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bcgTabRetina});
    }
  }
  @media only screen and (min-width: 1280px) {
    background-image: url(${bcgDesc});
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bcgDescRetina});
    }
  }
`;
