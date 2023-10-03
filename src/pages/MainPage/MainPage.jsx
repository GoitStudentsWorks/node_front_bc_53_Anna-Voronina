import { StyledPicture, StyledTittle, Wrapper } from "./MainPage.styled";
import mainImgMobile from "../../shared/assets/images/mainPage/main_mob@1x.png";
import mainImgMobileRetina from "../../shared/assets/images/mainPage/main_mob@2x.png";
import mainImgMobileWebp from "../../shared/assets/images/mainPage/main_mob@1x.webp";
import mainImgMobileRetinaWebp from "../../shared/assets/images/mainPage/main_mob@2x.webp";
import mainImgTab from "../../shared/assets/images/mainPage/main_tab@1x.png";
import mainImgTabRetina from "../../shared/assets/images/mainPage/main_tab@2x.png";
import mainImgTabWebp from "../../shared/assets/images/mainPage/main_tab@1x.webp";
import mainImgTabWebpRetina from "../../shared/assets/images/mainPage/main_tab@2x.webp";
import mainImgDesc from "../../shared/assets/images/mainPage/main_desc@1x.png";
import mainImgDescRetina from "../../shared/assets/images/mainPage/main_desc@2x.png";
import mainImgDescWebp from "../../shared/assets/images/mainPage/main_desc@1x.webp";
import mainImgDescWebpRetina from "../../shared/assets/images/mainPage/main_desc@2x.webp";
import { BackgroundImgWrapper } from "../../shared/styles/styled components/BackgroundImgWrapper.styled";

const MainPage = () => {
  return (
    <BackgroundImgWrapper $variant="main">
      <Wrapper>
        <StyledTittle>Take good care of your small pets</StyledTittle>

        <StyledPicture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${mainImgDesc} 1x, ${mainImgDescRetina} 2x`}
            type="image/png"
          />
          <source
            media="(min-width: 1280px)"
            srcSet={`${mainImgDescWebp} 1x, ${mainImgDescWebpRetina} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${mainImgTab} 1x, ${mainImgTabRetina} 2x`}
            type="image/png"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${mainImgTabWebp} 1x, ${mainImgTabWebpRetina} 2x`}
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${mainImgMobile} 1x, ${mainImgMobileRetina} 2x`}
            type="image/png"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${mainImgMobileWebp} 1x, ${mainImgMobileRetinaWebp} 2x`}
            type="image/webp"
          />

          <img
            src={mainImgMobileRetinaWebp}
            alt="Pets"
            width={917}
            height={670}
          />
        </StyledPicture>
      </Wrapper>
    </BackgroundImgWrapper>
  );
};

export default MainPage;
