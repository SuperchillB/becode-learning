// Different ways to create functions

	function sayHello1() { // NOT ADVISED especially if you call the function before declaring it
		console.log("hello world");
	}

	let sayHello2 = function(){ // BEST OPTION
		console.log("hello world");
	}

	var sayHello3 = () => { // GOOD FOR CALLBACKS
		console.log("hello world");
	}

	sayHello1();

// Parameters
// We have this function ...
	let sayHelloVar1 = function(){
		for (let i = 1; i < 3; i++) {
			console.log("hello world " + i)
		}
	}

	sayHelloVar1();

// ... but we want to be able to change the number of times "hello world" is printed:
	let sayHelloVar2 = function(times){
		for (let i = 1; i < times + 1; i++) {
			console.log("hello world " + i)
		}
	}

	sayHelloVar2(5);

// standardising a parameter
	function hello(word = "world", secondParam = "someone else") {
		console.log("hello " + word + " and " + secondParam);
	}

	hello("Teddy");
	hello();
	hello("Bertie", "Jane");
	let yolo = hello("John", "Jack");
	console.log(yolo);

// Global and local variables

	// let school = "BeCode";
	// function hello2 () {
	// 	let school = "School 42";
	// }
	// school = "Awesome Becode";
	// hello2();
	// console.log(school);
	/* this will print "Awesome Becode" */

	let school = "BeCode";
	function hello2 () {
		school = "School 42";
	}
	school = "Awesome Becode";
	hello2();
	console.log(school);
	/* this will print "School 42" because the "school" variable is not created inside the function like in the previous example. It's instead changed again inside the function. */

// RECURSIVE FUNCTIONS
// better to use this than while loops if you make complicated loops

let count = 0; // you HAVE to refer to a global variable or else infinite loop!

let increase = function () {
	count++;
	if (count < 10) { // if you don't use conditions inside recursive functions it will crash your browser (infinite loop)
		increase();
	}
}

// Callback functions
setTimeout(function(){ // can't be called outside of this
   console.log("Hello")
}, 1000)


// EXERCISES

// Exercice : Calculs

function substraction (num1, num2) {
	return num1 - num2;
}
let substract = substraction(10, 2);

function division (num1, num2){
	return num1 / num2;
}
let divide = division(20, 2);

function multiplication (num1, num2) {
	return num1 * num2;
}
let multiply = multiplication(5, 3);

function percentageOf (num, percentage) {
	return percentage + "% of " + num + " is " + (num * percentage * 0.01);
}
let percent = percentageOf(25, 10);

function speedCalculator (distance, time) {
	let speed = distance / time;
	return speed + "km/h";
}
let speedOf = speedCalculator(100, 2);

console.log(substract);
console.log(divide);
console.log(multiply);
console.log(percent);
console.log(speedOf);


