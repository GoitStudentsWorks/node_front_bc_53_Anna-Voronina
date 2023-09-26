import styled from 'styled-components';

export const WrapperModalAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 36px 0;
  margin-top: ${({ theme }) => theme.spacing(13)};
`;
export const Text = styled.p`
  margin: 52px 0 60px 0;
  font-family: ${({ theme }) => theme.fonts.manrope.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  letter-spacing: 0.96;
`;
