const compareDate = (date1, date2) => {
  let dateA = new Date(date1);
  let dateB = new Date(date2);
  if (dateA > dateB) return 1;
  if (dateA < dateB) return -1;
  return 0;
};

const compareWithToday = (date) => {
  let dateA = new Date(date);
  let dateB = new Date();
  if (dateA > dateB) return 1;
  if (dateA < dateB) return -1;
  return 0;
};

export const SHARE_FUNCTIONS = { compareDate, compareWithToday };
