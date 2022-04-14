var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});


// document.querySelector("#play").addEventListener("click", function() {
//	console.log("Play Video";)
// });

var play = document.querySelector('#play'),
	pause = document.querySelector('#pause'),
	slower = document.querySelector('#slower'),
	video = document.querySelector('video'),
	faster = document.querySelector('#faster'),
	skip = document.querySelector('#skip');

play.addEventListener('click', function(){
	video.play();
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'
	console.log('Playing Video');
})

pause.addEventListener('click', function(){
	video.pause();
	console.log('Plaused Video');
})

slower.addEventListener('click', function(){
	video.playbackRate -= 0.05;
	console.log('Playback speed', video.playbackRate);
})

faster.addEventListener('click', function(){
	video.playbackRate += 0.05;
	console.log('Playback speed', video.playbackRate);
})

skip.addEventListener('click', function(){
	video.currentTime += 15;
	if(video.currentTime > video.duration - 0.01)
		video.currentTime = 0;
})

document.querySelector(#mute).addEventListener('click', function(){
	var muteButton = document.querySelector('#mute').innerHTML;
	if(muteButton == "Mute"){
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute'
	}
	else{
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Mute'
	}
})

document.querySelector('#slider').addEventListener('click', function(){
	var slider = this.value;
	video.volume = slider/100;
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'
	console.log('Volume level', this.value = '%');
})

document.querySelector('#vintage').addEventListener('click', function(){
	video.classList.add("oldSchool")
})

document.querySelector('#vintage').addEventListener('click', function(){
	video.classList.remove("oldSchool")
})





