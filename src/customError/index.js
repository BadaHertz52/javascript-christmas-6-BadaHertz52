class CustomError extends Error {
  constructor(name, message) {
    super(message);
    this.name = name;
    this.message = message;
    this.throwError();
  }
  throwError() {
    throw this;
  }
}
export default CustomError;
