import { Field, Form } from 'formik';

import styled from 'styled-components';

export const WrapperForm = styled.div`
  padding: 40px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.wite};

  width: ${({ theme }) => theme.spacing(70)};

  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radii.s};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(152)};
    padding: 60px 75px;
    border-radius: ${({ theme }) => theme.radii.l};
    background-color: white;
  }
  @media screen and (min-width: 1280px) {
    width: ${({ theme }) => theme.spacing(152)};
    background-color: white;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const WrapperField = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3.5)};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(8)};
    margin-bottom: ${({ theme }) => theme.spacing(13)};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const FieldStyled = styled(Field)`
  display: block;

  padding: 12px 16px;
  width: 100%;

  outline: none;
  border-radius: ${({ theme }) => theme.radii.l};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.blue};

  color: ${({ theme }) => theme.colors.grey};

  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 24px;
  letter-spacing: 0.64px;
`;

export const WrapperButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2.5)};

  @media screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const WrapperIcon3 = styled.div`
  position: relative;
  width: 100%;
`;

export const WrapperМessages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    position: absolute;
  }
`;
