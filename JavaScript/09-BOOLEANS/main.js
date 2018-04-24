

let myVariable = 1000;

if(myVariable) {
	console.log("True");
} else {
	console.log("false");
}

// if you change myVariable to 0 it will print false



// EXERCISE: Juste prix
let counter = 1;
let message = ["Too high! Try again :)", "Too low! Try again :)", "About time...! It took you like " + counter + " attempts to guess this right!"];
let min = 20;
let max = 80;

function randomNumber () {
	let random = Math.floor(Math.random() * (max - min + 1) + min);
	return random;
}


// WITHOUT ARGUMENT, WITH RECURSIVE FUNCTIONS

let numToGuess = randomNumber();
console.log(numToGuess);

function validNumber() {
	let guess = prompt("Guess a number between " + min + " and " + max);
	counter++;
	if (guess != null) {
		if (guess > numToGuess) {
			// return prompt(message[0]);
			alert("Too high! Try again :)");
			// guess = prompt("Too high! Try again :)");
			validNumber();
		} else if (guess < numToGuess) {
			// return prompt(message[1]);
			alert("Too low! Try again :)");
			// guess = prompt("Too low! Try again :)");
			validNumber();
		} else if (guess < min || guess > max) {
			alert("Guess a number between " + min + " and " + max);
			validNumber();
		} else {
			alert("About time...! It took you like " + counter + " attempts to guess this right!");
		}		
	}
	// if (guess === numToGuess) {
		// return alert(message[2]);
		// console.log("About time...! It took you like " + counter + " attempts to guess this right!");
		// alert("About time...! It took you like " + counter + " attempts to guess this right!");
	// }
}

validNumber();


/*
// WITHOUT ARGUMENT, WITH WHILE LOOP

// DECLARE random VARIABLE AS EMPTY!

// let numToGuess = randomNumber();
console.log(numToGuess);

function validNumber() {
	// let guess = prompt("Guess a number between 20 and 80");
	// counter++;
	while (guess !== numToGuess) {
		if (guess > numToGuess) {
			// return prompt(message[0]);
			console.log("Too high! Try again :)");
			prompt("Too high! Try again :)");
			counter++;
		} else if (guess < numToGuess) {
			// return prompt(message[1]);
			console.log("Too low! Try again :)");
			prompt("Too low! Try again :)");
			counter++;
		} else if (guess < 20 || guess > 80) {
			console.log("Guess a number between 20 and 80");
			counter++;
		} 
	}
	console.log("About time...! It took you like " + counter + " attempts to guess this right!");
	alert("About time...! It took you like " + counter + " attempts to guess this right!");		
	guess = prompt("Guess a number between 20 and 80");
	// if (guess === numToGuess) {
		// return alert(message[2]);
		// console.log("About time...! It took you like " + counter + " attempts to guess this right!");
		// alert("About time...! It took you like " + counter + " attempts to guess this right!");
	// }
}

let guess = prompt("Guess a number between 20 and 80");
validNumber();
*/


// try using only prompt and not console.log()