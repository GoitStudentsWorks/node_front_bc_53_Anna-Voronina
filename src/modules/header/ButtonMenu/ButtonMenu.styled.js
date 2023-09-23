import styled from "styled-components";

export const Button = styled.button`
  @media (max-width: 766px) {
    margin-left: auto;
  }
 x
`;
export const Svg = styled.svg`
  display: none;
  width: 24px;
  height: 24px;
  margin-left: 24px;
  stroke: ${({ theme }) => theme.colors.yellow};
  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 656px) {
    margin-right: auto;
  }
`;
