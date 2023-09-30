import styled from "styled-components";

export const WrapperNoticesFilter = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: baseline;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing(5)};

  @media only screen and (min-width: 768px) {
    margin-top: ${({ theme }) => theme.spacing(10)};
  }
`;

export const WrapperRightSide = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
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
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;
  justify-content: center;
`;
