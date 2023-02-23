const sumAll = function(...args) {
  if ((arguments[0] < 0 || arguments[1] < 0) || (typeof arguments[0] != 'number' || typeof arguments[1] != 'number')){
    return 'ERROR';
  }
  else{
    let sum = 0;
    for (let i = Math.min.apply(null, arguments); i <= Math.max.apply(null, arguments); ++i){
      sum += i;
    };
    return sum;
  };
};

// Do not edit below this line
module.exports = sumAll;
