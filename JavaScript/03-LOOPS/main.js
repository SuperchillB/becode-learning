// Exercice : Pair et impair
for (i = 0; i < 21; i++) {
	if (i % 2 === 0) {
		console.log(i + " is an even number");
	}
}

// Exercice : Multiplication Tables
for (i = 0; i < 11; i++) {
	let result = i * 9;
	console.log(i + " * " + "9 = " + result);
}

// Exercice : assigner des grades
for (i = 0; i < 101; i++) {
	ranks();
}
function ranks(){
	if (i >= 90) {
		console.log("Rank A since you have " + i + " points");
	}
	else if (i >= 80 && i < 90) {
		console.log("Rank B since you have " + i + " points");
	}
	else if (i >= 70 && i < 80) {
		console.log("Rank C since you have " + i + " points");
	}
	else if (i >= 65 && i < 70) {
		console.log("Rank D since you have " + i + " points");
	}
	else {
		console.log("Rank F since you have less than 65 points");
	}
}

// Exercice : pyramide
// for (i = 1; i < 6; i++) {
// 	let star = "*";
// 	console.log(star.repeat(i));
// }

// OR

let pyramide = '';
for (i = 0; i <= 4; i++) {
	pyramide = pyramide + '* ';
	console.log(pyramide);
}
