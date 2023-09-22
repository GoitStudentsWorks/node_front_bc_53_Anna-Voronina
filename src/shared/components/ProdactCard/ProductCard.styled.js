import styled from 'styled-components';

export const UserPetCard = styled.li`
  min-height: 440px;
  max-width: 280px;
  background:${({ theme }) => theme.colors.white} ;
  box-shadow: ${({ theme }) => theme.shadows.primary};
  border-radius: ${({ theme }) => theme.radii.s};
  padding: 16px 20px 40px;

`;
