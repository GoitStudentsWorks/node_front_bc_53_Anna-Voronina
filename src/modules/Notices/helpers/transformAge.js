export const transformAge = (age) => {
  if (age < 1) {
    const res = age * 10;

    return res + " " + "m.";
  }
  if (age === 1) {
    return age + " " + "year";
  }
  if (age >= 2) {
    return age + " " + "years";
  }
};
