import styled, { css } from "styled-components";

export const LogoutBtn = styled.button`
  display: flex;

  svg {
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.colors.blue};
    fill: transparent;
  }

  ${({ $variant }) =>
    $variant === "profile" &&
    css`
      padding-bottom: 24px;
      margin-top: 24px;
      flex-direction: row-reverse;
      gap: 12px;
      font-family: ${({ theme }) => theme.fonts.manrope.medium};
      font-size: ${({ theme }) => theme.fontSizes.m};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      letter-spacing: 0.64px;
      color: ${({ theme }) => theme.colors.grey};

      @media only screen and (min-width: 768px) {
        padding-bottom: 20px;
        margin-top: 14px;
      }
      @media only screen and (min-width: 1280px) {
        padding-bottom: 19px;
        margin-top: 22px;
      }
    `}

  ${({ $variant, $type }) =>
    $variant === "header" &&
    css`
      display: ${$type === "tabletMenu" ? "flex" : "none"};
      justify-content: center;
      align-items: center;
      padding: 8px 20px;
      gap: ${({ theme }) => theme.spacing(2)};

      width: 135px;
      height: 40px;

      font-family: ${({ theme }) => theme.fonts.manrope.bold};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      letter-spacing: 0.64px;

      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.blue};
      border-radius: 40px;

      svg {
        stroke: ${({ theme }) => theme.colors.white};
      }

      @media only screen and (min-width: 1280px) {
        display: flex;
      }
    `}

    ${({ $variant }) =>
    $variant === "menu" &&
    css`
      position: absolute;
      bottom: 20px;
      left: 20px;

      width: 135px;
      padding: 8px 20px;
      justify-content: center;
      align-items: center;
      gap: ${({ theme }) => theme.spacing(2)};

      font-family: ${({ theme }) => theme.fonts.manrope.bold};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      letter-spacing: 0.64px;
      color: ${({ theme }) => theme.colors.white};

      background-color: ${({ theme }) => theme.colors.blue};
      border-radius: ${({ theme }) => theme.radii.l};

      svg {
        stroke: ${({ theme }) => theme.colors.white};
      }

      @media only screen and (min-width: 768px) {
        display: none;
      }
    `};
`;

export const ModalTitle = styled.p`
  margin: 65px auto 44px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.96px;
  color: ${({ theme }) => theme.colors.black};
  @media only screen and (min-width: 768px) {
    margin: 84px auto 48px;
    font-size: 36px;
    letter-spacing: 1.44px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 17px;
  }
`;
