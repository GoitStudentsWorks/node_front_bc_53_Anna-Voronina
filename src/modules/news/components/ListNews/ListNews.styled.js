import styled from "styled-components";

export const ListNewsStyled = styled.ul`
  margin-top: ${({ theme }) => theme.spacing(6)};
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;

  @media screen and (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing(10)};
    column-gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: ${({ theme }) => theme.spacing(15)};
    column-gap: 31px;
  }
`;
