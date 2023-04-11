<script>
	import Siema from 'siema';
	import { onMount, createEventDispatcher } from 'svelte';
	import ArrowRightIcon from '$lib/icon-arrow-right.svelte';

	export let perPage = 2;
	export let loop = true;
	export let autoplay = 0;
	export let duration = 300;
	export let easing = 'ease-out';
	export let startIndex = 0;
	export let draggable = true;
	export let multipleDrag = true;
	export let threshold = 20;
	export let rtl = false;
	let currentIndex = startIndex;

	let el;
	let controller;
	let timer;
	const dispatch = createEventDispatcher();

	$: pips = controller ? controller.innerElements : [];
	$: currentPerPage = controller ? controller.perPage : perPage;
	$: numberSlides = controller ? Math.ceil(controller.innerElements.length / currentPerPage) : [];

	function createIntentionalOverflowHack(el, overflow) {
		console.log(el);
		const width = el.offsetWidth;
		el.style.width = `${width + overflow}px`;
	}

	onMount(() => {
		controller = new Siema({
			selector: el,
			perPage: typeof perPage === 'object' ? perPage : Number(perPage),
			loop,
			duration,
			easing,
			startIndex,
			draggable,
			multipleDrag,
			threshold,
			rtl,
			onChange: handleChange
		});

		createIntentionalOverflowHack(el, 500);

		if (autoplay) {
			timer = setInterval(right, autoplay);
		}
		return () => {
			autoplay && clearInterval(timer);
			controller.destroy();
		};
	});

	export function left() {
		controller.prev();
	}

	export function right() {
		controller.next();
	}

	export function go(index) {
		controller.goTo(index);
	}

	export function pause() {
		clearInterval(timer);
	}

	export function resume() {
		if (autoplay) {
			timer = setInterval(right, autoplay);
		}
	}

	function handleChange(event) {
		currentIndex = controller.currentSlide;
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length
		});
	}

	function resetInterval(node, condition) {
		function handleReset(event) {
			pause();
			resume();
		}

		if (condition) {
			node.addEventListener('click', handleReset);
		}

		return {
			destroy() {
				node.removeEventListener('click', handleReset);
			}
		};
	}
</script>

<div class="carousel">
	<div class="slides" bind:this={el}>
		<slot />
	</div>

	<div class="controls mt-36">
		<button class="" on:click={left} use:resetInterval={autoplay} aria-label="left">
			<ArrowRightIcon style="transform: rotate(180deg)" />
		</button>
		<span class="reshape-lead-light">{currentIndex + 1}/{numberSlides}</span>
		<button class="ml-auto" on:click={right} use:resetInterval={autoplay} aria-label="right">
			<ArrowRightIcon />
		</button>
	</div>
</div>

<style>
	.carousel {
		position: relative;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.controls {
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 20;
		text-align: right;
	}

	button {
		border: none;
		background-color: transparent;
	}

	button:focus {
		outline: none;
	}

	ul {
		list-style-type: none;
		position: absolute;
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: -30px;
		padding: 0;
	}
	ul li {
		margin: 6px;
		border-radius: 100%;
		background-color: rgba(255, 255, 255, 0.5);
		height: 8px;
		width: 8px;
	}
	ul li:hover {
		background-color: rgba(255, 255, 255, 0.85);
	}
	ul li.active {
		background-color: rgba(255, 255, 255, 1);
	}
</style>
