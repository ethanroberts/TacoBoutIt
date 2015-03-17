
	var numOfTortillas = document.getElementById ("tortillasConsumed");
	var numOfSeconds = document.getElementById ("seconds");
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

}

function startCount () { //start tortilla counter
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