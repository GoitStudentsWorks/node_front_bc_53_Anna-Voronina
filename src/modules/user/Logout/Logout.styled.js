import styled from "styled-components";

export const LogoutBtn = styled.button`
  padding-bottom: 24px;
  margin-top: 24px;
  display: flex;
  gap: 12px;

  svg {
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.colors.blue};
    fill: ${({ theme }) => theme.colors.white};

    &:hover,
    &:focus {
      stroke: ${({ theme }) => theme.colors.yellow};
    }
  }
  p {
    font-family: ${({ theme }) => theme.fonts.manrope.medium};
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    letter-spacing: 0.64px;
    color: ${({ theme }) => theme.colors.grey};
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 20px;
    margin-top: 14px;
  }
  @media only screen and (min-width: 1280px) {
    padding-bottom: 19px;
    margin-top: 22px;
  }
`;
