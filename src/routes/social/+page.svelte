<script>
	import FaYouTube from '$lib/images/font-awesome/youtube.svelte';
	import FaTiktok from '$lib/images/font-awesome/tiktok.svelte';
	import FaInstagram from '$lib/images/font-awesome/instagram.svelte';
	import FaXTwitter from '$lib/images/font-awesome/x-twitter.svelte';
	import FaFacebook from '$lib/images/font-awesome/facebook.svelte';

	import FaCoins from '$lib/images/font-awesome/coins-solid.svelte';
</script>

<svelte:head>
	<title>Social - Futami</title>
	<meta name="description" content="More link about me" />
</svelte:head>

<main class="totality-container">
	<section class="cards-category">
		<h2 class="name-category">Youtube</h2>
		<div class="cards">
			<!-- Futami -->
			<a
				class="card"
				href="https://youtube.com/@futamiyarn?sub_confirmation=1"
				target="_blank"
				rel="noopener noreferrer"
				title="Futami Ch."
			>
				<div class="card-icon">
					<img
						src="https://yt3.googleusercontent.com/S5IfQ0LxW6Pp4JxilCMZMrrEm59QBVCXQSqL7IZ1d4M6BIwuHsWSfpnPzibCpVxCBjZDp1CVpA=s800-c-k-c0x00ffffff-no-rj"
						alt="Futami Profile Pic"
					/>
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Futami Ch.</h3>
					<span class="card-content__author">Games, Tutorial, and More</span>
				</div>
			</a>

			<!-- Futamini -->
			<a
				class="card"
				href="https://youtube.com/@futamini?sub_confirmation=1"
				target="_blank"
				rel="noopener noreferrer"
				title="FutaMini"
			>
				<div class="card-icon">
					<img
						src="https://yt3.googleusercontent.com/6xeVvy7pG4ekmwzZTuhDhOPDqF4OQKRNoLR6ijjxs0Bu33b4QZZIwLiALxKbGx2gQlZMFPXHsg=s800-c-k-c0x00ffffff-no-rj"
						alt="Futamini"
					/>
				</div>
				<div class="card-content">
					<h3 class="card-content__title">FutaMini</h3>
					<span class="card-content__author">Random Content</span>
				</div>
			</a>

			<!-- Futami Cover -->
			<a
				class="card"
				href="https://youtube.com/@futamicover?sub_confirmation=1"
				target="_blank"
				rel="noopener noreferrer"
				title="Futami Cover"
			>
				<div class="card-icon">
					<img
						src="https://yt3.googleusercontent.com/_EbhGCfH415MGzhp7SBR7DVt8TMBGvA57gD6pfZ5ug3D1qH5OkuRbpKwwFtEZrmbb_mTGxTv=s800-c-k-c0x00ffffff-no-rj"
						alt="Futami Cover"
					/>
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Futami Cover</h3>
					<span class="card-content__author">AI Covers</span>
				</div>
			</a>
		</div>
	</section>

	<section class="cards-category">
		<h2 class="name-category">More Shorts</h2>
		<div class="cards">
			<!-- YouTube Shorts -->
			<a
				class="card"
				href="https://youtube.com/@futamiyarn/shorts?sub_confirmation=1"
				target="_blank"
				rel="noopener noreferrer"
				title="YouTube Shorts"
			>
				<div class="card-icon">
					<FaYouTube />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">YouTube Shorts</h3>
					<span class="card-content__author">Futami (Shorts Edition)</span>
				</div>
			</a>

			<!-- TikTok -->
			<a
				class="card"
				href="https://youtube.com/@futamiyarn?sub_confirmation=1"
				target="_blank"
				rel="noopener noreferrer"
				title="TikTok"
			>
				<div class="card-icon">
					<FaTiktok />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">TikTok</h3>
					<span class="card-content__author">Why I make this?</span>
				</div>
			</a>

			<!-- Instagram -->
			<a
				class="card"
				href="https://instagram.com/yansaan"
				target="_blank"
				rel="noopener noreferrer"
				title="Instagram"
			>
				<div class="card-icon">
					<FaInstagram />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Instagram</h3>
					<span class="card-content__author">Random Content</span>
				</div>
			</a>
		</div>
	</section>

	<section class="cards-category">
		<h2 class="name-category">Comunities</h2>
		<div class="cards">
			<!-- Twitter -->
			<a
				class="card"
				href="https://x.com/futamiyarn"
				target="_blank"
				rel="noopener noreferrer"
				title="X (Twitter)"
			>
				<div class="card-icon">
					<FaXTwitter />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">X (Twitter)</h3>
					<span class="card-content__author">Stalking Vtuber</span>
				</div>
			</a>

			<!-- Facebook -->
			<a
				class="card"
				href="https://facebook.com/futamiyarn"
				target="_blank"
				rel="noopener noreferrer"
				title="Facebook"
			>
				<div class="card-icon">
					<FaFacebook />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Facebook</h3>
					<span class="card-content__author">More shitpost here!</span>
				</div>
			</a>

			<!-- Instagram -->
			<a
				class="card"
				href="https://instagram.com/yansaan"
				target="_blank"
				rel="noopener noreferrer"
				title="Instagram"
			>
				<div class="card-icon">
					<FaInstagram />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Instagram</h3>
					<span class="card-content__author">Random Content</span>
				</div>
			</a>

			<!-- Donate -->
			<a class="card" href="/donate" title="Donate">
				<div class="card-icon">
					<FaCoins />
				</div>
				<div class="card-content">
					<h3 class="card-content__title">Donate</h3>
					<span class="card-content__author">Support me more</span>
				</div>
			</a>
		</div>
	</section>
</main>
