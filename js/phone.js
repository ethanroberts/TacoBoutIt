var mAudio = document.getElementById("maracaAudio");

//jQuery(window).bind('shake', phoneShake);

//function phoneShake () {
//	mAudio.play();
//}



var sense = sense.init({debug: true});

sense.flick(function(data){
	//Play the maracas please!
	mAudio.play();
});

sense.addTiltScroll();
