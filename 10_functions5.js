var numbers = [1,2,3,4,5];
var constant = 3;
var curry = function(f){
  return function(a){
    return function(b){
      return f(a,b);
    };
  };
};
var map = curry(function(f,arr){
  return arr.map(f);
});

var mult = curry(function(a,b){
  return a * b;
});

multBY2 = mult(2);

var compute = function(numbers, constant){
  return map(mult(constant))(numbers);
}

var result = compute(numbers,constant);

console.log(numbers);
console.log(result);

