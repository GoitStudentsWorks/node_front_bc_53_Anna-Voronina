import styled from "styled-components";
import Button from "../../../../shared/components/Button/Button";

export const StyledBtnNext = styled(Button)``;

export const StyledBtnCancel = styled(Button)`
  width: 248px;
  border: ${({ theme }) => theme.borders.none};
  @media screen and (min-width: 768px) {
    width: 80px;
  }
`;
