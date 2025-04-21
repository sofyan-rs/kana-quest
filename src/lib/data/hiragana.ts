import type { Char } from '$lib/types/char.type';

export const hiraganaList: Char[] = [
	// a-row
	{ char: 'あ', romaji: 'a' },
	{ char: 'い', romaji: 'i' },
	{ char: 'う', romaji: 'u' },
	{ char: 'え', romaji: 'e' },
	{ char: 'お', romaji: 'o' },

	// ka-row
	{ char: 'か', romaji: 'ka' },
	{ char: 'き', romaji: 'ki' },
	{ char: 'く', romaji: 'ku' },
	{ char: 'け', romaji: 'ke' },
	{ char: 'こ', romaji: 'ko' },

	// sa-row
	{ char: 'さ', romaji: 'sa' },
	{ char: 'し', romaji: 'shi' },
	{ char: 'す', romaji: 'su' },
	{ char: 'せ', romaji: 'se' },
	{ char: 'そ', romaji: 'so' },

	// ta-row
	{ char: 'た', romaji: 'ta' },
	{ char: 'ち', romaji: 'chi' },
	{ char: 'つ', romaji: 'tsu' },
	{ char: 'て', romaji: 'te' },
	{ char: 'と', romaji: 'to' },

	// na-row
	{ char: 'な', romaji: 'na' },
	{ char: 'に', romaji: 'ni' },
	{ char: 'ぬ', romaji: 'nu' },
	{ char: 'ね', romaji: 'ne' },
	{ char: 'の', romaji: 'no' },

	// ha-row
	{ char: 'は', romaji: 'ha' },
	{ char: 'ひ', romaji: 'hi' },
	{ char: 'ふ', romaji: 'fu' },
	{ char: 'へ', romaji: 'he' },
	{ char: 'ほ', romaji: 'ho' },

	// ma-row
	{ char: 'ま', romaji: 'ma' },
	{ char: 'み', romaji: 'mi' },
	{ char: 'む', romaji: 'mu' },
	{ char: 'め', romaji: 'me' },
	{ char: 'も', romaji: 'mo' },

	// ya-row
	{ char: 'や', romaji: 'ya' },
	{ char: 'ゆ', romaji: 'yu' },
	{ char: 'よ', romaji: 'yo' },

	// ra-row
	{ char: 'ら', romaji: 'ra' },
	{ char: 'り', romaji: 'ri' },
	{ char: 'る', romaji: 'ru' },
	{ char: 'れ', romaji: 're' },
	{ char: 'ろ', romaji: 'ro' },

	// wa-row
	{ char: 'わ', romaji: 'wa' },
	{ char: 'を', romaji: 'wo' },
	{ char: 'ん', romaji: 'n' },

	// Dakuten (voiced)
	{ char: 'が', romaji: 'ga' },
	{ char: 'ぎ', romaji: 'gi' },
	{ char: 'ぐ', romaji: 'gu' },
	{ char: 'げ', romaji: 'ge' },
	{ char: 'ご', romaji: 'go' },

	{ char: 'ざ', romaji: 'za' },
	{ char: 'じ', romaji: 'ji' },
	{ char: 'ず', romaji: 'zu' },
	{ char: 'ぜ', romaji: 'ze' },
	{ char: 'ぞ', romaji: 'zo' },

	{ char: 'だ', romaji: 'da' },
	{ char: 'ぢ', romaji: 'ji (di)' },
	{ char: 'づ', romaji: 'zu (du)' },
	{ char: 'で', romaji: 'de' },
	{ char: 'ど', romaji: 'do' },

	{ char: 'ば', romaji: 'ba' },
	{ char: 'び', romaji: 'bi' },
	{ char: 'ぶ', romaji: 'bu' },
	{ char: 'べ', romaji: 'be' },
	{ char: 'ぼ', romaji: 'bo' },

	// Handakuten (p-sounds)
	{ char: 'ぱ', romaji: 'pa' },
	{ char: 'ぴ', romaji: 'pi' },
	{ char: 'ぷ', romaji: 'pu' },
	{ char: 'ぺ', romaji: 'pe' },
	{ char: 'ぽ', romaji: 'po' },

	// Yōon (combinations, written small ゃゅょ)
	{ char: 'きゃ', romaji: 'kya' },
	{ char: 'きゅ', romaji: 'kyu' },
	{ char: 'きょ', romaji: 'kyo' },

	{ char: 'しゃ', romaji: 'sha' },
	{ char: 'しゅ', romaji: 'shu' },
	{ char: 'しょ', romaji: 'sho' },

	{ char: 'ちゃ', romaji: 'cha' },
	{ char: 'ちゅ', romaji: 'chu' },
	{ char: 'ちょ', romaji: 'cho' },

	{ char: 'にゃ', romaji: 'nya' },
	{ char: 'にゅ', romaji: 'nyu' },
	{ char: 'にょ', romaji: 'nyo' },

	{ char: 'ひゃ', romaji: 'hya' },
	{ char: 'ひゅ', romaji: 'hyu' },
	{ char: 'ひょ', romaji: 'hyo' },

	{ char: 'みゃ', romaji: 'mya' },
	{ char: 'みゅ', romaji: 'myu' },
	{ char: 'みょ', romaji: 'myo' },

	{ char: 'りゃ', romaji: 'rya' },
	{ char: 'りゅ', romaji: 'ryu' },
	{ char: 'りょ', romaji: 'ryo' },

	{ char: 'ぎゃ', romaji: 'gya' },
	{ char: 'ぎゅ', romaji: 'gyu' },
	{ char: 'ぎょ', romaji: 'gyo' },

	{ char: 'じゃ', romaji: 'ja' },
	{ char: 'じゅ', romaji: 'ju' },
	{ char: 'じょ', romaji: 'jo' },

	{ char: 'びゃ', romaji: 'bya' },
	{ char: 'びゅ', romaji: 'byu' },
	{ char: 'びょ', romaji: 'byo' },

	{ char: 'ぴゃ', romaji: 'pya' },
	{ char: 'ぴゅ', romaji: 'pyu' },
	{ char: 'ぴょ', romaji: 'pyo' }
];
