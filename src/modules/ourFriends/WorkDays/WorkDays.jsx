import PropTypes from "prop-types";
import { StyledDate, StyledItem, StyledList } from "./WorkDays.styled";

const daysOfWeek = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"];

export const WorkDays = ({ days, isActive, toggleActive }) => {
  return (
    <StyledDate>
      <StyledList $isActive={isActive} onClick={() => toggleActive(!isActive)}>
        {isActive
          ? days.map((day, idx) => (
              <StyledItem key={idx}>
                {daysOfWeek[idx]} {day.from} - {day.to}
              </StyledItem>
            ))
          : `${days[0].from} - ${days[0].to}`}
      </StyledList>
    </StyledDate>
  );
};

WorkDays.propTypes = {
  days: PropTypes.array,
  isActive: PropTypes.bool,
  toggleActive: PropTypes.func,
};
