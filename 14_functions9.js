var numbers = [1,2,3,4,5];
var constant = 3;
var R = require('./ramda');

var multAllBy = R.compose(R.map, R.multiply);
var compute = multAllBy(constant);

console.log(compute(numbers));
console.log(multAllBy(5)(numbers));

