var numbers = [1,2,3,4,5];
var constant = 3;
var R = require('./ramda');

// mult: a -> (b -> c)
var mult = R.curry(function(a,b){
  return a * b;
});

// map: (a->b) -> ([a] -> [b])
var map = R.curry(function(f,arr){
  return arr.map(f);
});

// multAllBy: c -> ([c] -> [c])
var multAllBy = function(constant){
  return map(mult(constant));
};

var constant = 3;
// compute: [c] -> [c]
var compute = multAllBy(constant);

console.log(compute(numbers));
console.log(multAllBy(5)(numbers));

