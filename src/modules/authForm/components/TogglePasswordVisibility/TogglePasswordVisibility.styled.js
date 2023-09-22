import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styled from 'styled-components';

export const PasswordIconLook = styled.div`
  height: ${({ theme }) => theme.spacing(6)};
  width: ${({ theme }) => theme.spacing(6)};
  color: grey;
  position: absolute;
  right: ${({ theme }) => theme.spacing(4)};
  top: 25%;
`;

export const FaEyeStyled = styled(FaEye)`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const FaEyeSlashStyled = styled(FaEyeSlash)`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;
