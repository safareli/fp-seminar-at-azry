var args2Obj = function args2Obj () {
  var keys = Array.prototype.slice.apply(arguments);
  return function () {
    var values = Array.prototype.slice.apply(arguments);
    return keys.reduce(function (result,key,index) {
      result[key] = values[index];
      return result;
    },{});
  };
};

var Person = args2Obj('drunkenness','money');
var Drink = args2Obj('price','alcohol');
var Data = args2Obj('person','drinks');

module.exports.Drink = Drink;
module.exports.Person = Person;
module.exports.Data = Data;
module.exports.data = function(){
  return Data(Person(0,100), [
      Drink(10, 10),
      Drink(40, 40),
      Drink(2, 2),
      Drink(5, 5)
  ]);
}