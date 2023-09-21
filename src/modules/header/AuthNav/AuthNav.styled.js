import { Link } from "react-router-dom";
import styled from "styled-components";
export const List = styled.ul`
  display: flex;
  margin-left: auto;
  li {
    margin-left: 40px;

    @media (max-width: 768px) {
      margin-left: 20px;
    }
  }

  li:first-child {
    margin-left: 0;
  }
  @media (max-width: 706px) {
    display: none;
  }
`;

export const Items = styled.li`
  width: 165px;
  height: 38px;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0 4px 0;
  text-align: center;
  position: relative;

  svg {
    position: absolute;
    width: 24px;
    height: 24px;
    fill: #ffc107;
    margin-left: 4px;
  }
`;
export const LinkStyles = styled(Link)`
  color: ${({ theme }) => theme.colors.yellow};
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;
