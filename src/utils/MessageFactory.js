import { ERROR_MESSAGE, MESSAGE } from '../constants/index.js';
/**
 *
 * @param {*} error
 * @returns
 */
const getErrorMessage = (error) => {
  const { header, footer } = ERROR_MESSAGE;
  return `${header} ${error} ${footer}`;
};
const getReservationDateErrorMessage = () => {
  return getErrorMessage(ERROR_MESSAGE.reservationDate);
};

/**
 *
 * @param {'duplicate'|'maxTotalNumberOfOrder'|'none'|'noOnlyBeverage'|'wrongOrderFormat'|'wrongNumberOfOrder'} errorDetail
 * @returns
 */
const getOrderErrorMessage = (errorDetail) => {
  return getErrorMessage(
    ERROR_MESSAGE.order.basic + ' ' + ERROR_MESSAGE.order[errorDetail],
  );
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
