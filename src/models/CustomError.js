class CustomError extends Error {
  /**
   * @param {string} message
   * @param {string} name
   */
  constructor(name, message) {
    super(message);
    this.name = name;
    this.message = message;
  }
}
export default CustomError;
