

let sounds = {
	65: 'clap',
	83: 'boom',
	68: 'hihat',
	70: 'kick',
	90: 'ride',
	88: 'snare',
	67: 'tink',
	86: 'tom',
};


window.addEventListener('keydown', e => {
	console.log(e);
	let soundId = sounds[e.keyCode];
	let textChange = document.getElementById(e.keyCode);
	changeText(textChange);
	// console.log(soundId);
	document.getElementById(soundId).play();
});

window.addEventListener('click', e => {
	// console.log(e);
	let soundId = sounds[e.target.id];
	soundId.replace(/['"]+/g, '');
	let textChange = document.getElementById(e.target.id);
	// console.log(textChange);
	changeText(textChange);
	// console.log(soundId);
	document.getElementById(soundId).play();

});

function changeText(textChange) {
	textChange.style.color = "red";
	setTimeout(() => {
		textChange.style.color = "#fff";

	}, 500);
}
