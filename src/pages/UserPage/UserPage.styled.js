import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerUserPage = styled.div`
  position: relative;

  h2 {
    font-family: ${({ theme }) => theme.fonts.manrope.medium};
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    letter-spacing: 0.8px;
    color: #000;

    @media only screen and (min-width: 768px) {
      font-size: 28px;
      color: ${({ theme }) => theme.colors.black};
    }
    @media only screen and (min-width: 1280px) {
      margin: 0 auto 24px;
    }
  }

  @media only screen and (min-width: 1280px) {
    display: flex;
    gap: 32px;
    margin-top: 62px;
  }
`;

export const TitleUserInf = styled.h2`
  margin: 40px auto 18px;

  @media only screen and (min-width: 768px) {
    margin: 60px auto 24px;
  }
`;

export const TitleUserPets = styled.h2`
  margin: 46px auto 31px;

  @media only screen and (min-width: 768px) {
    margin: 40px auto 22px;
  }
`;

export const UserFormContainer = styled.div`
  position: relative;
  height: 517px;
  padding: 0 8px;
  border-radius: ${({ theme }) => theme.radii.s};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  @media only screen and (min-width: 768px) {
    height: 268px;
    padding: 20px 76px 0 20px;
    border-radius: ${({ theme }) => theme.radii.l};
  }
  @media only screen and (min-width: 1280px) {
    width: 395px;
    height: 520px;
    padding: 20px 24px 0 16px;
  }
`;

export const AddBtn = styled(Link)`
  position: absolute;
  top: 736px;
  right: 0;
  @media only screen and (min-width: 768px) {
    top: 370px;
  }
  @media only screen and (min-width: 1280px) {
    top: 0;
  }
`;
