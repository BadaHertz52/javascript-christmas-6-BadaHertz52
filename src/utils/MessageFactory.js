import { ERROR_MESSAGE, MESSAGE } from '../constants/index.js';

const getReservationDateErrorMessage = () => {
  const { header, reInput, reservationDate } = ERROR_MESSAGE;
  return `${header} ${reservationDate.basic} ${reInput} ${reservationDate.detail}`;
};

/**
 *
 * @param {'duplicate'|'maxTotalNumberOfOrder'|'none'|'noOnlyBeverage'|'wrongOrderFormat'|'wrongNumberOfOrder'} errorDetail
 * @returns
 */
const getOrderErrorMessage = (errorDetail) => {
  const { header, reInput, order } = ERROR_MESSAGE;
  return `${header} ${order.basic} ${reInput} ${order[errorDetail]}`;
};
/**
 *
 * @param {number} date
 * @returns
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
