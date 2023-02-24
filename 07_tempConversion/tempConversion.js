const convertToCelsius = function (temprerature) {
  let cels = (temprerature - 32) * (5 / 9);
  return (Math.round(cels * 10) / 10);
};

const convertToFahrenheit = function (temprerature) {
  let faranheit = temprerature * 9 / 5 + 32
  return (Math.round(faranheit * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
