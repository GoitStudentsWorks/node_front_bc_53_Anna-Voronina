import styled from "styled-components";

export const Headers = styled.header`
  padding-top: 20px;

  @media only screen and (min-width: 768px) {
    padding-top: 24px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;
