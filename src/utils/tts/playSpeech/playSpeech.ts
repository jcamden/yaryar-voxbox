import playSound from 'play-sound';

import {Log} from '../../../hooks/useLog.js';
import {Actions} from '../../../state/reducer.js';
import {registerChildProcess} from '../../../state/registerChildProcess.js';
import {genSpeech} from '../genSpeech/genSpeech.js';
import {getIsSpeechCached} from '../getIsSpeechCached.js';
import {getSpeechFilePath} from '../getSpeechFilePath.js';

import {logPlayerErr} from './logPlayerErr.js';

const player = playSound({});

// TODO: try to use assets first, then resort to cache
export const playSpeech = async (
	text: string,
	log: Log,
	dispatch: React.Dispatch<Actions>,
) => {
	if (!getIsSpeechCached(text)) {
		await genSpeech(text);
	}

	const childProcess = player.play(
		getSpeechFilePath(text),
		{
			mplayer: ['-volume', 100],
		},
		(err: any) => {
			logPlayerErr(err, log);
		},
	);

	const name = `mplayer ${text}.mp3`;

	registerChildProcess({childProcess, name}, dispatch);
};
