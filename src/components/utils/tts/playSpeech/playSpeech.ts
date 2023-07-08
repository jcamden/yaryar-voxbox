import playSound from 'play-sound';

import {genSpeech} from '../genSpeech/genSpeech.js';
import {getIsSpeechCached} from '../getIsSpeechCached.js';
import {getSpeechFilePath} from '../getSpeechFilePath.js';

import {logPlayerErr} from './logPlayerErr.js';

const player = playSound({});

export const playSpeech = async (text: string) => {
	if (!getIsSpeechCached(text)) {
		await genSpeech(text);
	}

	player.play(
		getSpeechFilePath(text),
		{
			mplayer: ['-volume', 100],
		},
		(err: any) => {
			logPlayerErr(err);
		},
	);
};
