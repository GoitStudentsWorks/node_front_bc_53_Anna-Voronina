import styled from 'styled-components';

export const RegisterPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.white};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
