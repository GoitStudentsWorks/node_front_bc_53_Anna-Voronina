import { ProgressText, ProgressWrapper } from "./ProgressBar.styled";

const ProgressBar = () => {
  return (
    <ProgressWrapper>
      <ProgressText>Choose option</ProgressText>
      <ProgressText>Personal details</ProgressText>
      <ProgressText>More info</ProgressText>
    </ProgressWrapper>
  );
};

export default ProgressBar;
