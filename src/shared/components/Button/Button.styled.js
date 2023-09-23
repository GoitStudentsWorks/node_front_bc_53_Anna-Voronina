import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  min-height: ${({ theme }) => theme.spacing(10)};
  color: ${({ theme }) => theme.colors.blue};
  background: ${({ theme }) => theme.colors.lightBlue};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
  letter-spacing: 0.64px;

  border-radius: ${({ theme }) => theme.radii.l};
  border: none;
  padding: 8px 20px;

  cursor: pointer;
  outline: none;
  transition: transform ${({ theme }) => theme.transitions.regular};

  &:focus,
  &:hover {
    border: none;
    background: ${({ theme }) => theme.colors.blueGradient};
    transform: scale(1.01);
  }

  /* Варіант "bigButtonFirst" */
  ${({ $variant }) =>
    $variant === 'bigButtonFirst' &&
    css`
      width: ${({ theme }) => theme.spacing(62)};
      padding: 8px 28px;
      background: none;
      border: ${({ theme }) => theme.borders.medium};
      font-family: ${({ theme }) => theme.fonts.manrope.semiBold};
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};

      &:focus,
      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }
    `}

  /* Варіант "bigButtonSecond" */
  ${({ $variant }) =>
    $variant === 'bigButtonSecond' &&
    css`
      width: ${({ theme }) => theme.spacing(62)};
      padding: 8px 28px;
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.blue};
    `}

 /* Варіант "mediumButtonFirst" */
      ${({ $variant }) =>
    $variant === 'mediumButtonFirst' &&
    css`
      width: ${({ theme }) => theme.spacing(41.25)};
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.blue};
    `}

 /* Варіант "mediumButtonSecond" */
      ${({ $variant }) =>
    $variant === 'mediumButtonSecond' &&
    css`
      width: ${({ theme }) => theme.spacing(41.25)};
      background: none;
      border: ${({ theme }) => theme.borders.medium};

      &:focus,
      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }
    `}

 /* Варіант "logoutButton" */
      ${({ $variant }) =>
    $variant === 'logoutButton' &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.blue};
    `}

 /* Варіант "mobileAddButton" */
      ${({ $variant }) =>
    $variant === 'mobileAddButton' &&
    css`
      width: ${({ theme }) => theme.spacing(20)};
      height: ${({ theme }) => theme.spacing(20)};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.blue};
      border-radius: ${({ theme }) => theme.radii.round};
    `}

    ${({ $variant }) =>
    $variant === 'AuthButton' &&
    css`
      width: 100%;
      padding: 10px 28px;
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.blue};

      font-family: ${({ theme }) => theme.fonts.manrope.regular};
      font-size: ${({ theme }) => theme.fontSizes.l};
      font-style: normal;
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};
      line-height: normal;
      letter-spacing: 0.8px;
    `}
`;
