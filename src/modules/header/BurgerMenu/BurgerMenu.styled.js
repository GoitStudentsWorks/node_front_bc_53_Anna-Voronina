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
  /* border: 1px solid red; */
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
  @media (max-width: 768px) {
    margin-right: auto;
  }

  @media (max-width: 422px) {
    margin-right: 0;
    width: 116px;
    height: 20px;
  }
`;
export const Button = styled.button`
  @media (max-width: 766px) {
    margin-left: auto;
    ${(props) =>
      props.isopen
        ? css`
            animation-name: ${slideOutLeft};
          `
        : css`
            animation-name: ${slideInRight};
          `}
  }
`;
export const Svgsmall = styled.svg`
  width: 24px;
  height: 24px;
  stroke: yellow;
  margin-left: 24px;
`;

export const Section = styled.section`
  margin-top: 92px;
  text-align: center;
  @media (max-width: 320px) {
    margin-top: 40px;
  }
`;
