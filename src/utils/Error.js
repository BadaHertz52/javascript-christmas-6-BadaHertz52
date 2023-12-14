import CustomError from '../CustomError.js';
import { ERROR_MESSAGE } from '../constants/index.js';
/**
 * @param {string} key ERROR_MESSAGE 속성의 key
 */
export const getErrorMessage = (key) => {
  return `${ERROR_MESSAGE.basic} ${ERROR_MESSAGE[key]}`;
};

/**
 * @param {string} name 오류가 난 부분
 * @param {string} message 추가적인 오류 메세지(, 어떠한 형식으로 작성해야하는 지에 대한 내용)
 */
export const throwError = (name, message) => {
  throw new CustomError(name, message);
};
