import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
export const List = styled.ul`
  display: none;
  @media (max-width: 1600px) and (min-width: 1075px) {
    display: flex;
  }
  margin: 10px 0 10px 0;

  li {
    margin-right: 40px;
    ${({ $variant }) =>
      $variant === "flex" &&
      css`
        margin-bottom: 60px;
        @media (max-width: 320px) {
          margin-bottom: 20px;
        }
        &:last-child {
          margin-bottom: 0;
        }
      `}
  }

  @media (max-width: 1075px) and (min-width: 769px) {
    display: none;
  }

  ${({ $variant }) =>
    $variant === "flex" &&
    css`
      @media (max-width: 768px) {
        display: flex;
        flex-flow: column nowrap;
        margin-left: 32px;
      }
      @media (max-width: 320px) {
        display: flex;

        margin-top: 40px;
        align-items: center;
        flex-flow: column;

        &:last-child {
          margin: 0;

          margin-left: 43px;
        }
        li:last-child {
          margin-left: 0;
        }
      }
    `}
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-family: ${({ theme }) => theme.fonts.manrope.medium};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
  @media (max-width: 320px) {
    font-size: 32px;
  }
  &.active {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Item = styled.li`
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
  @media (max-width: 320px) {
    margin-bottom: 20px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
