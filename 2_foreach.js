var stuff = require('./stuff');
var data = stuff.data();
var person  = data.person;
var drinks  = data.drinks;
console.log(data);

drinks.forEach(function(drink){
  person.drunkenness += drink.alcohol;
  drink.alcohol = 0 
  person.money -= drink.price;
  drink.price = 0
});

console.log(data);