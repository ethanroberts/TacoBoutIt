	
	//Mexican Dude in Introduction
	var mexicanDude = document.getElementById("mexicanDude");
	var MDsrc1 = "src/img/mexicanDude1.png";
	var MDsrc2 = "src/img/mexicanDude2.png";
	var MDframe = 1;

	//For tortilla Counter
	var numOfTortillas = document.getElementById("tortillasConsumed");
	var numOfSeconds = document.getElementById("seconds");
	var seconds = 0, tortillas = 0, step = 2695; 

	//Audio
	var mAudio = document.getElementById("maracaAudio");
	

	//Dorito Animation
	var doritoLogo = document.getElementById("dLogo");
	var doritoFrames = ["src/img/doritos01.png", "src/img/doritos02.png", "src/img/doritos03.png",
	"src/img/doritos04.png", "src/img/doritos05.png", "src/img/doritos06.png", "src/img/doritos07.png",
	"src/img/doritos08.png", "src/img/doritos09.png", "src/img/doritos10.png", "src/img/doritos11.png",
	"src/img/doritos12.png", "src/img/doritos13.png", "src/img/doritos14.png", "src/img/doritos15.png"];
	var dCurrentFrame = 0;

	//Sense.js
	var sense = sense.init();

	sense.flick(function(data){
		//Play the maracas please!
		mAudio.play();
	});

function setupEventHandles () {
	//Scroll Buttons
	//Down
	document.getElementById("cd1").addEventListener("click", scrollCD1);
	document.getElementById("cd2").addEventListener("click", scrollCD2);
	document.getElementById("cd3").addEventListener("click", scrollCD3);
	document.getElementById("cd4").addEventListener("click", scrollCD4);
	document.getElementById("cd5").addEventListener("click", scrollCD5);
	//Up
	document.getElementById("cu1").addEventListener("click", scrollCU1);
	document.getElementById("cu2").addEventListener("click", scrollCU2);
	document.getElementById("cu3").addEventListener("click", scrollCU3);
	document.getElementById("cu4").addEventListener("click", scrollCU4);
	//document.getElementById("cu5").addEventListener("click", scrollCU5);

	//on Window Scroll
	$(window).scroll(animateMexicanDude);

	//Test
	doritoLogo.addEventListener("click", startDAnim);
}

//Animate the Mexican Dude in introduction
function animateMexicanDude () {
	//console.log("Scroll Occured");
	//console.log(mexicanDude.src);

	if (MDframe === 1) {
		mexicanDude.src = MDsrc2;
	} else {
		mexicanDude.src = MDsrc1;
	}

	MDframe = MDframe * -1;
	//console.log("Frame: " + MDframe);
}

//Start tortilla counter
function startCount () {
	var tortillaCounter = setInterval(animTortillas, 1000);
}

//Animate Doritos Logo
function startDAnim () {
	setInterval(animateDLogo, 50);
}

//Animate Doritos Logo
function animateDLogo () {
	if(dCurrentFrame < doritoFrames.length) {
		dLogo.src = doritoFrames[dCurrentFrame];
		dCurrentFrame++;
	}
}

//Scroll Animations
	//Down
function scrollCD1 () {
	$("html, body").animate({ scrollTop: $('#intro').offset().top }, 1000);
	mAudio.play();
}
function scrollCD2 () {
	$("html, body").animate({ scrollTop: $('#graph1').offset().top }, 1000);
	mAudio.play();
}
function scrollCD3 () {
	$("html, body").animate({ scrollTop: $('#f1').offset().top }, 1000);
}
function scrollCD4 () {
	$("html, body").animate({ scrollTop: $('#recipes').offset().top }, 1000);
}
function scrollCD5 () {
	$("html, body").animate({ scrollTop: $('#jokes').offset().top }, 1000);
}
	//Up
function scrollCU1 () {
	$("html, body").animate({ scrollTop: $('#bannerTop').offset().top }, 1000);
	mAudio.play();
}
function scrollCU2 () {
	$("html, body").animate({ scrollTop: $('#intro').offset().top }, 1000);
	mAudio.play();
}
function scrollCU3 () {
	$("html, body").animate({ scrollTop: $('#graph1').offset().top }, 1000);
}
function scrollCU4 () {
	$("html, body").animate({ scrollTop: $('#f1').offset().top }, 1000);
}
function scrollCU5 () {
	$("html, body").animate({ scrollTop: $('#recipes').offset().top }, 1000);
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

	//Play music
	//var music = document.getElementById("music");
	//music.play();

	//var mAudio = document.getElementById("maracaAudio");
		//mAudio.play();

	//Phone Shake
	//$("#intro").shake();
	//jQuery(window).bind('shake', phoneShake);
}










