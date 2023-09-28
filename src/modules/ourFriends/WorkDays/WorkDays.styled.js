import styled from "styled-components";

export const StyledList = styled.ul`
  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-style: normal;
  width: ${({ theme }) => theme.spacing(30)};

  position: absolute;
  width: ${({ theme, $isActive }) => $isActive && theme.spacing(30)};
  height: ${({ theme, $isActive }) => $isActive && theme.spacing(40)};
  top: 10%;
  left: -80%;

  border-radius: ${({ theme, $isActive }) => $isActive && theme.spacing(2)};
  background-color: ${({ theme, $isActive }) =>
    $isActive && theme.colors.white};
  color: ${({ theme, $isActive }) => $isActive && theme.colors.black};
  box-shadow: ${({ theme, $isActive }) => $isActive && theme.shadows.primary};
  border: ${({ theme, $isActive }) => $isActive && theme.borders.normal};
  border-color: ${({ theme, $isActive }) => $isActive && theme.colors.blue};
  font-size: ${({ theme, $isActive }) => $isActive && theme.fontSizes.xs};

  @media only screen and (min-width: 768px) {
    top: 10%;
    left: -55%;
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
  @media only screen and (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
    top: 10%;
    left: -40%;
    font-size: ${({ theme, $isActive }) => $isActive && theme.fontSizes.s};
  }
`;

export const StyledDate = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const StyledItem = styled.li`
  padding: 2px;
`;
