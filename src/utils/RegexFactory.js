const testRegExp = (pattern, string) => {
  return new RegExp(pattern).test(string);
};

export { testRegExp };
