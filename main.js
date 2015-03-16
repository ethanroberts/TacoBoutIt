
	var numOfTortillas = document.getElementById ("tortillasConsumed");
	var numOfSeconds = document.getElementById ("seconds");
	var seconds = 0, tortillas = 0, step = 2695;

function startCount () {
	var tortillaCounter = setInterval(animTortillas, 1000);
}

function animTortillas () {
	//numOfTortillas.innerHTML.animateNumber({number: 165});
	//numOfSeconds.innerHTML.animateNumber({number: 1456});
	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
	$('#seconds')
		.prop('number', seconds)
		.animateNumber({ number: seconds+1, numberStep: comma_separator_number_step});
	$('#tortillasConsumed')
		.prop('number', tortillas)
		.animateNumber({ number: tortillas+step, numberStep: comma_separator_number_step});

	seconds++;
	tortillas += step;
}

window.onload = function () {
	startCount();
}