const convertToCelsius = function(num) {
  num -= 32;
  num *= (5/9);
  
  return Number(num.toFixed(1));
};

const convertToFahrenheit = function(num) {
  num *= (9/5);
  num += 32;
  
  return Number(num.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
