<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let {
		show,
		onClose,
		closeButtonText,
		children
	}: {
		show: boolean;
		onClose: () => void;
		closeButtonText?: string;
		children: Snippet;
	} = $props();
</script>

{#if show}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
		role="dialog"
		aria-modal="true"
		tabindex="0"
		onclick={() => onClose()}
		onkeydown={(event) => event.key === 'Escape' && onClose()}
		in:fade={{ duration: 500 }}
		out:fade={{ duration: 500 }}
	>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="rounded-lg bg-neutral-800 p-8 text-center text-white shadow-lg"
			role="document"
			onclick={(event) => event.stopPropagation()}
			in:fly={{ y: 30, duration: 800 }}
			out:fly={{ y: -30, duration: 800 }}
		>
			<div class="mb-5">
				{@render children()}
			</div>
			<button
				class="w-full rounded-md bg-rose-500 px-5 py-3 text-white shadow-[6px_6px_0px_0px_#222] transition hover:bg-rose-400 hover:shadow-[8px_8px_0px_0px_#222] disabled:opacity-50 disabled:hover:bg-rose-500"
				onclick={onClose}>{closeButtonText ? closeButtonText : 'Close'}</button
			>
		</div>
	</div>
{/if}
