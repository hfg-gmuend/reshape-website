<script>
	import ITEMS_WEDNESDAY from '../data/schedule-wednesday.js';
	import ITEMS_THURSDAY from '../data/schedule-thursday.js';
	import ITEMS_FRIDAY from '../data/schedule-friday.js';
	import WORKSHOPS from '../data/workshops.js';

	import Animation from '$lib/animation/Animation.svelte';
	import MenuIcon from '$lib/icon-menu.svelte';
	import SpeakersDesktop from '$lib/speakers-desktop.svelte';
	import SpeakersMobile from '$lib/speakers-mobile.svelte';
	import TeamTile from '$lib/team-tile.svelte';
	import Logos from '$lib/logos.svelte';
	import Schedule from '$lib/schedule.svelte';

	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	const menuItems = [
		{ title: 'Programm', link: 'program' },
		{ title: 'Anmeldung', link: 'anmeldung' },
		{ title: 'AI+D Lab', link: 'ai-d-lab' },
		{ title: 'KITeGG', link: 'kitegg' }
	];
</script>

<!-- Mobile Menu -->
{#if menuOpen}
	<nav class="fixed w-full z-30 h-screen pt-11 bg-reshape-mauve inset text-4xl md:hidden">
		<ul class="h-full flex flex-col justify-around">
			{#each menuItems as item}
				<li on:click={() => (menuOpen = false)}><a href="#{item.link}">{item.title}</a></li>
			{/each}
		</ul>
	</nav>
{/if}

<header
	class="fixed w-full z-30 inset border-y-2 border-black h-11 flex items-center"
	class:bg-white={!menuOpen}
	class:bg-reshape-mauve={menuOpen}
>
	<nav class="font-light w-full max-md:hidden">
		<ul class="flex justify-between">
			{#each menuItems.slice(0, Math.floor(menuItems.length / 2)) as item}
				<li><a href="#{item.link}">{item.title}</a></li>
			{/each}
			<li><a href="#" class="font-medium">reshape</a></li>
			{#each menuItems.slice(Math.floor(menuItems.length / 2)) as item}
				<li><a href="#{item.link}">{item.title}</a></li>
			{/each}
		</ul>
	</nav>
	<span class="font-medium text-base md:hidden">reshape</span>
	<button class="md:hidden ml-auto p-2" on:click={toggleMenu} class:rotate-45={!menuOpen}
		><MenuIcon /></button
	>
</header>

<main class="pt-11 inset reshape-gradient-bg">
	<div class="inset-negative w-screen h-screen">
		<div class="absolute top-0 right-0 left-0 bottom-0"><Animation /></div>
		<div class="inset">
			<div class="grid grid-cols-2 md:grid-cols-6 gap-5 md-gap-2">
				<div class="hidden md:col-span-1" />
				<h1 class="z-20 reshape-title">reshape</h1>
			</div>
			<div class="grid grid-cols-2 md:grid-cols-6 gap-5 md-gap-2">
				<div class="col-span-1 md:col-span-3" />
				<h2 class="z-20 reshape-subtitle">
					Forum for<br />Artificial Intelligence<br />in Art and Design
					<br /><br />10-12 May 2023 <br />HfG Schwäbisch-Gmünd
				</h2>
			</div>
		</div>
	</div>

	<section>
		<p class="symposium-firstpara reshape-lead-medium md:reshape-desktop-lead-medium">
			How do Artificial Intelligence and Machine Learning reshape the landscape of art and design?
		</p>
		<div class="md:grid md:grid-cols-3 gap-10">
			<div />
			<p class="reshape-copy max-md:inset-left mb-16 border-black">
				Featuring a lineup of thought-provoking talks, engaging panel discussions, and hands-on
				workshops, we will explore how AI can expand art and design practices and enhance
				creativity, learn about the challenges and affordances of designing AI-based interfaces and
				products, and discover best practices for teaching AI to creatives. Join us for a refreshing
				and in-depth exploration of the many-sided world of creative AI.
			</p>
			<p class="reshape-copy max-md:inset-left">
				In anregenden Vorträgen, spannenden Podiumsdiskussionen und praxisbezogenen Workshops
				erkunden wir, wie KI einerseits Kunst- und Designpraktiken erweitern und Kreativität fördern
				kann, und erörtern andererseits, die Herausforderungen und Möglichkeiten, die bei der
				Gestaltung von KI-basierten Schnittstellen und Produkten eine Rolle spielen. Zudem ist es
				ein Anliegen der Konferenz darüber zu sprechen, wie KI-Skills in die Ausbildung von
				Designer_innen und Künstler_innen integriert werden können.
			</p>
		</div>
	</section>

	<section>
		<div class="md:grid md:grid-cols-3 gap-10">
			<h2 class="reshape-section-header md:reshape-desktop-section-header">Speaker&#8203;:innen</h2>
			<p class="reshape-copy">tbd (stay tuned!)</p>
			<div class="col-span-2">
				<!-- MOBILE (carousel) -->
				<div class="overflow-hidden inset-negative md:hidden">
					<SpeakersMobile />
				</div>
				<!-- DESKTOP -->
				<div class="max-md:hidden md:visible">
					<SpeakersDesktop />
				</div>
			</div>
		</div>
	</section>
	<section id="program">
		<h2 class="reshape-section-header md:reshape-desktop-section-header">Öffentliches Programm</h2>
		<p class="mb-8 reshape-lead-light">10. Mai 2022 – 12. Mai 2023 <br /> (Mittwoch bis Freitag)</p>
		<div class="inset-negative"><div class="seperator" /></div>
		<Schedule scheduleItems={ITEMS_WEDNESDAY} keyColor="reshape-lila">
			<h3 slot="heading" class="reshape-subsection-header text-reshape-lila basis-1/2">
				Mittwoch<br />10.&nbsp;Mai
			</h3>
		</Schedule>
		<div class="inset-negative"><div class="seperator" /></div>
		<Schedule scheduleItems={ITEMS_THURSDAY} keyColor="reshape-blau"
			><h3 slot="heading" class="reshape-subsection-header text-reshape-blau basis-1/2">
				Donnerstag<br />11.&nbsp;Mai
			</h3></Schedule
		>
		<div class="inset-negative"><div class="seperator" /></div>
		<Schedule scheduleItems={ITEMS_FRIDAY} keyColor="reshape-gruen">
			<h3 slot="heading" class="reshape-subsection-header text-reshape-gruen basis-1/2">
				Freitag<br />12.&nbsp;Mai
			</h3>
		</Schedule>
		<div id="anmeldung" class="inset-negative"><div class="seperator" /></div>
		<p class="mt-20 reshape-lead-medium md:reshape-desktop-lead-medium">
			Das öffentliche Programm ist kostenfrei für alle zugänglich. Hier geht es zur Anmeldung
		</p>
	</section>
	<section>
		<div class="md:grid md:grid-cols-3 gap-10 mb-8">
			<div class="col-span-2">
				<h2 class="reshape-section-header md:reshape-desktop-section-header">Internes Programm</h2>
				<p class="reshape-copy md:reshape-lead-light">
					8. Mai 2022 – 10. Mai 2022 <br />(Montag bis Mittwoch)
				</p>
			</div>
			<p class="reshape-copy inset-left mt-4 mb-8">
				Lehrende der KITeGG Partnerhochschulen bieten in den Tagen vor der Konferenz eine Reihe von
				Workshops, die ein praktisches Erproben der Bandbreite an Möglichkeiten geben, die KI und
				Machine Learning für Gestalter:innen bereit halten.
			</p>
		</div>

		<div class="inset-negative"><div class="seperator" /></div>

		<Schedule scheduleItems={WORKSHOPS}>
			<h3 slot="heading" class="reshape-subsection-header basis-1/2">Workshops</h3>
		</Schedule>
	</section>
	<section>
		<div class="inset-negative"><div class="seperator" /></div>
		<p class="reshape-lead-medium md:reshape-desktop-lead-medium mt-32">
			KITeGG - Ein Verbundprojekt von fünf Hochschulen zur Integration von KI in der
			Gestaltungslehre.
		</p>
		<div class="md:grid md:grid-cols-3 gap-10 md:mt-40" id="kitegg">
			<h2 class="reshape-section-header md:reshape-desktop-section-header mt-20">KITeGG</h2>
			<p class="reshape-copy max-md:inset-left">
				Das Verbundvorhaben „KITeGG - KI greifbar machen und begreifen: Technologie und Gesellschaft
				verbinden durch Gestaltung“ erforscht wie KI in die Gestaltungslehre integriert werden kann.
			</p>
			<p class="reshape-copy max-md:inset-left max-md:mt-9">
				In dem BMBF-geförderten Verbundprojekt KITeGG arbeiten und forschen bis Ende 2025 insgesamt
				fünf Hochschulen an der Integration von KI in der Gestaltungslehre: Die Hochschule Mainz,
				die Hochschule für Gestaltung Offenbach, die Hochschule für Gestaltung Schwäbisch Gmünd, die
				Köln International School of Design und die Hochschule Trier.
			</p>
		</div>
	</section>
	<section>
		<div class="md:grid md:grid-cols-3 gap-10 md:mt-40" id="ai-d-lab">
			<h2 class="reshape-section-header md:reshape-desktop-section-header max-md:mt-20">
				AI+D Lab
			</h2>
			<p class="reshape-copy max-md:inset-left">
				Mit dem neuen AI+D Lab wurde an der HfG Schwäbisch Gmünd ein Ort geschaffen um sich mit den
				Möglichkeiten, aber auch den Herausforderungen von künstlicher Intelligenz in der Gestaltung
				zu beschäftigen: Welche Rolle können Gestalter:innen zukünftig in der (Mit-)Gestaltung von
				KI-basierten Anwendungen einnehmen und wie müssen sie in der Ausbildung darauf vorbereitet
				werden? Wie können KI-Technologien gezielt in den Gestaltungsprozess eingebunden werden und
				wie verändert sich dadurch die Arbeit von Gestalter:innen? Wie können Gestalter:innen
				wünschenswerte Zukünfte mit KI-Technologien mitgestalten?
			</p>
			<p class="reshape-copy max-md:inset-left max-md:mt-9" />
		</div>
	</section>
	<section>
		<div class="md:grid md:grid-cols-3 gap-10 md:mt-40">
			<h2 class="reshape-section-header md:reshape-desktop-section-header mt-20">AI+D Team</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-y-12 col-span-2">
				<TeamTile name="Rahel Flechtner" description="Visiting professor" />
				<TeamTile name="Aeneas Stankowski" description="Visiting professor" />
				<TeamTile name="Felix Sewing" description="AI+D Lab lead" />
				<TeamTile name="Alexa Steinbrück" description="Researcher" />
				<TeamTile name="Benedikt Groß" description="Project lead" />
				<TeamTile name="Hartmut Bohnacker" description="Project lead" />
				<TeamTile name="Chris Pietsch" description="Researcher" />
				<TeamTile name="Johannes Rothkegel" description="Student assistant" />
			</div>
		</div>
	</section>
	<section>
		<div class="md:grid md:grid-cols-3 gap-10">
			<h2 class="reshape-section-header md:reshape-desktop-section-header mt-20">Reshape Team</h2>
			<div class="max-md:inset-left col-span-2">
				<p class="reshape-copy">
					<span class="font-medium">Programm</span><br />Alexa Steinbrück
				</p>
				<p>&nbsp;</p>
				<p class="reshape-copy">
					<span class="font-medium">Grafikdesign</span><br />Lucie Paula Claire de Hair, Marlene
					Metschies, Kirsten Humpfer
				</p>
				<p>&nbsp;</p>
				<p class="reshape-copy">
					<span class="font-medium">Website</span><br />Alexa Steinbrück
				</p>
			</div>
		</div>
	</section>
	<section>
		<div class="md:grid md:grid-cols-3 gap-10">
			<h2 class="reshape-section-header md:reshape-desktop-section-header mt-20">Kontakt</h2>
			<p class="reshape-copy">
				<span class="font-medium">Hoch­schule für Gestal­tung Schwä­bisch Gmünd</span>
				<br />Univer­sity of Applied Sciences <br />Rektor-Klaus-Straße 100 <br />D‑73525
				Schwä­bisch Gmünd
				<a
					class="block reshape-link mt-8"
					href="https://goo.gl/maps/FCYPLeJzBLvpGkQNA"
					target="_blank"
					rel="noopener noreferrer">Google Maps</a
				>
			</p>
			<p class="reshape-copy max-md:mt-14">
				<span class="font-medium block mb-6">Let's get social</span>
				<br />
				<a
					class="reshape-link mr-14"
					href="https://www.instagram.com/hfg.gmuend/?hl=en"
					target="_blank"
					rel="noopener noreferrer">Instagram</a
				>
				<a
					class="reshape-link"
					href="https://twitter.com/gestaltungai"
					target="_blank"
					rel="noopener noreferrer">Twitter</a
				>
			</p>
		</div>
	</section>
	<section class="pb-8">
		<Logos />
	</section>
</main>

<style>
	section {
		margin-top: 120px;
	}

	.reshape-title {
		position: relative;
		font-size: 55px;
		text-align: right;
		margin-left: 50%;
		margin-top: 100px;
	}

	.reshape-subtitle {
		position: relative;
		font-size: 16px;
		line-height: 19px;
		font-weight: 300;
		margin-left: auto;
		margin-top: 100px;
	}

	@media (min-width: 768px) {
		.reshape-title {
			font-size: 70px;
			line-height: 84px;
			font-weight: 500;
		}

		.reshape-subtitle {
			font-size: 20px;
			line-height: 23px;
			font-weight: 400;
		}
	}

	.symposium-firstpara {
		margin-bottom: 74px;
	}

	div.seperator {
		border-top: 2px solid black;
	}

	.reshape-link::after {
		content: '';
		display: inline-block;
		width: 11px;
		height: 11px;
		background-image: url('./icon-link.svg');
		background-repeat: no-repeat;
		margin-left: 3px;
	}
</style>
