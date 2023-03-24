const getDateMonthString = (date: Date) =>
  date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

export const formatDateString = (
  dateString: string | Date,
  separator = ".",
) => {
  const date = new Date(dateString);
  return `${
    date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  }${separator}${getDateMonthString(date)}${separator}${date.getFullYear()}`;
};
