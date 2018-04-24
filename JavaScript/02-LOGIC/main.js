// Exercice : Langues
let language = 'es';
let message = '';
if (language == "en") {
	message = 'Hello world';
} else if (language == "es") {
	message = 'Hola, Mundo';
} else if (language == "fr") {
	message = 'Bonjour tout le monde';
}
console.log(message);

// Exercice : Affichage des scores
let score = 100;
let result = '';
if (score >= 90) {
	result = 'Rank A';
} else if (score < 90 && score > 50) {
	result = 'Rank B';
} else if (score <= 50) {
	result = 'Rank C';
}
console.log(result);

// Exercice : Mettre au pluriel
let singular = 'apple';
let number = 5;
let result2 = '';
if (number > 1) {
	result = "I have " + number + " " + singular + "s";
} else if (number == 1) {
	result = "I have just " + number + " " + singular;
}
console.log(result);