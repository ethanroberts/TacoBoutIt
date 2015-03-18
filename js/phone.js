var mAudio = document.getElementById("maracaAudio");

jQuery(window).bind('shake', phoneShake);

function phoneShake () {
	mAudio.play();
}


/*
var sense = sense.init();

sense.flick(function(data){
	//Play the maracas please!
	$("#maracaAudio").play();
});
*/