<script>
	export let name = '';
	export let description = '';
</script>

<div class="reshape-copy">
	<div class="border-black border rounded-2xl image w-36 h-36" />
	<p class=" mt-4 name">{name}</p>
	<p>{description}</p>
</div>

<style>
	.name {
		font-weight: 500;
	}
	.image {
		background: url('$lib/assets/form-background.png');
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
