<script lang="ts">
	import { katakanaList } from '$lib/data/katakana';
	import type { Char } from '$lib/types/char.type';
	import { ArrowLeft } from '@lucide/svelte';
	import { onMount } from 'svelte';

	const totalQuestions = 10;

	let answer: Char | null = null;
	let options: Char[] = [];
	let isAnswered = false;
	let isCorrect = false;
	let prevAnswers: Char[] = [];
	let selectedOption: Char | null = null;
	let correctAnswers = 0;
	let currentQuestion = 1;

	function checkAnswer(userAnswer: Char) {
		selectedOption = userAnswer;
		isAnswered = true;
		isCorrect = userAnswer.char === answer?.char;
		if (isCorrect) {
			correctAnswers++;
		}
		if (answer !== null) {
			prevAnswers.push(answer);
		}
	}

	function startGame() {
		isAnswered = false;
		isCorrect = false;
		prevAnswers = [];
		correctAnswers = 0;
		currentQuestion = 1;
		selectedOption = null;

		// Pick new answer
		answer = katakanaList[Math.floor(Math.random() * katakanaList.length)];

		// Generate options
		options = katakanaList.filter((item) => item !== answer);
		options.sort(() => Math.random() - 0.5);
		options = options.slice(0, 3);
		options = [answer, ...options];
		options.sort(() => Math.random() - 0.5);
	}

	function nextQuestion() {
		isAnswered = false;
		isCorrect = false;
		currentQuestion += 1;
		selectedOption = null;

		// Filter out characters already used
		let available = katakanaList.filter((item) => !prevAnswers.includes(item));

		// If all items used, reset
		if (available.length === 0) {
			prevAnswers = [];
			available = [...katakanaList];
		}
		// Pick new answer
		answer = available[Math.floor(Math.random() * available.length)];

		// Generate options
		options = katakanaList.filter((item) => item !== answer);
		options.sort(() => Math.random() - 0.5);
		options = options.slice(0, 3);
		options = [answer, ...options];
		options.sort(() => Math.random() - 0.5);
	}

	onMount(() => {
		startGame();
	});
</script>

<div class="container mx-auto flex min-h-[100dvh] w-full flex-col justify-between p-5">
	<div class="mb-10 flex justify-between">
		<div class="flex items-center gap-5">
			<button onclick={() => history.back()}>
				<ArrowLeft />
			</button>
			<div class="rounded-md bg-neutral-700 px-4 py-2">
				Question No. : <span class="font-semibold text-rose-500">{currentQuestion}</span>
			</div>
		</div>
		<div class="rounded-md bg-neutral-700 px-4 py-2">
			Total Score : <span class="font-semibold text-rose-500"
				>{correctAnswers}/{totalQuestions}</span
			>
		</div>
	</div>

	<div>
		<div class="mb-5 text-center text-lg">
			<p>
				Select the correct character for <span class="font-semibold text-rose-500"
					>{answer?.romaji}</span
				>
			</p>
		</div>
		<div class="grid grid-cols-2 gap-5">
			{#each options as option (option.romaji)}
				<button
					class="rounded-lg bg-neutral-700 p-5 text-4xl shadow-[6px_6px_0px_0px_#222] transition hover:bg-neutral-600 hover:shadow-[8px_8px_0px_0px_#222] disabled:opacity-50 disabled:hover:bg-neutral-700 {option.char ===
						answer?.char && isAnswered
						? 'bg-green-500!'
						: selectedOption?.char === option.char && isAnswered
							? 'bg-red-500!'
							: ''}"
					onclick={() => checkAnswer(option)}
					disabled={isAnswered}
				>
					{option.char}
				</button>
			{/each}
		</div>
		{#if isAnswered}
			<div class="mt-5 text-center font-semibold">
				{#if isCorrect}
					<p class="text-green-500">Correct!</p>
				{:else}
					<p class="text-red-500">Incorrect!</p>
				{/if}
			</div>
		{/if}
	</div>

	<div class="mt-10 flex justify-between">
		<button
			class="rounded-md bg-rose-500 px-5 py-3 text-white shadow-[6px_6px_0px_0px_#222] transition hover:bg-rose-400 hover:shadow-[8px_8px_0px_0px_#222] disabled:opacity-50 disabled:hover:bg-rose-500"
			onclick={startGame}>Restart</button
		>
		<button
			class="rounded-md bg-rose-500 px-5 py-3 text-white shadow-[6px_6px_0px_0px_#222] transition hover:bg-rose-400 hover:shadow-[8px_8px_0px_0px_#222] disabled:opacity-50 disabled:hover:bg-rose-500"
			onclick={nextQuestion}
			disabled={currentQuestion >= totalQuestions || !isAnswered}>Next</button
		>
	</div>
</div>
