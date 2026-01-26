const murphies = [
	document.querySelector('#murphy-top'),
	document.querySelector('#murphy-right'),
	document.querySelector('#murphy-bottom'),
	document.querySelector('#murphy-left'),
];
const murphyAnimClass = 'murphy-animation';
murphies.forEach((murph) => {
	murph.addEventListener('animationend', (e) => {
		murph.classList.remove(murphyAnimClass);
		setTimeout(() => {
			startMurphyAnimation();
		}, 500 + Math.random() * 4500) // between 500 and 5000 ms
	});
});

const getRandMurphy = () => {
	return murphies[Math.floor(Math.random() * murphies.length)];
};

const startMurphyAnimation = () => {
	const murphPick = getRandMurphy();
	murphPick.classList.add(murphyAnimClass);
};
startMurphyAnimation();

console.log("Hi Kyle! :)");
