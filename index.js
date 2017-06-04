

let sounds = {
	65: 'clap',
	83: 'boom',
	68: 'hihat',
	70: 'kick',
	71: 'ride',
	72: 'snare',
	74: 'tink',
	75: 'tom',
};

window.addEventListener('keydown', e => {
	console.log(e);
	let soundId = sounds[e.keyCode];
	let myElement = document.getElementById(e.keyCode);
	myElement.style.color = "red";
	setTimeout(() => {
		myElement.style.color = "#fff";

	}, 500);
	console.log(soundId);
	document.getElementById(soundId).play();
});

window.addEventListener('click', e => {
	console.log(e);
	let soundId = sounds[e.target.id];
	console.log(soundId);
	document.getElementById(soundId).play();

});
