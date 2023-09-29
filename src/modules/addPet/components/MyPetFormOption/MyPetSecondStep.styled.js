import styled from "styled-components";
import { Field } from "formik";

export const WrapperField = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const FileWrapper = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-top: 16px;
`;

export const FieldComentStyled = styled(Field)`
  display: block;
  margin-top: 4px;
  word-wrap: break-word;

  padding: 12px 16px;
  width: 264px;
  height: 92px;

  outline: none;
  border-radius: ${({ theme }) => theme.radii.s};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.blue};

  color: ${({ theme }) => theme.colors.grey};

  font-family: ${({ theme }) => theme.fonts.manrope.regular};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 24px;
  letter-spacing: 0.64px;

  &.error {
    border-color: ${({ theme }) =>
      theme.colors.red}; // Красный бордер при ошибке
  }

  &.success {
    border-color: ${({ theme }) =>
      theme.colors.green}; // Зеленый бордер при успешной валидации
  }
  @media screen and (min-width: 768px) {
    width: 393px;
    height: 79px;
  }
`;

//
//

export const FileInputContainer = styled.div`
  width: 112px;
  height: 112px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border: none;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  background-image: url(${(props) => props.imageUrl || ""});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
  }
`;

// export const FileInputContainer = styled.div.attrs((props) => ({
//   style: {
//     backgroundImage: `url(${props.imageUrl || ""})`,
//   },
// }))(
//   css`
//     width: 112px;
//     height: 112px;
//     background-color: ${({ theme }) => theme.colors.lightBlue};
//     border: none;
//     border-radius: 20px;
//     outline: none;
//     cursor: pointer;
//     background-size: cover; // Залежно від ваших потреб
//     background-repeat: no-repeat;
//     background-position: center;
//   `
// );

export const FileInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope.medium};
  font-size: ${({ theme }) => theme.spacing(3.5)};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: normal;
  /* letter-spacing: 1.44px; */

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.spacing(5)};
  }
`;
