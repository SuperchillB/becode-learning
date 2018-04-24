/*
// AJAX = Asynchronous JavaScript And Xml
// Synchronous means code is executed right away at once once the page is loaded
// Asynchronous means you need to wait for something before launching code. You make JS wait by using setTimeout(myFunction, 3000)

let myFunction = function() {
	console.log("Hello world");
}

setTimeout(myFunction, 3000); // launches code only once
setInterval(myFunction, 1000); // launches code multiple times

// AJAX: ability to get data from outside your code and print everything with a delay


// create a new instance of XMLHttpRequest
let ajax = new XMLHttpRequest(); // with XMLHttpRequest we are able to read other types of file in the browser
    // the action we will do when request is finished
    ajax.onload = function(){
    	// console.log(ajax); // shows a clickable list of properties
        // console.log(ajax.responseText); // will show what's in our json file
        let dataText = ajax.responseText;
        let dataObject = JSON.parse(dataText); // transforms text into object
        console.log(dataText); // prints out only text (string)
        console.log(dataObject); // prints out an actual object
    }
    // the type, the url, asynchronous ?
    ajax.open("GET", "mydata.json", true); // true means it's Asynchronous
    // send the request
    ajax.send(null);

    // OPEN THIS ON FIREFOX
// asynchronous always should be inside a function (??)

// it's all about chaining functions 1 by 1
// you first load (get) the data with a function that does that
// then you manipulate that data (again in a different function)
// then you display that manipulated data (again in a different function)
// at the end of each function before the closing "}" you call the function that follows then after you declare and describe that chained function

*/



// EXERCISES

// Part 1
let XHR = new XMLHttpRequest();

	let arrayA = []; // score > 750
	let arrayB = []; // score > 500
	let arrayC = []; // score < 500
	
	let whenDataLoaded = function () {
		let dataText = XHR.responseText;
		let dataObject = JSON.parse(dataText);
		manipulateData(dataObject);
		console.log(dataObject);
	}

	XHR.onload = whenDataLoaded;
	XHR.open("GET", "data.json", true);
	XHR.send();


	let manipulateData = function (data) {
		// data.add(randomNumber()); for(let i = 0, length1 = data.length; i <
		// length1; i++){ // seems to work pretty well with this for loop
		// data[i].score = randomNumber(); }
		let dataCopy = data.map(function(item) {
			item.score = Math.floor(Math.random() * 1000 + 1);
		});
		// dataCopy.sort(function(a, b) { 
		// 	return a.score - b.score; 
		// });
		sortByScore(data);
	}
	let sortByScore = function(item) {
		item.sort(function(a, b) { 
			return a.score - b.score; 
		});
		categorise(item);
	}
	let categorise = function(item) {
		item.forEach( function(element) {
			if (element.score >= 750) {
				arrayA.push(element);
			} else if (element.score >= 500) {
				arrayB.push(element);
			} else {
				arrayC.push(element);
			}
		});
		console.log(arrayA);
		console.log(arrayB);
		console.log(arrayC);
		bahrainCounter(item);
	}
	let bahrainCounter = function (item) {
		let filtered = item.filter(function(element){
			return element.country == "Bahrain";
		})
		// return filtered; // doesn't show anything but works
		let message = filtered.length + " people are from Bahrain";
		console.log(message); // works only when using console.log ...?
		highestScore(item);
	}
	let highestScore = function (item) {
		let sorted = item.sort(function(a, b){
			return a.score - b.score;
		});
		// let highest = sorted[sorted.length - 1];
		let message = "The highest score is " + sorted[sorted.length - 1].score;
		console.log(message);
		smallestScore(item);
	}
	let smallestScore = function (item) {
		let sorted = item.sort(function(a, b){
			return a.score - b.score;
		});
		// let smallest = sorted[0];
		let message = "The smallest score is " + sorted[0].score;
		console.log(message);
	}
	let addElement = function (message) {
		let dataChild = document.createElement("div");
		dataChild.appendChild(message);
		// create variable in each function that contains the sentence to be printed in console.log and append it to the dataChild

	}
	


	// function randomNumber() {
	// 	let randomNumber = Math.floor(Math.random() * 1000 + 1);
	// 	return randomNumber;
	// }























