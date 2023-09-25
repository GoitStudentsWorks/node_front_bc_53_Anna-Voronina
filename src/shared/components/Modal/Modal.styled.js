import styled, { css } from "styled-components";

export const Backdrop = styled.div`
  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalStyled = styled.div`
  min-width: ${({ theme }) => theme.spacing(70)};
  min-height: ${({ theme }) => theme.spacing(71.75)};

  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(5)};

  padding: ${({ theme }) => theme.spacing(3)};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    border-radius: ${({ theme }) => theme.spacing(10)};

    padding: ${({ theme }) => theme.spacing(6)};
    min-width: ${({ theme }) => theme.spacing(152)};
    min-height: ${({ theme }) => theme.spacing(88)};
  }

  h3 {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    letter-spacing: 0.96px;
    color: ${({ theme }) => theme.colors.black};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
      gap: 17px;
    }
  }

  ${({ $variant }) =>
    $variant === "logout" &&
    css`
      h3 {
        margin: 65px auto 44px;
        font-family: ${({ theme }) => theme.fonts.manrope.medium};
        font-weight: ${({ theme }) => theme.fontWeights.medium};

        @media only screen and (min-width: 768px) {
          margin: 84px auto 48px;
          font-size: 36px;
          letter-spacing: 1.44px;
        }
      }
    `}

  ${({ $variant }) =>
    $variant === "remove" &&
    css`
      h3 {
        width: 200px;
        margin: 60px auto 14px;
        font-family: ${({ theme }) => theme.fonts.manrope.bold};
        font-weight: ${({ theme }) => theme.fontWeights.bold};

        @media only screen and (min-width: 768px) {
          width: 288px;
          margin: 60px auto 40px;
          font-size: 28px;
          letter-spacing: -0.28px;
          color: #000;
        }
      }

      p {
        width: 230px;
        margin: 0 auto 44px;
        text-align: center;
        font-size: ${({ theme }) => theme.fontSizes.s};
        font-family: ${({ theme }) => theme.fonts.manrope.medium};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        letter-spacing: -0.14px;
        color: #000;

        span {
          font-family: ${({ theme }) => theme.fonts.manrope.bold};
          font-weight: ${({ theme }) => theme.fontWeights.bold};
        }

        @media only screen and (min-width: 768px) {
          width: 393px;
          margin: 0 auto 48px;
          font-size: ${({ theme }) => theme.fontSizes.m};
          letter-spacing: -0.16px;
        }
      }

      div {
        margin-bottom: 60px;
      }
    `}
`;

export const IconCloseModal = styled.svg`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  stroke: ${({ theme }) => theme.colors.blue};

  position: absolute;
  top: ${({ theme }) => theme.spacing(3)};
  right: ${({ theme }) => theme.spacing(3)};
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    top: ${({ theme }) => theme.spacing(6)};
    right: ${({ theme }) => theme.spacing(6)};
  }
`;
