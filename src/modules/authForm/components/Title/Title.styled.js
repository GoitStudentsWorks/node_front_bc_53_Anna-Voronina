import styled from 'styled-components';

export const TitleStyled = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: 36px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: normal;
  letter-spacing: 1.44px;
`;
