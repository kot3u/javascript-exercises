const reverseString = function (string) {
  let reversed = '';
  for (i = 1; i <= string.length; ++i) {
    reversed += string[string.length - i];
  };
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
