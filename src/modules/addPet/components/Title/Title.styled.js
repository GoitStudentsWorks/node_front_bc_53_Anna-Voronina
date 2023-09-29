import styled from "styled-components";

export const StyledTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.spacing(5)};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: normal;
  letter-spacing: 1.44px;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.spacing(7)};
  }
`;
