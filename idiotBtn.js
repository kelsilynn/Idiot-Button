var idiotWav = new Howl({
	src: ['dwight_idiot.mp3', 'dwight_idiot.wav']
});

var idiotBtn = document.getElementById("idiotBtn");

idiotBtn.addEventListener("click", function(){
	idiotWav.play();
});