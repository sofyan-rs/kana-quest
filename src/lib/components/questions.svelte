<script lang="ts">
	import type { Char } from '$lib/types/char.type';
	import { ArrowLeft } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Modal from './modal.svelte';
	import { currentMode } from '$lib/stores/mode-store';

	let {
		charList
	}: {
		charList: Char[];
	} = $props();

	const totalQuestions = 10;

	let charListByMode = $state(charList);
	if ($currentMode === 'char-romaji') {
		charListByMode = charList.map((item) => ({
			char: item.romaji,
			romaji: item.char
		}));
	} else {
		charListByMode = charList;
	}

	let answer: Char | null = $state(null);
	let options: Char[] = $state([]);
	let isAnswered = $state(false);
	let isCorrect = $state(false);
	let prevAnswers: Char[] = $state([]);
	let selectedOption: Char | null = $state(null);
	let correctAnswers = $state(0);
	let currentQuestion = $state(1);
	let progress = $state(0);

	let showModal = $state(false);
	let audioPlayer: HTMLAudioElement | null = $state(null);

	function checkAnswer(userAnswer: Char) {
		selectedOption = userAnswer;
		isAnswered = true;
		isCorrect = userAnswer.char === answer?.char;
		if (isCorrect) {
			correctAnswers++;
			playAudioCorrect();
		} else {
			playAudioIncorrect();
		}
		if (answer !== null) {
			prevAnswers.push(answer);
		}
		progress = (currentQuestion / totalQuestions) * 100;
		if (currentQuestion >= totalQuestions) {
			showModal = true;
			if (correctAnswers > totalQuestions - 2) {
				playAudioCongrats();
			} else {
				playAudioRepeatAgain();
			}
		}
	}

	function startGame() {
		isAnswered = false;
		isCorrect = false;
		prevAnswers = [];
		correctAnswers = 0;
		currentQuestion = 1;
		progress = 0;
		selectedOption = null;

		// Pick new answer
		answer = charListByMode[Math.floor(Math.random() * charListByMode.length)];

		// Generate options
		generateOptions(answer);
	}

	function nextQuestion() {
		isAnswered = false;
		isCorrect = false;
		currentQuestion += 1;
		selectedOption = null;

		// Filter out characters already used
		let available = charListByMode.filter((item) => !prevAnswers.includes(item));

		// If all items used, reset
		if (available.length === 0) {
			prevAnswers = [];
			available = [...charListByMode];
		}
		// Pick new answer
		answer = available[Math.floor(Math.random() * available.length)];

		// Generate options
		generateOptions(answer);
	}

	function generateOptions(answer: Char) {
		// Create a list excluding the correct answer
		let distractors = charListByMode.filter((item) => item !== answer);
		// Shuffle the distractors
		distractors.sort(() => Math.random() - 0.5);
		// Take up to 3 distractors, fill if needed
		while (distractors.length < 3) {
			// In case charListByMode is too small, repeat distractors randomly
			const randomItem = charListByMode[Math.floor(Math.random() * charListByMode.length)];
			if (!distractors.includes(randomItem) && randomItem !== answer) {
				distractors.push(randomItem);
			}
		}
		const optionsPool = [answer, ...distractors.slice(0, 3)];
		// Shuffle all 4 options
		options = optionsPool.sort(() => Math.random() - 0.5);
	}

	function playAudio(src: string) {
		if (audioPlayer) {
			audioPlayer.pause();
			audioPlayer.currentTime = 0;
		}
		audioPlayer = new Audio(src);
		audioPlayer.play();
	}

	function playAudioCorrect() {
		playAudio('/voices/correct.wav');
	}

	function playAudioIncorrect() {
		playAudio('/voices/incorrect.wav');
	}

	function playAudioCongrats() {
		playAudio('/voices/congrats.wav');
	}

	function playAudioRepeatAgain() {
		playAudio('/voices/repeat-again.wav');
	}

	onMount(() => {
		startGame();
	});
</script>

<div class="flex min-h-[100dvh] w-full flex-col justify-between">
	<div>
		<div class="h-2 bg-rose-500 transition-all duration-500" style="width: {progress}%"></div>
		<div class="container mx-auto mb-10 flex justify-between p-5">
			<div class="flex items-center gap-5" in:fly={{ x: -10, duration: 800 }}>
				<button onclick={() => history.back()}>
					<ArrowLeft />
				</button>
				<div class="rounded-md bg-neutral-700 px-4 py-2">
					Question No. : <span class="font-semibold text-rose-500">{currentQuestion}</span>
				</div>
			</div>
			<div class="rounded-md bg-neutral-700 px-4 py-2" in:fly={{ x: 10, duration: 800 }}>
				Total Score : <span class="font-semibold text-rose-500"
					>{correctAnswers}/{totalQuestions}</span
				>
			</div>
		</div>
	</div>

	{#key answer?.romaji}
		<div class="container mx-auto p-5">
			<div class="mb-5 text-center text-lg" in:fly={{ y: 8, duration: 1000 }}>
				<p>
					Select the correct character for <span
						in:fade={{ duration: 1000 }}
						class="text-xl font-semibold text-rose-500">{answer?.romaji}</span
					>
				</p>
			</div>

			<div class="grid grid-cols-2 gap-5" in:fly={{ y: 20, duration: 1000 }}>
				{#each options as option (option.romaji)}
					<button
						class="flex flex-col gap-1 rounded-lg bg-neutral-700 p-5 text-4xl shadow-[6px_6px_0px_0px_#222] transition hover:bg-neutral-600 hover:shadow-[8px_8px_0px_0px_#222] disabled:opacity-50 disabled:hover:bg-neutral-700 {option.char ===
							answer?.char && isAnswered
							? 'bg-green-500!'
							: selectedOption?.char === option.char && isAnswered
								? 'bg-red-500!'
								: ''}"
						onclick={() => checkAnswer(option)}
						disabled={isAnswered}
					>
						{option.char}
						{#if isAnswered}
							<span class="text-lg font-medium" in:fade={{ duration: 600 }}>{option.romaji}</span>
						{/if}
					</button>
				{/each}
			</div>
			{#if isAnswered}
				<div class="mt-5 text-center text-lg font-semibold" in:fade={{ duration: 600 }}>
					{#if isCorrect}
						<p class="text-green-500">Correct!</p>
					{:else}
						<p class="text-red-500">Incorrect!</p>
					{/if}
				</div>
			{/if}
		</div>
	{/key}

	<div class="container mx-auto mt-10 flex justify-between p-5">
		<button
			in:fly={{ x: -10, duration: 800 }}
			class="rounded-md bg-rose-500 px-5 py-3 text-white shadow-[6px_6px_0px_0px_#222] transition hover:bg-rose-400 hover:shadow-[8px_8px_0px_0px_#222] disabled:opacity-50 disabled:hover:bg-rose-500"
			onclick={startGame}>Restart</button
		>
		<button
			in:fly={{ x: 10, duration: 800 }}
			class="rounded-md bg-rose-500 px-5 py-3 text-white shadow-[6px_6px_0px_0px_#222] transition hover:bg-rose-400 hover:shadow-[8px_8px_0px_0px_#222] disabled:opacity-50 disabled:hover:bg-rose-500"
			onclick={nextQuestion}
			disabled={currentQuestion >= totalQuestions || !isAnswered}>Next</button
		>
	</div>
</div>

<Modal
	show={showModal}
	closeButtonText="Restart"
	onClose={() => {
		showModal = false;
		startGame();
	}}
>
	<h2 class="text-2xl font-bold text-rose-500">Test Completed!</h2>
	<p class="mt-2 text-lg">
		You got <span class="font-semibold text-green-500">{correctAnswers}</span> out of
		<span class="font-semibold text-rose-500">{totalQuestions}</span> correct.
	</p>
</Modal>
