const palindromes = function (string) {
  let stringm = string.replace(/[^a-zA-Z]/g, "").toLowerCase()
  if (reverseString(stringm) === stringm){
    return true;
  } 

  return false;
};

const reverseString = function (string) {
  let reversed = '';
  for (i = 1; i <= string.length; ++i) {
    reversed += string[string.length - i];
  };
  return reversed;
};

// Do not edit below this line
module.exports = palindromes;
