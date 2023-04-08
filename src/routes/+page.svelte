<script>
	import MenuIcon from '$lib/icon-menu.svelte';
	import SpeakerTile from '$lib/speaker-tile.svelte';
	import TeamTile from '$lib/team-tile.svelte';
	import Carousel from '$lib/carousel.svelte';
	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

{#if menuOpen}
	<nav class="fixed w-full z-10 h-screen pt-11 bg-reshape-mauve inset text-4xl">
		<ul>
			<li>Programm</li>
			<li>Anmeldung</li>
			<li>AI+D Lab</li>
			<li>Kontakt</li>
		</ul>
	</nav>
{/if}

<header
	class="fixed w-full z-20 inset border-y-2 border-black h-11 flex items-center"
	class:bg-white={!menuOpen}
	class:bg-reshape-mauve={menuOpen}
>
	<span class="font-medium text-base">reshape</span>
	<button class="ml-auto p-2" on:click={toggleMenu} class:rotate-45={!menuOpen}><MenuIcon /></button
	>
</header>

<main class="pt-11 inset reshape-gradient-bg">
	<div class="cover min-h-screen relative inset-negative">
		<div class="inset">
			<h1 class="symposium-title">reshape</h1>
			<h2 class="symposium-subtitle text-base font-normal">
				Forum for Artificial Intelligence in Art and Design
			</h2>
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
				Featuring a lineup of thought-provoking talks, engaging panel discussions, and hands-on
				workshops, we will explore how AI can expand art and design practices and enhance
				creativity, learn about the challenges and affordances of designing AI-based interfaces and
				products, and discover best practices for teaching AI to creatives. Join us for a refreshing
				and in-depth exploration of the many-sided world of creative AI.
			</p>
		</div>
	</section>

	<section>
		<div class="md:grid md:grid-cols-3 gap-10">
			<h2 class="reshape-section-header md:reshape-desktop-section-header">Speaker&#8203;*innen</h2>
			<div class="col-span-2">
				<!-- MOBILE (carousel) -->
				<div class="overflow-hidden inset-negative md:hidden">
					<div class="inset">
						<div class="inset-left">
							<Carousel autoplay={false} perPage="1">
								<SpeakerTile name="Simon Maris" />
								<SpeakerTile name="Alexa Steinbrück" />
							</Carousel>
						</div>
					</div>
				</div>
				<!-- DESKTOP -->
				<div class="grid grid-cols-5 max-md:hidden md:visible">
					<SpeakerTile name="Simon Maris" />
					<SpeakerTile name="Alexa Steinbrück" />
					<SpeakerTile name="Simon Maris" />
					<SpeakerTile name="Alexa Steinbrück" />
					<SpeakerTile name="Simon Maris" />
					<SpeakerTile name="Alexa Steinbrück" />
				</div>
			</div>
		</div>
	</section>
	<section>
		<h2 class="reshape-section-header md:reshape-desktop-section-header">Öffentliches Programm</h2>
		<p class="mb-8 reshape-lead-light">10. Mai 2022 – 12. Mai 2023 <br /> (Mittwoch bis Freitag)</p>
		<div class="inset-negative"><div class="seperator" /></div>
		<article class="daily-schedule md:grid md:grid-cols-3 gap-10">
			<h3 class="reshape-subsection-header text-reshape-lila basis-1/2">
				Mittwoch<br />10.&nbsp;Mai
			</h3>
			<ul class="time-table reshape-lead-light">
				<li>
					<p>
						<span class="font-medium">12:00 – 12:00</span><span>Beginn der Veranstaltung</span><span
							>Welcome</span
						>
					</p>
				</li>
				<li>
					<p>
						<span class="font-medium">12:00 – 12:00</span><span>Beginn der Veranstaltung</span><span
							>Welcome</span
						>
					</p>
				</li>
				<li>
					<p>
						<span class="font-medium">12:00 – 12:00</span><span>Beginn der Veranstaltung</span><span
							>Welcome</span
						>
					</p>
				</li>
			</ul>
		</article>
		<div class="inset-negative"><div class="seperator" /></div>
		<article class="daily-schedule md:grid md:grid-cols-3 gap-10">
			<h3 class="reshape-subsection-header text-reshape-blau basis-1/2">
				Donnerstag<br />11.&nbsp;Mai
			</h3>
			<ul class="time-table reshape-lead-light">
				<li>
					<p>
						<span class="font-medium">12:00 – 12:00</span><span>Beginn der Veranstaltung</span><span
							>Welcome</span
						>
					</p>
				</li>
				<li>
					<p>
						<span class="font-medium">12:00 – 12:00</span><span>Beginn der Veranstaltung</span><span
							>Welcome</span
						>
					</p>
				</li>
				<li>
					<p>
						<span class="font-medium">12:00 – 12:00</span><span>Beginn der Veranstaltung</span><span
							>Welcome</span
						>
					</p>
				</li>
			</ul>
		</article>
		<div class="inset-negative"><div class="seperator" /></div>
		<article class="daily-schedule md:grid md:grid-cols-3 gap-10">
			<h3 class="reshape-subsection-header text-reshape-gruen basis-1/2">
				Freitag<br />12.&nbsp;Mai
			</h3>
			<ul class="time-table reshape-lead-light">
				<li>
					<p>
						<span class="reshape-lead-medium">12:00 – 12:00</span><span
							>Beginn der Veranstaltung</span
						><span>Welcome</span>
					</p>
				</li>
				<li>
					<p>
						<span class="reshape-lead-medium">12:00 – 12:00</span><span
							>Beginn der Veranstaltung</span
						><span>Welcome</span>
					</p>
				</li>
				<li>
					<p>
						<span class="reshape-lead-medium">12:00 – 12:00</span><span
							>Beginn der Veranstaltung</span
						><span>Welcome</span>
					</p>
				</li>
			</ul>
		</article>
		<div class="inset-negative"><div class="seperator" /></div>
		<p class="mt-20 reshape-lead-medium md:reshape-desktop-lead-medium">
			Das öffentliche Programm ist kostenfrei für alle zugänglich. Hier geht es zur Anmeldung
		</p>
	</section>
	<section>
		<div class="md:grid md:grid-cols-3 gap-10">
			<div class="col-span-2">
				<h2 class="reshape-section-header md:reshape-desktop-section-header">Internes Programm</h2>
				<p class="reshape-copy md:reshape-lead-light">
					8. Mai 2022 – 10. Mai 2022 <br />(Montag bis Mittwoch)
				</p>
			</div>
			<p class="reshape-copy inset-left mt-4 mb-8">
				Nutzer:innen Kontexte sowie ethische und rechtliche Fragestellungen syste-matisch zu
				berücksichtigen. Sie sollen in der Lage sein, Machine Learning reflektiert als Werkzeug und
				Material der Gestaltung einzusetzen. Dazu sollen innerhalb der nächsten vier Jahre im Rahmen
				des Projekts neue Lehrformate, Tools, Symposien und Publikationen entstehen. KITeGG ist eins
				von über.
			</p>
		</div>

		<div class="inset-negative"><div class="seperator" /></div>
		<h3 class="reshape-subsection-header">Workshops</h3>

		<article class="workshop-schedule">
			<ul class="time-table reshape-lead-light">
				<li>
					<p>
						<span class="font-medium">Titel des Workshops</span><span>Workshop-Leiter*in</span>
					</p>
				</li>
				<li>
					<p>
						<span class="font-medium">Titel des Workshops</span><span>Workshop-Leiter*in</span>
					</p>
				</li>
				<li>
					<p>
						<span class="font-medium">Titel des Workshops</span><span>Workshop-Leiter*in</span>
					</p>
				</li>
				<li>
					<p>
						<span class="font-medium">Titel des Workshops</span><span>Workshop-Leiter*in</span>
					</p>
				</li>
			</ul>
		</article>
	</section>
	<section>
		<div class="inset-negative"><div class="seperator" /></div>
		<p class="reshape-lead-medium md:reshape-desktop-lead-medium mt-32">
			Ein Verbundprojekt von fünf Hochschulen zur Integration von KI in der Gestaltungslehre.
			Gefördert vom BMBF.
		</p>
		<div class="md:grid md:grid-cols-3 gap-10 md:mt-40">
			<h2 class="reshape-section-header md:reshape-desktop-section-header mt-20">KITeGG</h2>
			<p class="reshape-copy max-md:inset-left">
				Themen in die Gestaltungslehre bringen. Projektpartner sind die Hochschule Mainz, die
				Hochschule für Gestaltung Offen-bach, die Hochschule für Gestaltung Schwäbisch Gmünd, die
				Köln International School of Design (TH Köln) und die Hochschule Trier. Als “Gestalter*innen
				der Zukunft” sollen Studierende sowohl über Wissen zu aktuell und zukünftig relevanten
				Technologien als auch über profunde technische Kenntnisse und die Befähigung verfügen,
			</p>
			<p class="reshape-copy max-md:inset-left mt-9">
				Nutzer:innen Kontexte sowie ethische und rechtliche Fragestellungen syste-matisch zu
				berücksichtigen. Sie sollen in der Lage sein, Machine Learning reflektiert als Werkzeug und
				Material der Gestaltung einzusetzen. Dazu sollen innerhalb der nächsten vier Jahre im Rahmen
				des Projekts neue Lehrformate, Tools, Symposien und Publikationen entstehen. KITeGG ist eins
				von über.
			</p>
		</div>
	</section>
	<section>
		<div class="md:grid md:grid-cols-3 gap-10 md:mt-40">
			<h2 class="reshape-section-header md:reshape-desktop-section-header max-md:mt-20">
				AI+D Lab
			</h2>
			<p class="reshape-copy max-md:inset-left">
				Themen in die Gestaltungslehre bringen. Projektpartner sind die Hochschule Mainz, die
				Hochschule für Gestaltung Offen-bach, die Hochschule für Gestaltung Schwäbisch Gmünd, die
				Köln International School of Design (TH Köln) und die Hochschule Trier. Als “Gestalter*innen
				der Zukunft” sollen Studierende sowohl über Wissen zu aktuell und zukünftig relevanten
				Technologien als auch über profunde technische Kenntnisse und die Befähigung verfügen,
			</p>
			<p class="reshape-copy max-md:inset-left max-md:mt-9">
				Nutzer:innen Kontexte sowie ethische und rechtliche Fragestellungen syste-matisch zu
				berücksichtigen. Sie sollen in der Lage sein, Machine Learning reflektiert als Werkzeug und
				Material der Gestaltung einzusetzen. Dazu sollen innerhalb der nächsten vier Jahre im Rahmen
				des Projekts neue Lehrformate, Tools, Symposien und Publikationen entstehen. KITeGG ist eins
				von über.
			</p>
		</div>
	</section>
	<section>
		<div class="md:grid md:grid-cols-3 gap-10 md:mt-40">
			<h2 class="reshape-section-header md:reshape-desktop-section-header mt-20">AI+D Team</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-y-12 col-span-2">
				<TeamTile name="Hartmut Bohnacker" description="Bereich" />
				<TeamTile name="Hartmut Bohnacker" description="Bereich" />
				<TeamTile name="Hartmut Bohnacker" description="Bereich" />
				<TeamTile name="Hartmut Bohnacker" description="Bereich" />
				<TeamTile name="Hartmut Bohnacker" description="Bereich" />
				<TeamTile name="Hartmut Bohnacker" description="Bereich" />
				<TeamTile name="Hartmut Bohnacker" description="Bereich" />
				<TeamTile name="Hartmut Bohnacker" description="Bereich" />
			</div>
		</div>
	</section>
	<section>
		<div class="md:grid md:grid-cols-3 gap-10">
			<h2 class="reshape-section-header md:reshape-desktop-section-header mt-20">Reshape Team</h2>
			<div class="max-md:inset-left col-span-2">
				<p class="reshape-copy"><span class="font-medium">Programm</span><br />Alexa Steinbrück</p>
				<p>&nbsp;</p>
				<p class="reshape-copy">
					<span class="font-medium">Graphic Design</span><br />Lucie Paula Claire de Hair
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
	<section class="h-64">Logos...</section>
</main>

<style>
	.cover {
		background: url('$lib/assets/form-background.png');
	}

	section {
		margin-top: 120px;
	}

	.symposium-title {
		text-align: right;
		width: 100%;
		font-size: 55px;
	}
	.symposium-subtitle {
		font-family: 'Helvetica';
		position: absolute;
		width: 156px;
		top: 339px;
		margin-left: 30%;
	}

	.symposium-firstpara {
		margin-bottom: 74px;
	}

	.daily-schedule,
	.workshop-schedule {
		padding: 50px 0;
	}

	ul.time-table > li:not(:last-child) {
		margin-bottom: 61px;
	}

	ul.time-table span {
		display: block;
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
