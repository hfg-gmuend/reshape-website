<script>
	import ScheduleItem from '$lib/schedule-item.svelte';
	export let scheduleItems = [];
	export let keyColor = 'inherit';
	let expandedIndex = -1;

	$: expandedDescription =
		expandedIndex > -1 && scheduleItems[expandedIndex].description
			? scheduleItems[expandedIndex].description
			: '';

	function toggle(index) {
		if (index === expandedIndex) {
			expandedIndex = -1;
		} else {
			expandedIndex = index;
		}
	}
</script>

<article class="my-8 md:grid md:grid-cols-3 gap-10">
	<slot name="heading" />
	<ul class="time-table reshape-lead-light">
		{#each scheduleItems as item, i}
			<li>
				<ScheduleItem
					timeslot={item.timeslot}
					title={item.title}
					subtitle={item.subtitle}
					description={item.description}
					color={i === expandedIndex ? keyColor : expandedIndex > -1 ? 'muted' : 'black'}
					on:click={() => toggle(i)}
				/>
				{#if i === expandedIndex}
					<div class="md:hidden mt-4"><p class="reshape-copy">{expandedDescription}</p></div>
				{/if}
			</li>
		{/each}
	</ul>
	<div><p class="reshape-copy max-md:hidden">{expandedDescription}</p></div>
</article>

<style>
	ul.time-table > li:not(:last-child) {
		margin-bottom: 61px;
	}
</style>
