// In the console when you display an array, 
// click on the dark arrow next to it and it will list 
// all the items in the form of an object (1: item1 ...)
// click on the arrow below (__proto__) and THIS WILL SHOW
// ALL THE METHODS YOU CAN USE WITH ARRAYS

/*

let groceries = ["apples", "oranges", "raspberries"];

// if you say
let copyOfGroceries = groceries;

// and then you want to add something to copyOfGroceries, you can't do this:
copyOfGroceries = copyOfGroceries.unshift("hello world");

// INSTEAD you have to do this:
let copyOfGroceries = [...groceries]; // spread operator (brand new method)
// OR
let copyOfGroceries = groceries.slice(); //  older method
// then
copyOfGroceries.unshift("hello world")

// map() method
copyOfGroceries.map()

*/


// EXERCISES

// Exercice : addition
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function additionOf(array) {
	let result = 0;
	array.forEach(function(element) {
		result += element;
	});
	return result;
}
additionOf(numbers);

// Exercice : Vos meilleurs choix
let actors = ["Brad Pitt", "Sean Penn", "Kristen Wiig"];
for (let i = 0; i < actors.length; i++) {
	console.log("Number " + (i + 1) + " is " + actors[i]);
}

let counter = ["first", "second", "third"];
for (let i = 0; i < actors.length; i++) {
	console.log("The " + counter[i] + " is " + actors[i]);
}

// Exercice : clone
let gameHeroes = ["Mario", "Luigi", "Peach"];
gameHeroesCopy = gameHeroes.slice();
gameHeroesCopy.push("Bowser");