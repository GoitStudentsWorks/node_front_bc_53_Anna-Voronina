import styled from 'styled-components';

export const LabelStyled = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: normal;
  letter-spacing: 0.56px;

  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.lightBlue};

  border-radius: ${({ theme }) => theme.radii.l};
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.regular};

  &:focus,
  &:hover {
    border: none;
    background: ${({ theme }) => theme.colors.blueGradient};
    transform: scale(1.07);
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const InputStyled = styled.input`
  display: none;
`;
