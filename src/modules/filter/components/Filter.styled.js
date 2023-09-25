import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(38)};
`;

export const Filter2 = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;

  border-radius: ${({ theme }) => theme.radii.s};
`;

export const WrapperOpenOptions = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.s};
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  padding: 0 14px 14px 14px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: ${({ theme }) => theme.radii.s};

  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;

  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 15.6px;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.blue};
`;

export const CheckboxInput = styled.input`
  cursor: pointer;
`;

export const SvgCheck = styled.svg`
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`;
