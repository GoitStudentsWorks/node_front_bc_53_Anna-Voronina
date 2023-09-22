import styled from "styled-components";

export const EditUserBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const EditSvg = styled.svg`
  fill: ${({ theme }) => theme.colors.blue};
`;

export const CrossSvg = styled.svg`
  stroke: ${({ theme }) => theme.colors.blue};
`;
