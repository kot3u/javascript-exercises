const removeFromArray = function (inputArray, ...args) {
  return inputArray.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
