export enum ModeEnum {
	ROMAJI_CHAR,
	CHAR_ROMAJI
}

export interface SettingsType {
	mode: ModeEnum;
	voice: boolean;
	totalQuestions: number;
}
