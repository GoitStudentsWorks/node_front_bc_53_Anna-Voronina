import styled from "styled-components";

export const Backdrop = styled.div`
  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const ModalStyled = styled.div`
  min-width: ${({ theme }) => theme.spacing(70)};
  min-height: ${({ theme }) => theme.spacing(71.75)};

  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(5)};

  padding: ${({ theme }) => theme.spacing(3)};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    border-radius: ${({ theme }) => theme.spacing(10)};

    padding: ${({ theme }) => theme.spacing(6)};
    min-width: ${({ theme }) => theme.spacing(152)};
    min-height: ${({ theme }) => theme.spacing(88)};
  }
`;

export const IconCloseModal = styled.svg`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  stroke: ${({ theme }) => theme.colors.blue};

  position: absolute;
  top: ${({ theme }) => theme.spacing(3)};
  right: ${({ theme }) => theme.spacing(3)};
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    top: ${({ theme }) => theme.spacing(6)};
    right: ${({ theme }) => theme.spacing(6)};
  }
`;
