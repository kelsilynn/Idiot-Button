var idiotAudio = new Audio('sounds/dwight_idiot.mp3');
var idiotBtn = document.getElementById("idiotBtn");

idiotBtn.addEventListener("click", function(){
	idiotAudio.play();
});