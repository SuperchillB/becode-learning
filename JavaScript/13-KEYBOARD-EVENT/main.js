// EXERCISE 1

let character = document.getElementById('character');

document.body.addEventListener('keypress', function(event){
	let keyName = event.keyCode;
	switch (keyName) {
		case 48:
			character.style.backgroundColor = "cyan";
			break;
		case 49:
			character.style.backgroundColor = "black";
			break;
		case 50:
			character.style.backgroundColor = "green";
			break;
		case 51:
			character.style.backgroundColor = "red";
			break;
		case 52:
			character.style.backgroundColor = "orange";
			break;
		case 53:
			character.style.backgroundColor = "yellow";
			break;
		case 54:
			character.style.backgroundColor = "grey";
			break;
		case 55:
			character.style.backgroundColor = "brown";
			break;
		case 56:
			character.style.backgroundColor = "blue";
			break;
		case 57:
			character.style.backgroundColor = "lightgrey";
			break;
	}
})

// EXERCISE 2

let up = document.getElementById('up');
let down = document.getElementById('down');
let left = document.getElementById('left');
let right = document.getElementById('right');

document.body.addEventListener('keydown', function(event){
	let pressedKey = event.keyCode;
	switch (pressedKey) {
		case 38:
			up.classList.add('highlight');
			break;
		case 40:
			down.classList.add('highlight');
			break;
		case 37:
			left.classList.add('highlight');
			break;
		case 39:
			right.classList.add('highlight');
			break;
	}
})
document.body.addEventListener('keyup', function(){
	let pressedKey = event.keyCode;
	switch (pressedKey) {
		case 38:
			up.classList.remove('highlight');
			break;
		case 40:
			down.classList.remove('highlight');
			break;
		case 37:
			left.classList.remove('highlight');
			break;
		case 39:
			right.classList.remove('highlight');
			break;
	}	
})







