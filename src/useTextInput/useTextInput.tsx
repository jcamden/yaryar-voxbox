import {useInput} from 'ink';
import { DispatchContext } from '../state/state.js';
import { useContext } from 'react';
import { ActionTypes } from "../state/reducer.js";

export const useTextInput = () => {
	const dispatch = useContext(DispatchContext);

	useInput((input) => {

		if (input === 'q') {
			// Exit program
		}

		dispatch({type: ActionTypes.setText, payload: input})

	});
}
