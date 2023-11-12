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
/**
 *
 * @param {number} date
 * @returns
 */
const getEventPreviewMessage = (date) => {
  const { header, footer } = MESSAGE.event.preview;
  return `${header}${date}${footer}`;
};

const getOutputHeader = (string) => `<${string}>`;

export { getErrorMessage, getEventPreviewMessage, getOutputHeader };
