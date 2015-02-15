var stuff = require('./stuff')
var Drink = stuff.Drink;
var Person = stuff.Person;

var data = stuff.data();
var person  = data.person;
var drinks  = data.drinks;
console.log(data);

var mPerson = person;
var mDrinks = drinks.map(function(drink){
  mPerson = Person(
    mPerson.drunkenness + drink.alcohol,
    mPerson.money - drink.price
  );
  return Drink(0,0);
});

console.log(data);
console.log({
	person: mPerson,
	drinks: mDrinks
});

