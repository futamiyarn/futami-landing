<script>
	import Trakteer from '$lib/images/trakteer.svelte';
</script>

<svelte:head>
	<title>Donate - Futami</title>
	<meta name="description" content="Donate for support me" />
</svelte:head>

<main class="totality-container">
	<section class="cards-category">
		<h2 class="name-category">In Indonesia (IDR)</h2>
		<div class="cards">
			<!-- Trakteer -->
			<a
				class="card"
				href="https://trakteer.id/futami"
				target="_blank"
				rel="noopener noreferrer"
				title="Trakteer"
			>
				<div class="card-icon">
					<Trakteer />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Trakteer</h3>
					<span class="card-content__author">Rp. 5.000 each</span>
				</div>
			</a>

			<!-- Saweria -->
			<a
				class="card"
				href="https://saweria.co/futami"
				target="_blank"
				rel="noopener noreferrer"
				title="Saweria"
			>
				<div class="card-icon">
					<img src="/assets/images/saweria.png" alt="Saweria" />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Saweria</h3>
					<span class="card-content__author">Min Rp. 5.000</span>
				</div>
			</a>
		</div>
	</section>

	<section class="cards-category">
		<h2 class="name-category">Overseas (Dollar)</h2>
		<div class="cards">
			<!-- YouTube Shorts -->
			<a
				class="card"
				href="https://ko-fi.com/futami"
				target="_blank"
				rel="noopener noreferrer"
				title="Ko-fi"
			>
				<div class="card-icon">
					<img src="/assets/images/kofi.png" alt="Ko-fi" />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Ko-fi</h3>
					<span class="card-content__author">$3 each</span>
				</div>
			</a>
		</div>
	</section>
</main>
