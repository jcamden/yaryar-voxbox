import playSound from 'play-sound';

import {Log} from '../../hooks/useLog.js';
import {Actions, ActionTypes} from '../../state/reducer.js';
import {registerChildProcess} from '../../state/registerChildProcess.js';
import {getAssetFilePath} from '../getAssetPath/getAssetPath.js';

import {logPlayerErr} from './playSpeech/logPlayerErr.js';

const player = playSound({});
export const keepAudioHot = (
	dispatch: React.Dispatch<Actions>,
	log: Log,
	iteration: number,
) => {
	const childProcess = player.play(
		getAssetFilePath('10-seconds-of-silence.mp3'),
		{
			mplayer: ['-volume', 100],
		},
		(err: any) => {
			logPlayerErr(err, log);
		},
	);

	const processName = `mplayer 10-seconds-of-silence.mp3 loop x${iteration}`;
	registerChildProcess({childProcess, name: processName}, dispatch);

	const timeoutName = `keep audio hot x${iteration}`;

	const timeout = setTimeout(() => {
		keepAudioHot(dispatch, log, iteration + 1);
		dispatch({
			type: ActionTypes.removeTimeout,
			payload: {name: timeoutName},
		});
	}, 10_000);

	dispatch({
		type: ActionTypes.addTimeout,
		payload: {timeout, name: `keep audio hot x${iteration}`},
	});
};
