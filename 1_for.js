var data = require('./stuff').data();
var person  = data.person;
var drinks  = data.drinks;
console.log(data);

for (var i = 0 ; i < drinks.length; i++) {
	var drink = drinks[i];
	person.drunkenness += drink.alcohol;
	drink.alcohol = 0 
	person.money -= drink.price;
	drink.price = 0
}

console.log(data);
