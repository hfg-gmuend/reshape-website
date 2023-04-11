<script>
	import SpeakerTile from '$lib/speaker-tile.svelte';
	import SPEAKERS from '../data/speakers.js';
	let expandedIndex = -1;
	const nPerGridRow = 3;
	$: expandedDescription = expandedIndex >= 0 ? SPEAKERS[expandedIndex].description : '';
	$: nGridRows = Math.ceil(SPEAKERS.length / nPerGridRow);

	function idx(row, i) {
		return row * nPerGridRow + i;
	}

	function toggle(index) {
		if (expandedIndex === index) {
			expandedIndex = -1;
		} else {
			expandedIndex = index;
		}
	}

	function getItemsPerRow(rowIndex) {
		return SPEAKERS.slice(rowIndex * nPerGridRow, rowIndex * nPerGridRow + 3);
	}

	function isPartOfRow(idx, rowIndex) {
		return idx >= rowIndex * nPerGridRow && idx < (rowIndex + 1) * nPerGridRow;
	}
</script>

<div class="grid grid-cols-3">
	{#each Array(nGridRows) as _, rowIndex}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		{#each getItemsPerRow(rowIndex) as item, colIndex}
			<div
				style:opacity={idx(rowIndex, colIndex) !== expandedIndex ? '0.5' : 1}
				class:cursor-pointer={idx(rowIndex, colIndex) !== expandedIndex}
				on:click={() => toggle(idx(rowIndex, colIndex))}
			>
				<SpeakerTile
					tint={idx(rowIndex, colIndex) !== expandedIndex && 'reshape-lila'}
					name={item.name}
				/>
			</div>
		{/each}
		<div class="col-span-full" class:hidden={!isPartOfRow(expandedIndex, rowIndex)}>
			<p class="reshape-copy mb-8">
				{expandedDescription}
			</p>
		</div>
	{/each}
</div>
