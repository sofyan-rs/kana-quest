<script lang="ts">
	import Questions from '$lib/components/questions.svelte';
	import { katakanaList } from '$lib/data/katakana';
</script>

<svelte:head>
	<title>Katakana Test - Kana Quest</title>
</svelte:head>

<Questions charList={katakanaList} />
