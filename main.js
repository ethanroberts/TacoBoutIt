
	var numOfTortillas = document.getElementById ("tortillasConsumed");
	var numOfSeconds = document.getElementById ("seconds");
	var seconds = 0, tortillas = 0, step = 2695;

function startCount () { //start tortilla counter
	var tortillaCounter = setInterval(animTortillas, 1000);
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
	startCount();
}