const murphy = document.querySelector('#murphy');
const murphyAnimClass = 'murphy-animation';

const randomWait = () => 1000 + Math.random() * 5000; // Random wait between 1 and 6 secs
// Listen for end of animation in order to queue up another after a random pause
murphy.addEventListener('animationend', (e) => {
	murphy.classList.remove(murphyAnimClass);
	setTimeout(startMurphyAnimation, randomWait()) // Random wait between 1 and 6 secs
});

// 0 top
// 1 right
// 2 bottom
// 3 left
const getRandDir = () => {
	return Math.floor(Math.random() * 4);
};

// We want a random value between 0 = calc(0v(hw) - 0px) and calc(100v(hw) - 274px)
// It's a little weird but we can do this and maintain a uniform distribution by
// "multiplying" a random value between 0 and 1 to each part of the calc value separately
const randomOffset = (widthBool) => {
	const rand = Math.random();
	return `calc(${100 * rand}v${widthBool?'w':'h'} - ${274 * rand}px)`;
}

// Murphy image is 274 x 274
// 274/2 = 137
const startMurphyAnimation = () => {
	const dir = getRandDir();
	switch (dir) {
		// TODO: This could probably all be combined into one case that just uses math
		// formulas on dir for each value. If so, it makes more sense to make 0 = bottom
		// and then move around counter-clockwise.
		case 0: // Top
			murphy.style.top = '-274px';
			murphy.style.right = 'unset'
			murphy.style.bottom = 'unset'
			// Random left/right location
			murphy.style.left = randomOffset(true);
			murphy.style.rotate = '180deg';
			break;
		case 1: // Right
			// Random top/bottom location
			murphy.style.top = randomOffset(false);
			murphy.style.right = '-274px'
			murphy.style.bottom = 'unset'
			murphy.style.left = 'unset'
			murphy.style.rotate = '270deg';
			break;
		case 2: // Bottom
			murphy.style.top = 'unset';
			murphy.style.right = 'unset'
			murphy.style.bottom = '-274px'
			// Random left/right location
			murphy.style.left = randomOffset(true);
			murphy.style.rotate = 'unset';
			break;
		case 3: // Left
			// Random top/bottom location
			murphy.style.top = randomOffset(false);;
			murphy.style.right = 'unset'
			murphy.style.bottom = 'unset'
			murphy.style.left = '-274px'
			murphy.style.rotate = '90deg';
			break;
		default:
			console.error('Invalid animation direction selected!')
			break;
	}
	murphy.classList.add(murphyAnimClass);
};
// Random delay for first animation
setTimeout(startMurphyAnimation, randomWait())

console.log("Hi Kyle! :)");
