import styled from "styled-components";

export const WrapperForm = styled.div`
  margin-top: 20px;
  margin: 0 auto;
  padding: 20px 8px 20px 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};

  width: ${({ theme }) => theme.spacing(70)};

  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radii.l};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  @media screen and (min-width: 768px) {
    margin-top: 68px;
    padding: 20px 33px;
    width: ${({ step }) => (step === 3 ? "704px" : "458px")};
    border-radius: ${({ theme }) => theme.radii.l};
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 1280px) {
    width: ${({ step }) => (step === 3 ? "822px" : "458px")};
    padding: ${({ step }) => (step === 3 ? "20px 73px" : "20px 33px")};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
