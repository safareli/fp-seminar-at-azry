var numbers = [1,2,3,4,5];
var constant = 3;


var result = numbers.map(function(n){
  return n * constant;
});

console.log(numbers);
console.log(result);