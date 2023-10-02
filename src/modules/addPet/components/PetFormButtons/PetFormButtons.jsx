import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/shared/components/Button/Button";
import { selectStep } from "@/redux/notices/noticesSelectors";
import {
  BtnWrapper,
  CancelBackIcon,
  CancelBackLink,
  LinkText,
} from "./PetFormButtons.styled";
import sprite from "../../../../shared/icons/sprite.svg";
import { updateStep } from "../../../../redux/notices/noticesSlice";

export const PetFormButtons = ({ backLinkLocation, linkText, btnText }) => {
  const dispatch = useDispatch();
  const step = useSelector(selectStep);

  const handleCancelBackLink = () => {
    if (step > 1) {
      dispatch(updateStep(step - 1));
    }
  };

  return (
    <BtnWrapper>
      <Button
        text={btnText}
        type="submit"
        icon="pawprint"
        iconPosition="right"
        variant="bigButtonSecond"
      />
      <CancelBackLink to={backLinkLocation} onClick={handleCancelBackLink}>
        <CancelBackIcon width={24} height={24}>
          <use href={sprite + "#arrow-left"}></use>
        </CancelBackIcon>
        <LinkText>{linkText}</LinkText>
      </CancelBackLink>
    </BtnWrapper>
  );
};

PetFormButtons.propTypes = {
  backLinkLocation: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};
