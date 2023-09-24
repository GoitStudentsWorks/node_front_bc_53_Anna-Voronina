import styled from "styled-components";

export const ListNewsStyled = styled.ul`
  margin-top: ${({ theme }) => theme.spacing(6)};

  @media screen and (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing(10)};
    display: flex;
    flex-wrap: wrap;
    column-gap: 32px;
    flex-basis: calc((100% - 31px) / 2);
  }

  @media screen and (min-width: 1280px) {
    margin-top: ${({ theme }) => theme.spacing(15)};
    column-gap: 31px;
    flex-basis: calc((100% - (2 * 31px)) / 3);
  }
`;
