import styled from "styled-components";
export const Button = styled.button`
  width: 135px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 40px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0 4px 0;
  @media (max-width: 768px) {
    margin-left: 359px;
  }
  svg {
    margin-left: 8px;
    width: 24px;
    height: 24px;
    fill: transparent;
    stroke: ${({ theme }) => theme.colors.white};
  }
`;
