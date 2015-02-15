var numbers = [1,2,3,4,5];
var constant = 3;
var mult = function(a,b){
  return a * b;
};
var multBy = function(by){
  return function(what){
    return mult(what,by);
  };
};

var compute = function(numbers, constant){
  return numbers.map(multBy(constant));
}

var result = compute(numbers,constant);

console.log(numbers);
console.log(result);
