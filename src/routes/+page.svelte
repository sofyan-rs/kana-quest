<script>
	import { fly, slide } from 'svelte/transition';
</script>

<div
	class="flex min-h-[100dvh] w-full flex-col justify-center bg-gradient-to-b from-rose-500 to-neutral-800"
>
	<div class="container mx-auto p-10">
		<h1 class="mb-10 text-4xl font-semibold" in:slide={{ duration: 1000 }}>Kana Quest</h1>
		<div class="grid grid-cols-2 gap-5">
			<a
				href="/hiragana"
				class="rounded-lg bg-neutral-700 p-4 shadow-[6px_6px_0px_0px_#222] transition hover:bg-neutral-600 hover:shadow-[8px_8px_0px_0px_#222]"
				in:fly={{ y: 20, duration: 1000, delay: 500 }}
			>
				<h2 class="text-2xl font-semibold">ひらがな</h2>
				<p class="">Hiragana Test</p>
			</a>
			<a
				href="/katakana"
				class="rounded-lg bg-neutral-700 p-4 shadow-[6px_6px_0px_0px_#222] transition hover:bg-neutral-600 hover:shadow-[8px_8px_0px_0px_#222]"
				in:fly={{ y: 20, duration: 1000, delay: 1000 }}
			>
				<h2 class="text-2xl font-semibold">カタカナ</h2>
				<p class="">Katakana Test</p>
			</a>
		</div>
	</div>
</div>
