<script>
	import KanaSettings from '$lib/components/kana-settings.svelte';
	import { setMode, settings } from '$lib/stores/setting-store';
	import { ModeEnum } from '$lib/types/settings.type';
	import { ArrowLeftRight, Settings } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';

	let animation = $state(false);
	// let mode = $state('romaji-char');

	function changeMode() {
		if ($settings.mode === ModeEnum.ROMAJI_CHAR) {
			setMode(ModeEnum.CHAR_ROMAJI);
		} else {
			setMode(ModeEnum.ROMAJI_CHAR);
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
							Test your knowledge of Hiragana, Katakana, and Kanji!
						</p>
					</div>
					<div class="flex gap-2" in:fly={{ y: 20, duration: 800, delay: 300 }}>
						<button class="btn-kana" onclick={changeMode}>
							<ArrowLeftRight
								class="transition-all {$settings.mode === ModeEnum.ROMAJI_CHAR ? 'rotate-180' : ''}"
							/>
						</button>
						<KanaSettings />
					</div>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-5 md:grid-cols-3">
				<a href="/hiragana" class="btn-kana" in:fly={{ y: 20, duration: 1000, delay: 800 }}>
					<h2 class="text-2xl font-semibold">ひらがな</h2>
					<p class="font-medium">Hiragana Test</p>
					{#key $settings.mode}
						<p class="text-rose-500" in:slide={{ duration: 800 }}>
							{$settings.mode === ModeEnum.ROMAJI_CHAR ? 'Romaji - Hiragana' : 'Hiragana - Romaji'}
						</p>
					{/key}
				</a>
				<a href="/katakana" class="btn-kana" in:fly={{ y: 20, duration: 1000, delay: 1200 }}>
					<h2 class="text-2xl font-semibold">カタカナ</h2>
					<p class="font-medium">Katakana Test</p>
					{#key $settings.mode}
						<p class="text-rose-500" in:slide={{ duration: 800 }}>
							{$settings.mode === ModeEnum.ROMAJI_CHAR ? 'Romaji - Katakana' : 'Katakana - Romaji'}
						</p>
					{/key}
				</a>
				<a
					href="/kanji"
					class="btn-kana col-span-2 md:col-auto"
					in:fly={{ y: 20, duration: 1000, delay: 1400 }}
				>
					<h2 class="text-2xl font-semibold">漢字</h2>
					<p class="font-medium">Kanji Test (N5)</p>
					{#key $settings.mode}
						<p class="text-rose-500" in:slide={{ duration: 800 }}>
							{$settings.mode === ModeEnum.ROMAJI_CHAR ? 'Romaji - Kanji' : 'Kanji - Romaji'}
						</p>
					{/key}
				</a>
			</div>
		</div>
	{/if}
</div>
