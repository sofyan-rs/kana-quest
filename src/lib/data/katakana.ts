import type { CharType } from '$lib/types/char.type';

export const katakanaList: CharType[] = [
	// A-row
	{ char: 'ア', romaji: 'a' },
	{ char: 'イ', romaji: 'i' },
	{ char: 'ウ', romaji: 'u' },
	{ char: 'エ', romaji: 'e' },
	{ char: 'オ', romaji: 'o' },

	// Ka-row
	{ char: 'カ', romaji: 'ka' },
	{ char: 'キ', romaji: 'ki' },
	{ char: 'ク', romaji: 'ku' },
	{ char: 'ケ', romaji: 'ke' },
	{ char: 'コ', romaji: 'ko' },

	// Sa-row
	{ char: 'サ', romaji: 'sa' },
	{ char: 'シ', romaji: 'shi' },
	{ char: 'ス', romaji: 'su' },
	{ char: 'セ', romaji: 'se' },
	{ char: 'ソ', romaji: 'so' },

	// Ta-row
	{ char: 'タ', romaji: 'ta' },
	{ char: 'チ', romaji: 'chi' },
	{ char: 'ツ', romaji: 'tsu' },
	{ char: 'テ', romaji: 'te' },
	{ char: 'ト', romaji: 'to' },

	// Na-row
	{ char: 'ナ', romaji: 'na' },
	{ char: 'ニ', romaji: 'ni' },
	{ char: 'ヌ', romaji: 'nu' },
	{ char: 'ネ', romaji: 'ne' },
	{ char: 'ノ', romaji: 'no' },

	// Ha-row
	{ char: 'ハ', romaji: 'ha' },
	{ char: 'ヒ', romaji: 'hi' },
	{ char: 'フ', romaji: 'fu' },
	{ char: 'ヘ', romaji: 'he' },
	{ char: 'ホ', romaji: 'ho' },

	// Ma-row
	{ char: 'マ', romaji: 'ma' },
	{ char: 'ミ', romaji: 'mi' },
	{ char: 'ム', romaji: 'mu' },
	{ char: 'メ', romaji: 'me' },
	{ char: 'モ', romaji: 'mo' },

	// Ya-row
	{ char: 'ヤ', romaji: 'ya' },
	{ char: 'ユ', romaji: 'yu' },
	{ char: 'ヨ', romaji: 'yo' },

	// Ra-row
	{ char: 'ラ', romaji: 'ra' },
	{ char: 'リ', romaji: 'ri' },
	{ char: 'ル', romaji: 'ru' },
	{ char: 'レ', romaji: 're' },
	{ char: 'ロ', romaji: 'ro' },

	// Wa-row
	{ char: 'ワ', romaji: 'wa' },
	{ char: 'ヲ', romaji: 'wo' },
	{ char: 'ン', romaji: 'n' },

	// Dakuten
	{ char: 'ガ', romaji: 'ga' },
	{ char: 'ギ', romaji: 'gi' },
	{ char: 'グ', romaji: 'gu' },
	{ char: 'ゲ', romaji: 'ge' },
	{ char: 'ゴ', romaji: 'go' },

	{ char: 'ザ', romaji: 'za' },
	{ char: 'ジ', romaji: 'ji' },
	{ char: 'ズ', romaji: 'zu' },
	{ char: 'ゼ', romaji: 'ze' },
	{ char: 'ゾ', romaji: 'zo' },

	{ char: 'ダ', romaji: 'da' },
	{ char: 'ヂ', romaji: 'ji (di)' },
	{ char: 'ヅ', romaji: 'zu (du)' },
	{ char: 'デ', romaji: 'de' },
	{ char: 'ド', romaji: 'do' },

	{ char: 'バ', romaji: 'ba' },
	{ char: 'ビ', romaji: 'bi' },
	{ char: 'ブ', romaji: 'bu' },
	{ char: 'ベ', romaji: 'be' },
	{ char: 'ボ', romaji: 'bo' },

	// Handakuten
	{ char: 'パ', romaji: 'pa' },
	{ char: 'ピ', romaji: 'pi' },
	{ char: 'プ', romaji: 'pu' },
	{ char: 'ペ', romaji: 'pe' },
	{ char: 'ポ', romaji: 'po' },

	// Yōon
	{ char: 'キャ', romaji: 'kya' },
	{ char: 'キュ', romaji: 'kyu' },
	{ char: 'キョ', romaji: 'kyo' },

	{ char: 'シャ', romaji: 'sha' },
	{ char: 'シュ', romaji: 'shu' },
	{ char: 'ショ', romaji: 'sho' },

	{ char: 'チャ', romaji: 'cha' },
	{ char: 'チュ', romaji: 'chu' },
	{ char: 'チョ', romaji: 'cho' },

	{ char: 'ニャ', romaji: 'nya' },
	{ char: 'ニュ', romaji: 'nyu' },
	{ char: 'ニョ', romaji: 'nyo' },

	{ char: 'ヒャ', romaji: 'hya' },
	{ char: 'ヒュ', romaji: 'hyu' },
	{ char: 'ヒョ', romaji: 'hyo' },

	{ char: 'ミャ', romaji: 'mya' },
	{ char: 'ミュ', romaji: 'myu' },
	{ char: 'ミョ', romaji: 'myo' },

	{ char: 'リャ', romaji: 'rya' },
	{ char: 'リュ', romaji: 'ryu' },
	{ char: 'リョ', romaji: 'ryo' },

	{ char: 'ギャ', romaji: 'gya' },
	{ char: 'ギュ', romaji: 'gyu' },
	{ char: 'ギョ', romaji: 'gyo' },

	{ char: 'ジャ', romaji: 'ja' },
	{ char: 'ジュ', romaji: 'ju' },
	{ char: 'ジョ', romaji: 'jo' },

	{ char: 'ビャ', romaji: 'bya' },
	{ char: 'ビュ', romaji: 'byu' },
	{ char: 'ビョ', romaji: 'byo' },

	{ char: 'ピャ', romaji: 'pya' },
	{ char: 'ピュ', romaji: 'pyu' },
	{ char: 'ピョ', romaji: 'pyo' }
];
