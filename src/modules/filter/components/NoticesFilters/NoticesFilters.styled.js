import styled from 'styled-components';

export const WrapperNoticesFilter = styled.div`
  display: flex;
  gap: 12px;
  align-items: baseline;
  justify-content: space-between;
`;
export const WrapperRightSide = styled.div`
  display: flex;
  gap: 12px;
  align-items: baseline;
  justify-content: end;
  flex-wrap: wrap-reverse;

  @media only screen and (min-width: 768px) {
    flex-wrap: wrap-reverse;
  }
  @media only screen and (min-width: 1280px) {
    flex-wrap: nowrap;
  }
`;
export const WrapperRightFilterButton = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;
