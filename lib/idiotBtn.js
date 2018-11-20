var idiotWav = new Howl({
	src: ['sounds/dwight_idiot.mp3', 'sounds/dwight_idiot.wav']
});

var idiotBtn = document.getElementById("idiotBtn");

idiotBtn.addEventListener("click", function(){
	idiotWav.play();
});