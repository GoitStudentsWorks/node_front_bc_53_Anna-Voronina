import styled from "styled-components";

export const TitleUserPage = styled.h2`
  margin: 40px 0 18px;
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.8px;
  color: #000;

  @media only screen and (min-width: 768px) {
    margin: 60px 0 24px;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const UserFormContainer = styled.div`
  position: relative;
  padding: 0 8px;
  border-radius: ${({ theme }) => theme.radii.s};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  @media only screen and (min-width: 768px) {
    padding: 20px 76px 0 20px;
    border-radius: ${({ theme }) => theme.radii.l};
  }
`;
