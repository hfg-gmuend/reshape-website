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
			<!-- Mobile : self-expanding -->
			<li class="md:hidden">
				<ScheduleItem
					timeslot={item.timeslot}
					title={item.title}
					subtitle={item.subtitle}
					description={item.description}
					tint={keyColor}
				/>
			</li>
			<!-- Desktop : controlled -->
			<li class="max-md:hidden">
				<ScheduleItem
					timeslot={item.timeslot}
					title={item.title}
					subtitle={item.subtitle}
					description={item.description}
					tint={i === expandedIndex ? keyColor : expandedIndex > -1 ? 'muted' : 'black'}
					controlled
					on:click={() => toggle(i)}
				/>
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
