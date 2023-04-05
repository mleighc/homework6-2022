var video = document.querySelector('#player1');

window.addEventListener("load", function () {
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function () {
	video.play();
	document.querySelector("#volume").innerHTML = `${video.volume * 100}%`
});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate -= 0.1;
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate += 0.1;
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function () {
	video.currentTime += 10.0
	console.log(video.currentTime)
	if (video.currentTime > 63.0) { video.loop = true; }
});

let muteBtn = document.querySelector("#mute")
muteBtn.addEventListener("click", function () {
	video.muted = !video.muted;
	video.muted == true ? muteBtn.innerHTML = 'Unmute' : muteBtn.innerHTML = 'Mute'
});


document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add('oldSchool')
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove('oldSchool')
});

let volume = document.querySelector("#slider");
volume.addEventListener("change", function (e) {
	video.volume = Number(e.target.value / 100);
	document.querySelector("#volume").innerHTML = `${video.volume * 100}%`
})

