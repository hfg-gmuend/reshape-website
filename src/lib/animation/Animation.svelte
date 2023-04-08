<script>
	import Grid from './Grid.svelte';
	import Square from './Square.svelte';
	import Joint from './Joint.svelte';
	import { tweened } from 'svelte/motion';
	import { sineInOut } from 'svelte/easing';

	// Size of the squares
	let s = 20;
	// Outer corner radius of the squares
	let outerRadius = 2.5;
	// Inner corner radius of the joints
	let innerRadius = 5;
	// Size of the blur
	let blur = 1;

	let colorOuter = '#daf';
	let colorInner = '#fff';
	let colorBackground = '#fff';

	// Threshold parameter for the animation when showing (or hiding) squares.
	// The animation runs from 0 to 1. When reaching the threshold, the circle will be
	// full in size. The rest of the time is used to grow the joints and reduce the corner radius.
	let threshold = 0.8;
	// Duration of the animations
	let duration = 600;
	// Provide a function for the duration. This way this parameter is dynamic for the tweens.
	let animationDuration = (oldVal, newVal) => {
		return duration;
	};
	// Automatic animation on or off
	let autoAnimate = true;
	let aniButtonText = autoAnimate ? 'Stop Animation' : 'Start Animation';

	// Organizing the grid
	let gridSizeX = 6;
	let gridSizeY = 6;
	let grid = [];
	for (let yi = 0; yi < gridSizeX; yi++) {
		let row = [];
		for (let xi = 0; xi < gridSizeX; xi++) {
			// Some cells of the grid should never be present: all cells at the border and every second cell
			if ((xi + yi) % 2 == 0 && xi > 0 && xi < gridSizeX - 1 && yi > 0 && yi < gridSizeY - 1) {
				// Presence is a number from 0 to 1 and represents the visibility status of a square.
				// Let's start with a random pattern with some squares visible
				let presence = Math.random() < 0.5 ? 1 : 0;
				// Make presence to a dynamic variable
				const p = tweened(presence, {
					duration: animationDuration,
					easing: sineInOut
				});
				row.push({ active: true, presence: p, xi: xi, yi: yi });
			} else {
				const p = tweened(0);
				row.push({ active: false, presence: p, xi: xi, yi: yi });
			}
		}
		grid.push(row);
	}
</script>

<svg viewBox="0 0 100 100">
	<filter id="blurMe">
		<feGaussianBlur in="SourceGraphic" stdDeviation={blur} />
	</filter>

	<mask id="gridMask">
		<g id="grid" fill="white">
			<Grid
				{grid}
				{gridSizeX}
				{gridSizeY}
				{s}
				{outerRadius}
				{innerRadius}
				{threshold}
				{autoAnimate}
			/>
		</g>
	</mask>

	<rect width="100" height="100" fill={colorBackground} />

	<g id="grid" fill={colorInner} filter="url(#blurMe)" mask="url(#gridMask)">
		<rect width="100" height="100" fill={colorOuter} />
		<g>
			<Grid
				{grid}
				{gridSizeX}
				{gridSizeY}
				{s}
				{outerRadius}
				{innerRadius}
				{threshold}
				{autoAnimate}
			/>
		</g>
	</g>
</svg>

<style>
	.flex {
		display: flex;
	}

	.toolbar {
		margin-bottom: 10px;
	}

	svg {
		width: 100%;
		height: 100%;
		margin-top: 20px;
	}

	.spinner,
	button {
		margin-right: 20px;
	}
</style>
