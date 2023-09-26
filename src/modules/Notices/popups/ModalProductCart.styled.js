import styled, { css } from "styled-components";

export const ModalWrapper = styled.div`
  position: relative;
  width: 280px;
  margin-top: 10%;
  /* height: 786px; */
  @media screen and (min-width: 768px) {
    margin: 0;
    width: 681px;
    /* max-height: 540px; */
  }
`;

export const TopWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
`;

export const CategoryName = styled.span`
  position: absolute;
  top: 16px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: normal;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.black};
  padding: 6px 53px 6px 20px;
  background: ${({ theme }) => theme.colors.lightBlue};
  backdrop-filter: blur(50px);
`;

export const NoticesInfoImg = styled.img`
  /* height: 240px; */
  /* width: 240px; */
  margin-bottom: 12px;
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;
  @media screen and (min-width: 768px) {
    height: 298px;
    width: 262px;
  }
`;

export const ParamsBox = styled.div``;

export const NoticesInfoTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: normal;
  letter-spacing: -0.28px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;

  word-break: break-all;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const ParametersList = styled.ul`
  display: grid;
  gap: 8px;
  margin-bottom: 28px;
`;

export const NoticesInfoParameters = styled.li`
  position: relative;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: normal;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const ParametersValue = styled.span`
  width: max-content;
  position: absolute;
  left: 118px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: normal;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  ${({ $variant }) =>
    $variant === "yellow" &&
    css`
      color: ${({ theme }) => theme.colors.yellow};
    `}
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 768px) {
    gap: 70px;
  }
`;

export const CommentsText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CommentsTextStrong = styled.span`
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const WrapperBtn = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  @media screen and (min-width: 768px) {
    display: inline-flex;
    justify-content: flex-end;
    flex-direction: row;
  }
`;
