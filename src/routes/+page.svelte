<script>
	import MenuIcon from '../lib/menu-icon.svelte';
	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<header class="fixed w-full z-10 px-6 border-y-2 border-black h-11 flex items-center">
	<span class="font-medium text-base">reshape</span>
	<button class="ml-auto p-2" on:click={toggleMenu} class:rotate-45={!menuOpen}><MenuIcon /></button
	>
</header>

{#if menuOpen}
	<nav class="fixed w-full h-screen pt-11 bg-reshape-mauve px-6 text-4xl">
		<ul>
			<li>Programm</li>
			<li>Anmeldung</li>
			<li>AI+D Lab</li>
			<li>Kontakt</li>
		</ul>
	</nav>
{/if}
