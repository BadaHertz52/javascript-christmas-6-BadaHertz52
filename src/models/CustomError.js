class CustomError extends Error {
  constructor(name, message) {
    super(message);
    this.name = name;
    this.message = message;
  }
}
export default CustomError;
