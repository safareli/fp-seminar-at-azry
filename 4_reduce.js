var stuff = require('./stuff')
var Drink = stuff.Drink;
var Person = stuff.Person;
var Data = stuff.Data;

var data = stuff.data();

var result = data.drinks.reduce(function(acc, drink){
  return Data(
    Person(
      acc.person.drunkenness + drink.alcohol,
      acc.person.money - drink.price
    ),
    acc.drinks.concat(Drink(0,0)));
}, Data(data.person, []));

console.log(data);
console.log(result);