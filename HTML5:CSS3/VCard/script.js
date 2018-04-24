
// Logo color animation
var colors = ["#FF8A80", "#FF80AB", "#EA80FC", "#B388FF", "#8C9EFF", "#82B1FF", "#80D8FF", "#84FFFF", "#A7FFEB", "#B9F6CA", "#CCFF90", "#F4FF81", "#FFFF8D", "#FFE57F", "#FFD180", "#FF9E80"]
var active = 0;
setInterval(function(){
    // $(".text-front").css("fill", colors[active]);
    // $(".text-back").css("stroke", colors[active]);
    $("#text-front").css("fill", colors[active]);
    $(".text-back").css("fill", colors[active]);
    active++;
    if (active == colors.length) active = 0;
}, 5000); 

// Div appear on click
$("text").on("click", function(e){
	e.preventDefault();
	$(".text").animate({opacity: 1}, 2000);
	$(".text").css({"z-index": 0});
	$("svg").css({"-webkit-transform":"translateY(-200px)"});
})

// Logo slide & shrink on click
