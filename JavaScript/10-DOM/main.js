// you're on FB and someone uploads a new post
// instead of refreshing your page, the new post will be shown automatically
// JavaScript was behind this (using innerText or innerHTML)

// if multiple elements in your html have the same class name, each of these elements will be considered as an array altogether. So if you want to modify several elements with the same class name you will need to use a loop.

// className[i].style.background OR className[i].style.["background"] since it's an array

// CREATE A NEW ELEMENT WITH JS:
// let recipient = document.getElementById("recipient"); // STATING A PARENT THAT WILL CONTAIN THE NEW ELEMENT
// let NewElement = document.createElement("div"); // CREATING THE NEW ELEMENT
// let NewElement.innerText = "hello world"; // GIVING NEW ELEMENT SOME CONTENT
// recipient.appendChild(newElement) // ADDS THE NEW ELEMENT TO ITS PARENT

// CREATE CLASS AND APPLY IT TO ELEMENT
// newElement.className = "superClass";
// OR
// newElement.classList.Add("superClass"); (new method)


