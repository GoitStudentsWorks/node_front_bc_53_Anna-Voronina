import styled from "styled-components";

export const Article = styled.li`
  border-radius: ${({ theme }) => theme.radii.s};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  &::before {
    content: "";
    display: block;
    height: ${({ theme }) => theme.spacing(2)};

    margin-bottom: ${({ theme }) => theme.spacing(3)};
    border-radius: ${({ theme }) => theme.radii.l};
    background: ${({ theme }) => theme.colors.blueGradient};
  }

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(84)};
  }

  @media screen and (min-width: 1280px) {
    width: ${({ theme }) => theme.spacing(98.75)};
  }
`;

export const Img = styled.img`
  object-fit: cover;
  max-height: ${({ theme }) => theme.spacing(63)};
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.s};
`;

export const BlockInfo = styled.div`
  padding: 16px 12px 12px 12px;
`;

export const Title = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(10)};

  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: normal;
`;

export const DivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: normal;
`;

export const ReadMore = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: normal;
`;
