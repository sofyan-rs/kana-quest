<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Kana Quest</title>
	<meta name="description" content="Learn Hiragana and Katakana" />
</svelte:head>

{@render children()}
