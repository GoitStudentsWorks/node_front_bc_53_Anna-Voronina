import { format } from "date-fns";

export const formatBirthday = (date) => {
  if (date) {
    return format(new Date(date), "yyyy-MM-dd");
  }
};

export const formatSubmitBirthday = (date) => {
  if (date) {
    return date.split("-").reverse().join("-");
  }
};
