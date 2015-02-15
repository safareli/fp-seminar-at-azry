var stuff = require('./stuff')
var Drink = stuff.Drink;
var Person = stuff.Person;
var Data = stuff.Data;

var drinkAll = function(acc, drink){
  return Data(Person(
    acc.person.drunkenness + drink.alcohol,
    acc.person.money - drink.price
  ), acc.drinks.concat(Drink(0,0)));
};

module.exports = function(person, drinks){
	return drinks.reduce(drinkAll,Data(person,[]));
};
