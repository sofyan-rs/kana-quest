<script lang="ts">
	import type { CharType } from '$lib/types/char.type';
	import { ArrowLeft } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Modal from './modal.svelte';
	import { ModeEnum } from '$lib/types/settings.type';
	import { settings } from '$lib/stores/setting-store';

	let {
		charList
	}: {
		charList: CharType[];
	} = $props();

	let charListByMode = $state(charList);
	if ($settings.mode === ModeEnum.CHAR_ROMAJI) {
		charListByMode = charList.map((item) => ({
			char: item.romaji,
			romaji: item.char,
			translation: item.translation
		}));
	} else {
		charListByMode = charList;
	}

	let answer: CharType | null = $state(null);
	let options: CharType[] = $state([]);
	let isAnswered = $state(false);
	let isCorrect = $state(false);
	let prevAnswers: CharType[] = $state([]);
	let selectedOption: CharType | null = $state(null);
	let correctAnswers = $state(0);
	let currentQuestion = $state(1);
	let progress = $state(0);

	let showModal = $state(false);
	let audioPlayer: HTMLAudioElement | null = $state(null);

	function checkAnswer(userAnswer: CharType) {
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
		progress = (currentQuestion / $settings.totalQuestions) * 100;
		if (currentQuestion >= $settings.totalQuestions) {
			showModal = true;
			if (correctAnswers > $settings.totalQuestions - 2) {
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

	function generateOptions(answer: CharType) {
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
		if (!$settings.voice) {
			return;
		}
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
					>{correctAnswers}/{$settings.totalQuestions}</span
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
							<div class="flex flex-col gap-1 text-lg font-medium" in:fade={{ duration: 600 }}>
								<span>{option.romaji}</span>
								{#if option.translation}
									<span class="text-sm">({option.translation})</span>
								{/if}
							</div>
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
			disabled={currentQuestion >= $settings.totalQuestions || !isAnswered}>Next</button
		>
	</div>
</div>

<Modal
	show={showModal}
	closeButtonText="Restart"
	title="Test Completed!"
	onClose={() => {
		showModal = false;
		startGame();
	}}
>
	<p class="text-lg">
		You got <span class="font-semibold text-green-500">{correctAnswers}</span> out of
		<span class="font-semibold text-rose-500">{$settings.totalQuestions}</span> correct.
	</p>
</Modal>
