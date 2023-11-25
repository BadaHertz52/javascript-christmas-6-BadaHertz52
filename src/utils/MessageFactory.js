import { ERROR_MESSAGE, MESSAGE } from '../constants/index.js';

/**
 * @returns {string} 예약 방문일 오류 문구
 */
const getReservationDateErrorMessage = () => {
  const { header, reInput, reservationDate } = ERROR_MESSAGE;
  return `${header} ${reservationDate.basic} ${reInput} ${reservationDate.detail}`;
};

/**
 * @param {'duplicate'|'maxTotalNumberOfOrder'|'none'|'noOnlyBeverage'|'wrongOrderFormat'|'wrongNumberOfOrder'} errorDetail
 * @returns {string} 주문 오류 문구
 */
const getOrderErrorMessage = (errorDetail) => {
  const { header, reInput, order } = ERROR_MESSAGE;
  return `${header} ${order.basic} ${reInput} ${order[errorDetail]}`;
};
/**
 * @param {number} date
 * @returns {string} 이벤트 미리 보기 문구
 */
const getEventPreviewMessage = (date) => {
  const { header, footer } = MESSAGE.event.preview;
  return `${header}${date}${footer}`;
};

export {
  getEventPreviewMessage,
  getOrderErrorMessage,
  getReservationDateErrorMessage,
};
