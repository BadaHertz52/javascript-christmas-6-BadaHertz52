import { ERROR_MESSAGE, MESSAGE } from '../constants/index.js';
/**
 *
 * @param {*} error
 * @returns
 */
const getErrorMessage = (error) => {
  const { header, footer } = ERROR_MESSAGE;
  return `${header}${error}${footer}`;
};
const getReservationDateErrorMessage = () => {
  return getErrorMessage(ERROR_MESSAGE.reservationDate);
};

const getOrderErrorMessage = () => {
  return getErrorMessage(ERROR_MESSAGE.order);
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
