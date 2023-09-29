import styled from "styled-components";

export const WrapperForm = styled.div`
  margin-top: 20px;
  margin: 0 auto;
  padding: 20px 8px 10px 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};

  width: ${({ theme }) => theme.spacing(70)};

  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radii.l};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  @media screen and (min-width: 768px) {
    margin-top: 68px;
    width: ${({ theme }) => theme.spacing(115)};
    padding: 20px 33px;
    border-radius: ${({ theme }) => theme.radii.l};
    background-color: ${({ theme }) => theme.colors.white};
  }
  @media screen and (min-width: 1280px) {
    width: ${({ theme }) => theme.spacing(115)};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

// export const RadioContainer = styled.div``;

// export const RadioWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
//   margin-left: 8px;
// `;

// export const StyledRadio = styled.input`
//   display: none;
//   &:checked + label {
//     background: ${({ theme }) => theme.colors.blueGradient};
//     color: ${({ theme }) => theme.colors.white};
//   }
// `;

// export const SelectRadio = styled.label`
//   font-weight: ${({ theme }) => theme.fontWeights.normal};
//   font-size: ${({ theme }) => theme.fontSizes.s};
//   line-height: normal;

//   align-items: center;
//   letter-spacing: 0.56px;

//   color: ${({ theme }) => theme.colors.blue};
//   background: ${({ theme }) => theme.colors.lightBlue};
//   backdrop-filter: blur(2px);
//   padding: 8px 16px;
//   border-radius: ${({ theme }) => theme.radii.l};
//   border-color: ${({ theme }) => theme.colors.blue};
//   outline: none;
//   transition: transform ${({ theme }) => theme.transitions.regular};
//   cursor: pointer;

//   &:focus,
//   &:hover {
//     background: ${({ theme }) => theme.colors.blueGradient};
//     color: ${({ theme }) => theme.colors.white};
//   }
//   &:focus svg,
//   &:hover svg {
//     stroke: ${({ theme }) => theme.colors.white};
//   }
// `;
