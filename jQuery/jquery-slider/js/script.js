// $(document).ready(function() {
// 	let counter = 0;
// 	let counterPrev = 0;
// 	$('#next').on('click', function() {
// 		counter++;
// 		let newLeftNext = counter * 600;

// 		console.log('counter = ' + counter);
// 		console.log('newLeftNext is ' + newLeftNext);

// 		if (newLeftNext > 1200) {
// 			counter = 0;
// 			$('#carrousel ul').css({
// 				left: 0 + "px"
// 			})
// 		} else {
// 			$('#carrousel ul').css({
// 				left: -newLeftNext + "px"
// 			})
// 		}
// 	})
// 	$('#prev').on('click', function() {
// 		counter--;
// 		let newLeftPrev = counter * 600;
// 		$('#carrousel ul').css({
// 			left: -newLeftPrev + "px"
// 		})
// 		console.log('counter = ' + counter);
// 		console.log('newLeftPrev is ' + newLeftPrev);

// 		if (newLeftPrev > 0) {
			
// 		}
// 	})
// });


$(document).ready(function($){

	let imageWidth = $('#carrousel ul li').first().children('img').width();
	let imageCount = $('#carrousel ul').children('li').length;
	let currentImage = 0;

	$('#carrousel ul').css('width', imageWidth*imageCount);
	console.log(imageWidth);

	$('#next').on('click', function() {
		if (currentImage === imageCount) {
			currentImage = 1;
			transition(currentImage, imageWidth);
		} else {
			currentImage++;
			transition(currentImage, imageWidth);
		}
	})
	$('#prev').on('click', function() {
		clearTimeout(slideshow);
		slideshow = null;
		if (currentImage === 1) {
			currentImage = imageCount;
			transition(currentImage, imageWidth);
		} else {
			currentImage--;
			transition(currentImage, imageWidth);
		}
	})

	function transition (currentImageElement, imageWidthElement) {
		let pxValue = -(currentImageElement-1) * imageWidthElement;
		$('#carrousel ul').animate({
			left: pxValue
		});
	}

	// slideshow();

	// function slideshow() {
	// 	setTimeout(function(){
	// 		$('#next').click();
	// 		slideshow();
	// 	}, 2000)
	// }

	// let slideshow = function() {
	// 	$('#next').click();
	// 	setTimeout(slideshow, 2000);
	// }

	// slideshow();

	// if(slideshow){
	//     clearTimeout(slideshow);
	//     slideshow = null;
	// }


	let slideshow = function() {
		$('#next').click();
		setTimeout(slideshow, 2000);
	}

	slideshow();

	// $('#prev').on('click', function() {
	// 	// if(slideshow){
	// 	    clearTimeout(slideshow);
	// 	    slideshow = null;
	// 	// }
	// });
});




// if image's x position is less than a specific number (e.g. -100) then image gets moved all the way to the rightand everything starts all over again 

