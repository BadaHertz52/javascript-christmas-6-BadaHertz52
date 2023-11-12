import { ERROR_MESSAGE, MESSAGE } from '../constants/index.js';
/**
 *
 * @param {*} error
 * @returns
 */
const getErrorMessage = (error) => {
  const { header, footer } = ERROR_MESSAGE;
  return `${header}${error}${footer}`;
const getReservationErrorMessage = () => {
  const reservation = ERROR_MESSAGE.reservation;
  const reservationError = `${reservation.basic}${reservation.range}`;
  return getErrorMessage(reservationError);
};
/**
 *
 * @param {"minNumber"|"maxNumber"|"noMenuDelimiter"|
 * "wrongType"|"noOnlyBeverage"} error  :메뉴 입력에 대한 오류 중 해당되는 오류로, ERROR_MESSAGE.menu의 property key 값
 */
const getMenuErrorMessage = (error) => {
  const menu = ERROR_MESSAGE.menu;
  const menuError = `${menu.basic}${menu[error]}`;
  return getErrorMessage(menuError);
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
  getErrorMessage,
  getEventPreviewMessage,
  getMenuErrorMessage,
  getReservationErrorMessage,
};
