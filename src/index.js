module.exports = function check(str, bracketsConfig) {
  for (const brackets of bracketsConfig) {
    if (str.split(brackets[0]).length - 1 !== str.split(brackets[1]).length - 1)
      return false;
  }
  
  let stack = [];
  let objBrackets = Object.fromEntries(bracketsConfig);

  for (const symbol of str) {
    if (objBrackets[stack[stack.length - 1]] === symbol) {
      stack.pop();
    } else if (symbol in objBrackets) {
      stack.push(symbol);
    }
  }

  return stack.length === 0;
};
