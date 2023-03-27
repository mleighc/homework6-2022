var video = document.querySelector('#player1');

window.addEventListener("load", function () {
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function () {
	video.play();
});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate = 0.5;
});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate = 1.5;
});

document.querySelector("#skip").addEventListener("click", function () {
	video.currentTime += 10.0
});

