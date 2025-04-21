<script>
	import { currentMode } from '$lib/stores/mode-store';
	import { ArrowLeftRight } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';

	let animation = $state(false);
	// let mode = $state('romaji-char');

	function changeMode() {
		if ($currentMode === 'romaji-char') {
			currentMode.set('char-romaji');
		} else {
			currentMode.set('romaji-char');
		}
	}

	onMount(() => {
		animation = true;
	});
</script>

<div
	class="flex min-h-[100dvh] w-full flex-col justify-center bg-gradient-to-b from-rose-500 to-neutral-800"
>
	{#if animation}
		<div class="container mx-auto p-10">
			<div class="mb-10">
				<div class="flex items-center justify-between gap-5">
					<div>
						<h1 class="text-4xl font-semibold" in:slide={{ duration: 800 }}>Kana Quest</h1>
						<p class="mt-2 text-lg text-neutral-300" in:fly={{ x: -20, duration: 800, delay: 200 }}>
							Test your knowledge of Hiragana and Katakana!
						</p>
					</div>
					<button
						class="rounded-lg bg-neutral-700 p-4 shadow-[6px_6px_0px_0px_#222] transition hover:bg-neutral-600 hover:shadow-[8px_8px_0px_0px_#222]"
						in:fly={{ y: 20, duration: 800, delay: 300 }}
						onclick={changeMode}
					>
						<ArrowLeftRight
							class="transition-all {$currentMode === 'romaji-char' ? 'rotate-180' : ''}"
						/>
					</button>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-5">
				<a
					href="/hiragana"
					class="rounded-lg bg-neutral-700 p-4 shadow-[6px_6px_0px_0px_#222] transition hover:bg-neutral-600 hover:shadow-[8px_8px_0px_0px_#222]"
					in:fly={{ y: 20, duration: 1000, delay: 800 }}
				>
					<h2 class="text-2xl font-semibold">ひらがな</h2>
					<p class="font-medium">Hiragana Test</p>
					{#key $currentMode}
						<p class="text-rose-500" in:slide={{ duration: 800 }}>
							{$currentMode === 'romaji-char' ? 'Romaji - Hiragana' : 'Hiragana - Romaji'}
						</p>
					{/key}
				</a>
				<a
					href="/katakana"
					class="rounded-lg bg-neutral-700 p-4 shadow-[6px_6px_0px_0px_#222] transition hover:bg-neutral-600 hover:shadow-[8px_8px_0px_0px_#222]"
					in:fly={{ y: 20, duration: 1000, delay: 1200 }}
				>
					<h2 class="text-2xl font-semibold">カタカナ</h2>
					<p class="font-medium">Katakana Test</p>
					{#key $currentMode}
						<p class="text-rose-500" in:slide={{ duration: 800 }}>
							{$currentMode === 'romaji-char' ? 'Romaji - Katakana' : 'Katakana - Romaji'}
						</p>
					{/key}
				</a>
			</div>
		</div>
	{/if}
</div>
