<script>
	import trivia from '@lib/data/grettings.json';
</script>

<div class="trivia">
	{trivia[Math.floor(Math.random() * trivia.length)].fact}
</div>
