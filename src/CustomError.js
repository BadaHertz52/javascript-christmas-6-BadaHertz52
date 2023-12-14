class CustomError extends Error {
  /**
   * @param {string} name 오류가 난 부분
   * @param {string} message 추가적인 오류 메세지(, 어떠한 형식으로 작성해야하는 지에 대한 내용)
   */
  constructor(name, message) {
    super(message);
    this.name = `${name} error`;
  }
}

export default CustomError;
