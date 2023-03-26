export const getCorrectForm = (length: number) => {
  const last = +length.toString().slice(-1);
  if (last === 1 && length !== 11) return "деталь";
  else if (
    (length > 10 && length < 20) ||
    (last >= 5 && last <= 9) ||
    last === 0
  )
    return "деталей";
  else return "детали";
};
