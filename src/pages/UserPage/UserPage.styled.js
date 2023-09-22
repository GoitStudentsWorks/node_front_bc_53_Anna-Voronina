import styled from "styled-components";

export const TitleUserPage = styled.h2`
  margin: 40px 0 18px;
  color: #000;
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.8px;

  @media only screen and (min-width: 768px) {
    color: ${({ theme }) => theme.colors.black};
    font-size: 28px;
  }
`;

export const UserFormContainer = styled.div`
  position: relative;
  padding: 0 8px;
  border-radius: ${({ theme }) => theme.radii.s};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  @media only screen and (min-width: 768px) {
    padding: 0 76px 0 20px;
  }
`;
