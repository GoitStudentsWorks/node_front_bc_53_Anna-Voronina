// import PropTypes from "prop-types";
// import {
//   StyledBtnCancel,
//   StyledBtnNext,
//   BtnWrapper,
// } from "./BtnComponent.styled";

// const BtnComponent = ({
//   submitButtonClicked,
//   nextStepClicked,
//   handleNextClick,
//   handleCancelClick,
//   hidden,
// }) => {
//   return (
//     <BtnWrapper>
//       {!submitButtonClicked && (
//         <StyledBtnNext
//           type="button"
//           variant="bigButtonSecond"
//           text="Next"
//           iconVariant="pawprint"
//           onClick={handleNextClick}
//           iconPosition="right"
//         />
//       )}
//       {nextStepClicked ? null : (
//         <StyledBtnCancel
//           icon="plus"
//           iconPosition="right"
//           type="button"
//           variant="cancelBtnAddPet"
//           text="Cancel"
//           onClick={handleCancelClick}
//           style={{ display: hidden ? "none" : "block" }}
//         />
//       )}
//     </BtnWrapper>
//   );
// };

// BtnComponent.propTypes = {
//   submitButtonClicked: PropTypes.bool.isRequired,
//   nextStepClicked: PropTypes.bool.isRequired,
//   handleNextClick: PropTypes.func.isRequired,
//   handleCancelClick: PropTypes.func.isRequired,
// };

// export default BtnComponent;
