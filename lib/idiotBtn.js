// var idiotWav = new Howl({
// 	src: ['sounds/dwight_idiot.mp3', 'sounds/dwight_idiot.wav']
// });

var idiotAudio = new Audio('sounds/dwight_idiot.mp3', 'sounds/dwight_idiot.wav');
var idiotBtn = document.getElementById("idiotBtn");
var test = document.getElementById("test");

idiotBtn.addEventListener("click", function(){
	idiotAudio.play();
});

test.addEventListener("click", function(){
	idiotAudio.play();
})