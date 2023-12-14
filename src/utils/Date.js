const getDay = (date) => {
  return new Date(`2023-12-${date}`).getDay();
};
/**
 * @param {number|string} date
 * @param {number} start : 이벤트 시작일
 * @param {number} end  : 이벤트  종료일
 * @returns
 */
export const isInTargetPeriod = (date, start, end) => {
  const day = getDay(date);

  return new RegExp(`^[${start}-${end}]$`).test(day);
};
