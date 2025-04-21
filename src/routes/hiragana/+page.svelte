<script lang="ts">
	import Questions from '$lib/components/questions.svelte';
	import { hiraganaList } from '$lib/data/hiragana';
</script>

<svelte:head>
	<title>Hiragana Test - Kana Quest</title>
</svelte:head>

<Questions charList={hiraganaList} />
