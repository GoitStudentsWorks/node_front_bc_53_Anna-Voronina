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
  }
  p {
    color: ${({ theme }) => theme.colors.grey};
    font-family: ${({ theme }) => theme.fonts.manrope.medium};
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    letter-spacing: 0.64px;
  }
`;
