import styled from "styled-components";

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
  @media only screen and (min-width: 1280px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 768px) {
    width: 355px;
    gap: 10px;
  }
`;

export const Avatar = styled.div`
  margin: 20px auto 43px;

  img {
    height: 182px;
    width: 182px;
    border-radius: ${({ theme }) => theme.radii.l};
    overflow: hidden;
  }

  @media only screen and (min-width: 768px) {
    margin: 0;
  }
  @media only screen and (min-width: 1280px) {
    margin: 0 auto 63px;
  }
`;

export const SelectedPhoto = styled.label`
  position: absolute;
  top: 225px;
  left: 50%;
  transform: translate(-50%, -50%);

  input {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    top: 213px;
    left: 489px;
    transform: translate(0%, 0%);
  }
  @media only screen and (min-width: 1280px) {
    top: 216px;
    left: 143px;
  }
`;

export const EditPhoto = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  div {
    display: flex;
    gap: 8px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
  p {
    font-family: ${({ theme }) => theme.fonts.manrope.regular};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1.83;
    letter-spacing: 0.48px;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const PhotoSvg = styled.svg`
  fill: ${({ theme }) => theme.colors.blue};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.yellow};
  }
`;

export const CrossPhotoSvg = styled.svg`
  stroke: ${({ theme }) => theme.colors.red};
`;

export const UserLabel = styled.label`
  display: flex;
  justify-content: space-between;

  p {
    font-family: ${({ theme }) => theme.fonts.manrope.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    letter-spacing: 0.56px;
    color: ${({ theme }) => theme.colors.black};

    @media only screen and (min-width: 768px) {
      font-size: 18px;
      letter-spacing: 0.72px;
    }
  }
`;

export const UserInput = styled.input`
  width: 190px;
  height: 24px;
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radii.l};
  border: 1px solid ${({ theme }) => theme.colors.blue};

  @media only screen and (min-width: 768px) {
    width: 255px;
    height: 30px;
    padding: 4px 12px;
    border-radius: ${({ theme }) => theme.radii.s};
  }
`;
