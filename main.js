
	var numOfTortillas = document.getElementById ("tortillasConsumed");
	var numOfSeconds = document.getElementById ("seconds");
	var seconds = 0, tortillas = 0, step = 2695;

function setupEventHandles () {
	//Scroll Buttons
	document.getElementById("c1").addEventListener("click", scrollC1);
	document.getElementById("c2").addEventListener("click", scrollC2);
	document.getElementById("c3").addEventListener("click", scrollC3);
}

function startCount () { //start tortilla counter
	var tortillaCounter = setInterval(animTortillas, 1000);
}

//Scroll Animations
function scrollC1 () {
	$("html, body").animate({ scrollTop: $('#intro').offset().top }, 1000);
}
function scrollC2 () {
	$("html, body").animate({ scrollTop: $('#graph1').offset().top }, 1000);
}
function scrollC3 () {
	$("html, body").animate({ scrollTop: $('#recipes').offset().top }, 1000);
}

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