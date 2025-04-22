<script lang="ts">
	import Questions from '$lib/components/questions.svelte';
	import { hiraganaList } from '$lib/data/hiragana';
	import { kanjiList } from '$lib/data/kanji';
</script>

<svelte:head>
	<title>Kanji Test - Kana Quest</title>
</svelte:head>

<Questions charList={kanjiList} />
