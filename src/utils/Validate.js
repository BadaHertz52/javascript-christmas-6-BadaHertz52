const isSuitableForNumber = (pattern, string) => {
  return new RegExp(pattern).test(string);
};

export { isSuitableForNumber };
