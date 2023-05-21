const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	final =0;
  for (b of a) {
    final += b;
  }
  return final;
};

const multiply = function(a) {
  final = 1;
  for (b of a){
    final *= b;
  }
  return final;
};

const power = function(a,num) {
	let final = 1;
  for (let i=0;i<num;i++){
    final *= a;
  }
  return final;
};

const factorial = function(a) {
  final =1;
  for (let num = a; num >0;num--){
     final *= num;
  }
  return final;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
