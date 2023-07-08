import {useContext} from 'react';
import {useApp, useInput} from 'ink';

import {playSpeech} from '../../components/utils/tts/playSpeech/playSpeech.js';
import {ActionTypes} from '../../state/reducer.js';
import {DispatchContext, StateContext} from '../../state/state.js';

export const useTextInput = () => {
	const {text} = useContext(StateContext);
	const dispatch = useContext(DispatchContext);

	const {exit} = useApp();

	useInput(async (input, key) => {
		if (key.escape) {
			exit();
			return;
		}

		if (key.return) {
			await playSpeech(text);
			dispatch({type: ActionTypes.clearText, payload: undefined});
		}

		if (key.delete || key.backspace) {
			if (text.length > 0) {
				dispatch({type: ActionTypes.popChar, payload: undefined});
			}

			return;
		}

		dispatch({type: ActionTypes.pushChar, payload: input});

		await playSpeech(input);
	});
};
