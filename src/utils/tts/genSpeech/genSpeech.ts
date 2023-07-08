// Import Gtts from 'gtts';
// import {gTTS as Gtts} from 'gtts.js';

import {gTTS} from 'simple-gtts';

import {getSpeechFilePath} from '../getSpeechFilePath.js';

export const genSpeech = async (text: string) => {
	// eslint-disable-next-line no-useless-catch
	try {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		await gTTS(text, {
			lang: 'en-us',
			path: getSpeechFilePath(text),
		});
	} catch (error: unknown) {
		throw error;
	}
};
