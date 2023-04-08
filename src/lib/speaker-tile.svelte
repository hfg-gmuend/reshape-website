<script>
	export let name = '';
	export let description = '';
</script>

<div class="reshape-copy pr-4">
	<div class="border-black border rounded-2xl image w-100 h-36 max-w-xs" />
	<h3 class="mt-5 block reshape-lead-light">{name}</h3>
	<p class="reshape-copy mt-4">
		{description}
	</p>
</div>

<style>
	.image {
		background: url('$lib/assets/form-background.png');
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
