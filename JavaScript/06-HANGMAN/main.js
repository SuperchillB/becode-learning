// HANGMAN EXERCISE

let letters = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];

let guessedLetters = ['', '', '', '', '', '', ''];

let reachedValue = 0;

let correct = [];

let incorrect = [];

/*
// Working solution (with bonus)

function guessLetter (e) {
	if (letters.indexOf(e) > -1) { // if e is found in the array "letters"
		for (let i = 0; i < letters.length; i++) {
			if ((e === letters[i]) && (e !== guessedLetters[i])) {
				guessedLetters[i] = letters[i];
				correct.push(e);
				reachedValue++;
				console.log(guessedLetters);
			}
		}
	} else if (letters.indexOf(e) <= -1) { // if e is not found in the array "letters"
		if (incorrect.indexOf(e) <= -1) { // counts same e entered multiple times as once only
			incorrect.push(e);
		}
		
	}
	if (reachedValue === letters.length) { // detects end of game
		console.log("Congrats! You finished the game!");
	}
}

while (reachedValue != letters.length) { // keeps game going until all the correct values are guessed
	let letter = prompt("Guess a letter").toUpperCase();
	guessLetter(letter);
}

console.log(incorrect); // prints all the incorrect answers
*/


// Answer with prompt and bonus

function guessLetter () {
	while ((reachedValue != letters.length) && (incorrect.length != 7)) {
		let letter = prompt("Guess a letter").toUpperCase();
		if (letters.indexOf(letter) > -1) { // if letter is found in the array "letters"
			for (let i = 0; i < letters.length; i++) {
				if ((letter === letters[i]) && (letter !== guessedLetters[i])) {
					guessedLetters[i] = letters[i];
					correct.push(letter);
					reachedValue++;
					console.log(guessedLetters);
				}
			}
		} else if (letters.indexOf(letter) <= -1) { // if letter is not found in the array "letters"
			if (incorrect.indexOf(letter) <= -1) { // counts same letter entered multiple times as once only
				incorrect.push(letter);
			}
		}
		if (reachedValue === letters.length) { // detects end of game
			console.log("Congrats! You finished the game!");
		}
		}
	}
}

guessLetter();

console.log(incorrect); // prints all the incorrect answers


/*
// Answer with inputs and bonus

function guessLetter () {
	while ((reachedValue != letters.length) && (incorrect.length != 7)) {
		let letter = document.querySelectorAll('#text').toUpperCase();
		let button = document.querySelectorAll('#btn');
		button.addEventListener('click', function () {
			if (letters.indexOf(letter) > -1) { // if letter is found in the array "letters"
				for (let i = 0; i < letters.length; i++) {
					if ((letter === letters[i]) && (letter !== guessedLetters[i])) {
						guessedLetters[i] = letters[i];
						correct.push(letter);
						reachedValue++;
						console.log(guessedLetters);
					}
				}
			} else if (letters.indexOf(letter) <= -1) { // if letter is not found in the array "letters"
				if (incorrect.indexOf(letter) <= -1) { // counts same letter entered multiple times as once only
					incorrect.push(letter);
				}
			}
			if (reachedValue === letters.length) { // detects end of game
				console.log("Congrats! You finished the game!");
			}
		})
	}
}

guessLetter();

console.log(incorrect); // prints all the incorrect answers
*/





















