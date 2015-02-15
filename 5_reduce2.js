var stuff = require('./stuff')
var drinker = require('./drinker')

var data = stuff.data();
var result = drinker(data.person, data.drinks);

console.log(data);
console.log(result);