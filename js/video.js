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
	video.playbackRate -= 0.5;
});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate += 0.5;
});

document.querySelector("#skip").addEventListener("click", function () {
	video.currentTime += 15.0
});

document.querySelector("#mute").addEventListener("click", function () {
	video.muted = true;
});

document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add('oldSchool')
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove('oldSchool')
});

