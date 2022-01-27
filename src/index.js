module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 0) {
    let objBracketsConfig = Object.fromEntries(bracketsConfig);
    let bracketsOpened = Object.keys(objBracketsConfig);

    let stackBrackets = [];

    for (let bracket of str) {
      if (
        bracket === objBracketsConfig[stackBrackets[stackBrackets.length - 1]]
      ) {
        stackBrackets.pop(bracket);
      } else if (bracketsOpened.includes(bracket)) {
        stackBrackets.push(bracket);
      }
    }

    return stackBrackets.length === 0;
  } else {
    return false;
  }
};
