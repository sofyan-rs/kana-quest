<script lang="ts">
	import { Settings, Volume1, VolumeX } from '@lucide/svelte';
	import Modal from './modal.svelte';
	import { settings, setTotalQuestion, setVoice } from '$lib/stores/setting-store';

	let showModal = $state(false);
</script>

<button
	class="btn-kana"
	onclick={() => {
		showModal = true;
	}}
>
	<Settings />
</button>
<Modal
	title="Settings"
	show={showModal}
	onClose={() => {
		showModal = false;
	}}
>
	<div class="w-[280px] text-lg">
		<div class="flex items-center justify-between gap-2 py-2">
			<span>Voice</span>
			<button
				onclick={() => {
					setVoice(!$settings.voice ? true : false);
				}}
				class="flex w-16 justify-center rounded-md bg-neutral-700 py-3 shadow-[6px_6px_0px_0px_#222]"
			>
				{#if $settings.voice}
					<Volume1 />
				{:else}
					<VolumeX class="text-rose-500" />
				{/if}
			</button>
		</div>
		<div class="flex items-center justify-between gap-2 py-2">
			<span>Total Questions</span>
			<input
				class="w-16 rounded-md border border-neutral-800 bg-neutral-700 p-2 text-center text-white shadow-[6px_6px_0px_0px_#222] transition focus:border-rose-500 focus:outline-none"
				type="number"
				min={1}
				max={20}
				bind:value={$settings.totalQuestions}
				oninput={(e) => {
					const target = e.target as HTMLInputElement;
					const value = parseInt(target.value);
					if (value < 1) {
						setTotalQuestion(1);
					} else if (value > 20) {
						setTotalQuestion(20);
					} else {
						setTotalQuestion(value);
					}
				}}
				onblur={() => {
					if (Number.isNaN($settings.totalQuestions) || $settings.totalQuestions < 1) {
						$settings.totalQuestions = 1;
					}
				}}
			/>
		</div>
	</div>
</Modal>
