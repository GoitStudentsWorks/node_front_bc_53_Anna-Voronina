import styled, { css } from "styled-components";
import { ButtonStyled } from "../Button/Button.styled";

export const LogoutBtn = styled(ButtonStyled)`
  svg {
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.colors.blue};
    fill: transparent;
  }

  background: none;

  &:focus,
  &:hover {
    border: none;
    background: none;

    transform: scale(1.07);
  }

  &:hover::before,
  &:focus::before {
    opacity: 0;
  }

  ${({ $variant }) =>
    $variant === "profile" &&
    css`
      flex-direction: row-reverse;
      gap: 12px;
      font-family: ${({ theme }) => theme.fonts.manrope.medium};
      font-size: ${({ theme }) => theme.fontSizes.m};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      letter-spacing: 0.64px;
      color: ${({ theme }) => theme.colors.grey};
    `}

  ${({ $variant }) =>
    $variant === "header" &&
    css`
      width: 135px;
      height: 40px;
      background-color: ${({ theme }) => theme.colors.blue};
      border-radius: 40px;
      color: ${({ theme }) => theme.colors.white};
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 4px 0 4px 0;

      svg {
        margin-left: 8px;
        stroke: ${({ theme }) => theme.colors.white};
      }
    `};
`;
