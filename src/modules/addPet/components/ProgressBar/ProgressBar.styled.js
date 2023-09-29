import styled from "styled-components";

export const ProgressWrapper = styled.div`
  white-space: nowrap;
`;

export const ProgressText = styled.div`
  display: inline-block;
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }

  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: normal;

  color: ${({ theme }) => theme.colors.blue};

  &::after {
    margin-top: 12px;
    content: "";
    display: block;
    bottom: 0;
    left: 0;
    right: 0, position absolute;
    width: 80px;
    height: 8px;
    background-color: currentColor;
    border-radius: ${({ theme }) => theme.radii.xxs};
  }
  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
    line-height: 26px;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
    &::after {
      margin-top: 12px;
      content: "";
      display: block;
      bottom: 0;
      left: 0;
      right: 0, position absolute;
      width: 120px;
      height: 8px;
      background-color: currentColor;
      border-radius: ${({ theme }) => theme.radii.xxs};
    }
  }
`;
