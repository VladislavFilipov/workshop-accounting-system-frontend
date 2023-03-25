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

export const formatDateStringToTime = (dateString: string | Date) => {
  const date = new Date(dateString);
  return (
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
  );
};

export const formatDateStringWithTime = (dateString: string | Date) => {
  const date = new Date(dateString);
  return `${formatDateString(date)} ${formatDateStringToTime(date)}`;
};
