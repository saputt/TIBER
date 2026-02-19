export const getWeekNumberFromStart = (startDateString) => {
  const start = new Date(startDateString);
  const now = new Date();

  const diffInMs = now - start;

  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  const weekNumber = Math.ceil((diffInDays + 1) / 7);

  return weekNumber;
};
