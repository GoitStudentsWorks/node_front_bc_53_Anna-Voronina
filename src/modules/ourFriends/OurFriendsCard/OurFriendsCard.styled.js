import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  width: 280px;
  min-height: 240px;
  border-radius: 40px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  @media only screen and (min-width: 768px) {
    width: 336px;
    min-height: 275px;
  }
  @media only screen and (min-width: 1280px) {
    width: 394px;
    min-height: 278px;
  }
`;

export const StyledTittle = styled.h2`
  padding-top: 16px;
  padding-bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  margin-left: 12px;
`;

export const StyledH3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-style: normal;
  text-align: left;
  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const StyledText = styled.a`
  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 12px;
  font-style: normal;

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
  @media only screen and (min-width: 1280) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const StyledP = styled.p`
  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 12px;
  font-style: normal;

  @media only screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
  @media only screen and (min-width: 1280) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const StyledImg = styled.img`
  width: 100px;
  height: 68px;
  object-fit: contain;
  @media only screen and (min-width: 768px) {
    width: 124px;
    height: 88px;
  }
  @media only screen and (min-width: 1280px) {
    width: 146px;
    height: 104px;
  }
`;

export const StyledBtn = styled.button`
  border: 1px solid red;
  width: 100px;
  height: 100px;
`;

export const StyledList = styled.li`
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    transition: ${({ theme }) => theme.transitions.regular};
  }
`;
