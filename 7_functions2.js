var numbers = [1,2,3,4,5];
var constant = 3;
var mult = function(a,b){
  return a * b;
}

var result = numbers.map(function(n){
  return mult(n,constant);
});

console.log(numbers);
console.log(result);
