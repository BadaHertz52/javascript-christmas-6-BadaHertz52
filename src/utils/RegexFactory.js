/**
 * @param {string} pattern : 정규 표현식의 패턴
 * @param {string} string  : 정규 표현식으로 테스트한 물장
 * @returns {boolean} : 정규표현식 테스트 통과 여부
 */
const testRegExp = (pattern, string) => {
  return new RegExp(pattern).test(string);
};

export { testRegExp };
