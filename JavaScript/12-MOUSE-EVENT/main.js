// EXERCISE 1

let divHover = document.querySelectorAll('.hoverMe');
for(let i = 0; i < divHover.length; i++){
	divHover[i].addEventListener('mouseover', function(){
		this.classList.add('vanish')
		// this.style.visibility = "hidden";
		// this.style.opacity = 0;
	})
}

// EXERCISE 2

let btnDiv = document.getElementById('reset');
btnDiv.addEventListener('click', function(){
	for(let i = 0, length1 = divHover.length; i < length1; i++){
		divHover[i].classList.remove('vanish');
		// divHover[i].style.opacity = 1;
	}
})

// EXERCISE 3

let xAxis = document.getElementById('axe-x');
let yAxis = document.getElementById('axe-y');

document.querySelector('body').addEventListener('mousemove', function(element){
	let x = "X: " + event.clientX;
	let y = "Y: " + event.clientY;
	xAxis.innerHTML = x;
	yAxis.innerHTML = y;
});