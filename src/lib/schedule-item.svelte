<script>
	export let timeslot = 'tbd';
	export let title = '';
	export let subtitle = '';
	export let description = '';
	export let expandable = false;
	export let keycolor = '#f00';
	let isExpanded = false;

	$: expandable = !!description;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<p
	class:cursor-pointer={expandable}
	on:click={() => {
		if (!expandable) return;
		isExpanded = !isExpanded;
	}}
>
	<span class="text-{keycolor}" class:text-inherit={!isExpanded}>
		<span class="block reshape-lead-medium" class:expandable>{timeslot}</span>
		<span class="block">{title}</span>
		<span class="block">{subtitle}</span></span
	>
	<span class:hidden={!isExpanded} class="reshape-copy block mt-4">{description}</span>
</p>

<style>
	.expandable::after {
		content: '';
		display: inline-block;
		width: 11px;
		height: 11px;
		background-image: url('./icon-link.svg');
		transform: rotate(90deg);
		background-repeat: no-repeat;
		margin-left: 3px;
		color: 'red';
	}

	.text-reshape-gruen > .expandable::after {
		background-image: url('./icon-link-green.svg');
	}

	.text-reshape-blau > .expandable::after {
		background-image: url('./icon-link-blue.svg');
	}

	.text-reshape-lila > .expandable::after {
		background-image: url('./icon-link-lila.svg');
	}
</style>
