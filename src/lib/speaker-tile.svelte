<script>
	export let name = '';
	export let description = '';
	export let tint = 'reshape-blau';
	export let imageName = '';
</script>

<div class="reshape-copy pr-4">
	<!-- Rather ugly CSS hack to make Tailwind generate those dynamic classes :-/ -->
	<div
		class="bg-reshape-lila bg-reshape-blau bg-reshape-gruen border-reshape-lila border-reshape-blau border-reshape-gruen"
	/>
	<!-- End of rather ugly hack -->
	<div class="max-w-xs">
		<div class="wrapper square">
			<div class="speaker-image border-{tint} bg-{tint} border-2 rounded-2xl speaker-{imageName}" />
		</div>
	</div>

	<h3 class="mt-5 block reshape-lead-light">{name}</h3>
	<p class="reshape-copy mt-4">
		{description}
	</p>
</div>

<style>
	.wrapper {
		position: relative;
	}

	.square {
		width: 100%;
		padding-bottom: 100%;
	}
	.speaker-image {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url($lib/assets/form-background.png);
		background-size: contain;
		background-repeat: no-repeat;
		background-blend-mode: screen;
	}

	.speaker-emily-saltz {
		background-image: url($lib/assets/speaker-portraits/emily-saltz.png);
	}

	.speaker-simon-maris {
		background-image: url($lib/assets/speaker-portraits/simon-maris.jpg);
	}

	.speaker-andreas-refsgaard {
		background-image: url($lib/assets/speaker-portraits/andreas-refsgaard.jpg);
	}

	.speaker-image:hover {
		background-blend-mode: normal;
		border-color: inherit;
	}
</style>
