<script>
	import Carousel from '$lib/carousel.svelte';
	import SpeakerTile from '$lib/speaker-tile.svelte';
	import SPEAKERS from '../data/speakers.js';
</script>

<div class="inset">
	<div class="inset-left">
		<Carousel autoplay={false} perPage="1">
			{#each SPEAKERS as speaker}
				<SpeakerTile tint="reshape-lila" name={speaker.name} description={speaker.description} />
			{/each}
		</Carousel>
	</div>
</div>
