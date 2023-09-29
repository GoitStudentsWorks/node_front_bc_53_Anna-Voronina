import styled from "styled-components";

export const PlugStyled = styled.h3`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;

  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const ListNewsStyled = styled.ul`
  margin-top: ${({ theme }) => theme.spacing(6)};
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;

  @media screen and (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing(10)};
    column-gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: ${({ theme }) => theme.spacing(15)};
    column-gap: 31px;
  }
`;
