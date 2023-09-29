import PropTypes from "prop-types";
import { StyledDate, StyledItem, StyledList } from "./WorkDays.styled";
import { StyledP } from "../OurFriendsCard/OurFriendsCard.styled";

const daysOfWeek = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"];

export const WorkDays = ({ days, isActive, toggleActive }) => {
  return (
    <StyledDate>
      {isActive ? (
        <StyledList
          $isActive={isActive}
          onClick={() => toggleActive(!isActive)}
        >
          {days.map((day, idx) => (
            <StyledItem key={idx}>
              {daysOfWeek[idx]} {day.from} - {day.to}
            </StyledItem>
          ))}
        </StyledList>
      ) : (
        <StyledP>
          {days[0]?.from} - {days[0]?.to}
        </StyledP>
      )}
    </StyledDate>
  );
};

WorkDays.propTypes = {
  days: PropTypes.array,
  isActive: PropTypes.bool,
  toggleActive: PropTypes.func,
};
