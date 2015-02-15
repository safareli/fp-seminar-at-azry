var numbers = [1,2,3,4,5];
var constant = 3;
var R = require('./ramda');

var mult = R.curry(function(a,b){
  return a * b;
});

var map = R.curry(function(f,arr){
  return arr.map(f);
});


var compose = function(f,g){
	return function(x){
		return f(g(x));
	};
};

var multAllBy = compose(map,mult);

var constant = 3;
var compute = multAllBy(constant);

console.log(compute(numbers));
console.log(multAllBy(5)(numbers));

