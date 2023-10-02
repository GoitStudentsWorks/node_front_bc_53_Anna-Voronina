import styled from 'styled-components';
import Button from '../../../../shared/components/Button/Button';

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: center;
  }
`;

export const StyledBtnNext = styled(Button)``;

export const StyledBtnCancel = styled(Button)`
  width: 248px;
  border: ${({ theme }) => theme.borders.none};
  @media screen and (min-width: 768px) {
    width: 80px;
  }
`;
