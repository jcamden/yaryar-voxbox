import {useContext} from 'react';
import {useApp, useInput} from 'ink';

import {ActionTypes} from '../state/reducer.js';
import {DispatchContext, StateContext} from '../state/state.js';
import {playSpeech} from '../utils/tts/playSpeech/playSpeech.js';

import {useClearTimeouts} from './useClearTimeouts.js';
import {useLog} from './useLog.js';
import {useSlayInnocents} from './useSlayInnocents.js';

export const useTextInput = () => {
	const {clearTimeouts} = useClearTimeouts();
	const {exit} = useApp();
	const {log} = useLog();
	const {slayInnocents} = useSlayInnocents();
	const {text} = useContext(StateContext);
	const dispatch = useContext(DispatchContext);

	useInput(async (input, key) => {
		if (key.escape) {
			slayInnocents();
			clearTimeouts();
			exit();
			return;
		}

		if (key.return) {
			await playSpeech(text, log, dispatch);
			dispatch({type: ActionTypes.clearText, payload: undefined});
		}

		if (key.delete || key.backspace) {
			if (text.length > 0) {
				dispatch({type: ActionTypes.popChar, payload: undefined});
			}

			return;
		}

		dispatch({type: ActionTypes.pushChar, payload: input});

		await playSpeech(input, log, dispatch);
	});
};
