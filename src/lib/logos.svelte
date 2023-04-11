<script>
	import logoBmbf from '$lib/assets/logos/logo-bmbf.png';
	import logoBw from '$lib/assets/logos/logo-bw.png';
	import logoHfG from '$lib/assets/logos/logo-hfg.svg';
	import logoAiD from '$lib/assets/logos/logo-ai-d.png';
</script>

<div class="h-20 grid grid-cols-3 gap-3 md:h-16 md:flex md:justify-evenly">
	<img src={logoAiD} alt="AI+D Lab" class="logo" />
	<img src={logoHfG} alt="HfG Schwäbisch-Gmünd" class="logo" />
	<img src={logoBw} alt="Baden-Württemberg" class="logo" />
	<img src={logoBmbf} alt="BMBF" class="logo" />
</div>

<style>
	.logo {
		display: block;
		height: 100%;
		background-size: contain;
		background-repeat: no-repeat;
	}
</style>
