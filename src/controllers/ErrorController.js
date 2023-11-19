import { CustomError } from '../models/index.js';

class ErrorController {
  #error;
  constructor(name, message) {
    this.#error = new CustomError(name, message);
  }
  throwError() {
    throw this.#error;
  }
}

export default ErrorController;
