// EXERCISE 1: Manipulation de classes

let bodyElement = document.querySelector("body");
bodyElement.classList.remove("bg-aqua");
bodyElement.classList.add("bg-olive");

let firstParagraph = document.getElementById("first-paragraph");
firstParagraph.classList.remove("bg-lime", "gray");
firstParagraph.classList.add("aqua");

let silverClass = document.querySelectorAll(".bg-silver");
for (let i = 0; i < silverClass.length; i++) {
	silverClass[i].classList.remove("bg-silver");
	silverClass[i].classList.add("bg-teal");
}

let blockquoteElements = document.getElementsByTagName("blockquote");
for (let i = 0; i < blockquoteElements.length; i++) {
	blockquoteElements[i].classList.add("bg-white");
}


// EXERCISE 2:

let myTableElement = document.querySelector("#my-table");
myTableElement.classList.add("bg-purple");

let paragraphsInContainer = document.querySelectorAll(".container p");
for (let i = 0; i < paragraphsInContainer.length; i++) {
	paragraphsInContainer[i].classList.add("shadow");
}


// EXERCISE 3:

let preElements = document.getElementsByTagName("pre");
for (let i = 0; i < preElements.length; i++) {
	preElements[i].style.color = "pink";
	preElements[i].style.backgroundColor = "cyan";
	preElements[i].style.borderTop = "3px solid red";
	preElements[i].style.borderBottom = "3px solid red";
}

let h3Element = document.querySelector("h3");
h3Element.innerHTML = "<em>Italic title ! yeah !</em>"

let h2Element = document.querySelector("h2");
h2Element.innerText = "<strong>HTML doens't work !</strong>";


// EXERCISE 4:

let firstUlElement = document.getElementsByTagName("ul")[0];
let newElement = document.createElement("li");
newElement.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
firstUlElement.appendChild(newElement);

let linkInNewElement = document.querySelector("ul li a");
linkInNewElement.style.color = "black";


// EXERCISE 4 (bis)

let olElement = document.querySelector("ol");
let olElementChildren = olElement.children;
for (let i = olElementChildren.length - 1; i >= 0; i--) {
	olElement.removeChild(olElementChildren[i]);
}

let array = ["Silent Teacher", "Code Monkey", "CodeCombat"];

for (let i = 0; i < array.length; i++) {
	let newLi = document.createElement("li");
	newLi.appendChild(document.createTextNode(array[i]));
	olElement.appendChild(newLi);
}