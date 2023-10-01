import styled from "styled-components";

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;
