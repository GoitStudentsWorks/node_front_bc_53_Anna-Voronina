import styled from "styled-components";

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Avatar = styled.div`
  margin: 20px auto 43px;

  img {
    height: 182px;
    width: 182px;
    border-radius: ${({ theme }) => theme.radii.l};
    overflow: hidden;
  }
`;

export const SelectedPhoto = styled.label`
  position: absolute;
  top: 216px;
  left: 82px;

  input {
    display: none;
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
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.manrope.regular};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1.83;
    letter-spacing: 0.48px;
  }
`;

export const PhotoSvg = styled.svg`
  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.blue};
`;

export const CrossPhotoSvg = styled.svg`
  stroke: ${({ theme }) => theme.colors.red};
`;

export const UserLabel = styled.label`
  display: flex;
  justify-content: space-between;

  p {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.manrope.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    letter-spacing: 0.56px;
  }
`;

export const UserInput = styled.input`
  height: 24px;
  width: 190px;
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radii.l};
  border: 1px solid ${({ theme }) => theme.colors.blue};
`;

export const SaveBtn = styled.button`
  width: 248px;
  height: 31px;
  padding: 6px 107px;
  margin: 5px auto 20px;
  border-radius: ${({ theme }) => theme.radii.l};
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.56px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.lightPink};
`;
