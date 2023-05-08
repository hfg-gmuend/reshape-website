<script>
	export let name = '';
	export let subtitle = '';
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

	<h3 class="mt-[25px] md:mt-[15px] block reshape-lead-light">{name}</h3>
	<h4 class="reshape-copy">{subtitle}</h4>
	<p class="reshape-copy mt-4 md:mt-0 max-md:max-w-[70vw]">
		{@html description}
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

	.speaker-nadia-piet {
		background-image: url($lib/assets/speaker-portraits/nadia-piet.jpg);
	}

	.speaker-catherine-breslin {
		background-image: url($lib/assets/speaker-portraits/catherine-breslin.jpg);
	}

	.speaker-ploipailin-flynn {
		background-image: url($lib/assets/speaker-portraits/ploipailin-flynn.jpg);
	}

	.speaker-o-io {
		background-image: url($lib/assets/speaker-portraits/o-io.jpg);
	}

	.speaker-tom-white {
		background-image: url($lib/assets/speaker-portraits/tom-white.jpg);
	}

	.speaker-wolfgang-ertel {
		background-image: url($lib/assets/speaker-portraits/wolfgang-ertel.jpg);
		background-size: cover;
	}

	.speaker-prompt-battle {
		background-image: url($lib/assets/speaker-portraits/prompt-battle.jpg);
	}

	.speaker-roman-grasy {
		background-image: url($lib/assets/speaker-portraits/roman-grasy.jpg);
	}

	.speaker-image:hover {
		background-blend-mode: normal;
		border-color: inherit;
	}
</style>
