import { ModeEnum, type SettingsType } from '$lib/types/settings.type';
import { writable } from 'svelte/store';

const initialSettings: SettingsType = {
	mode: ModeEnum.CHAR_ROMAJI,
	voice: true,
	totalQuestions: 10
};

export const settings = writable<SettingsType>(initialSettings);

export const resetSettings = () => {
	settings.set(initialSettings);
};

export const setMode = (mode: ModeEnum) => {
	settings.update((prev) => ({ ...prev, mode }));
};

export const setVoice = (voice: boolean) => {
	settings.update((prev) => ({ ...prev, voice }));
};

export const setTotalQuestion = (totalQuestions: number) => {
	settings.update((prev) => ({ ...prev, totalQuestions }));
};
