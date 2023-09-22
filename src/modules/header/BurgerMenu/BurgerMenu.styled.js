import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

// const slideInRightAnimation = css`
//   animation: ${slideInRight} 0.3s ease forwards;
// `;

// const slideOutLeftAnimation = css`
//   animation: ${slideOutLeft} 0.3s ease forwards;
// `;

// export const Div = styled.div`
//   visibility: hidden;
//   position: fixed;
//   top: 0;
//   right: 0;
//   background: #fff;
//   z-index: 1000;
//   width: 100%;
//   height: 100%;
//   background-color: white;
//   animation-timing-function: ease;
//   animation-fill-mode: both;
//   ${(props) => (props.open ? slideInRightAnimation : slideOutLeftAnimation)}

//   @media (max-width: 768px) {
//     visibility: visible;
//   }
// `;

export const Div = styled.div`
  visibility: hidden;
  position: fixed;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: white;
  animation-duration: 0.3s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  ${(props) =>
    props.isopen
      ? css`
          animation-name: ${slideOutLeft};
        `
      : css`
          animation-name: ${slideInRight};
        `}
  @media (max-width: 768px) {
    visibility: visible;
  }
`;

export const Headermenu = styled.header`
  margin: 24px 32px 0 32px;
  /* max-width: 704px; */
  height: 44px;
  border: 1px solid red;
  display: flex;
  align-items: center;

  @media (max-width: 320px) {
    margin: 22px 20px 0 20px;
  }
`;
export const Svg = styled.svg`
  width: 162px;
  height: 28px;
  margin-right: 167px;

  @media (max-width: 320px) {
    margin-right: 140px;
    width: 116px;
    height: 20px;
  }
`;

export const Svgsmall = styled.svg`
  width: 24px;
  height: 24px;
  stroke: yellow;
  margin-left: 24px;
  @media (max-width: 320px) {
    margin-left: 0;
  }
`;

export const Section = styled.section`
  margin-top: 92px;
  text-align: center;
`;

export const Item = styled.li`
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }
`;
export const LinkMenu = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 320px) {
    font-size: 32px;
  }
  &.active {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
