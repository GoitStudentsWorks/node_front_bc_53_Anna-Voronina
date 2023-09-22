import { Link } from "react-router-dom";
import styled from "styled-components";
export const List = styled.ul`
  display: flex;
  margin: 10px 0 10px 0;
  li {
    margin-right: 40px;
  }

  @media (max-width: 1075px) {
    display: none;
  }
`;
export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  
  &.active {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
