	//Mexican Dude in Introduction
	var mexicanDude = document.getElementById("mexicanDude");
	var MDsrc1 = "src/img/mexicanDude1.png";
	var MDsrc2 = "src/img/mexicanDude2.png";
	var MDframe = 1;

	//For tortilla Counter
	var numOfTortillas = document.getElementById("tortillasConsumed");
	var numOfSeconds = document.getElementById("seconds");
	var seconds = 0, tortillas = 0, step = 2695; 

function setupEventHandles () {
	//Scroll Buttons
		//Down
	document.getElementById("cd1").addEventListener("click", scrollCD1);
	document.getElementById("cd2").addEventListener("click", scrollCD2);
	document.getElementById("cd3").addEventListener("click", scrollCD3);
		//Up
	document.getElementById("cu1").addEventListener("click", scrollCU1);
	document.getElementById("cu2").addEventListener("click", scrollCU2);
	document.getElementById("cu3").addEventListener("click", scrollCU3);

	//on Window Scroll
	$(window).scroll(animateMexicanDude);
}


//Animate the Mexican Dude in introduction
function animateMexicanDude () {
	console.log("Scroll Occured");
	//console.log(mexicanDude.src);

	if (MDframe === 1) {
		mexicanDude.src = MDsrc2;
	} else {
		mexicanDude.src = MDsrc1;
	}

	MDframe = MDframe * -1;
	console.log("Frame: " + MDframe);

	/*
	if (mexicanDude.src == "src/img/mexicanDude1.png") {
		mexicanDude.attr("src", "src/img/mexicanDude2.png");
		//console.log("Pic 2");
	} else {
		mexicanDude.src = "src/img/mexicanDude1.png";
		//console.log("Pic 1");
	}
	*/
}

//Start tortilla counter
function startCount () {
	var tortillaCounter = setInterval(animTortillas, 1000);
}

//Scroll Animations
	//Down
function scrollCD1 () {
	$("html, body").animate({ scrollTop: $('#intro').offset().top }, 1000);
}
function scrollCD2 () {
	$("html, body").animate({ scrollTop: $('#graph1').offset().top }, 1000);
}
function scrollCD3 () {
	$("html, body").animate({ scrollTop: $('#recipes').offset().top }, 1000);
}
	//Up
function scrollCU1 () {
	$("html, body").animate({ scrollTop: $('#bannerTop').offset().top }, 1000);
}
function scrollCU2 () {
	$("html, body").animate({ scrollTop: $('#intro').offset().top }, 1000);
}
function scrollCU3 () {
	$("html, body").animate({ scrollTop: $('#graph1').offset().top }, 1000);
}



//Animate tortilla counter
function animTortillas () {
	//check innerHTML of numOfTortillas
		//console.log("# of Tortillas " + numOfTortillas.innerHTML);

	//setup comma separator
	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')

	$('#seconds')
		.prop('number', seconds)
		.animateNumber({ number: seconds+1, numberStep: comma_separator_number_step});
	$('#tortillasConsumed')
		.prop('number', tortillas)
		.animateNumber({ number: tortillas+step, numberStep: comma_separator_number_step});
	
	//Increment seconds and tortillas
	seconds++;
	tortillas += step;
}

window.onload = function () {
	setupEventHandles();
	startCount();
}