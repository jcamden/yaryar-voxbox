import {useContext} from 'react';

import {ActionTypes} from '../state/reducer.js';
import {DispatchContext} from '../state/state.js';

export type Log = (text: string) => void;

export const useLog = (text?: string) => {
	const dispatch = useContext(DispatchContext);

	const log = (text: string) => {
		dispatch({type: ActionTypes.pushLogItem, payload: text});
	};

	if (text) {
		log(text);
	}

	return {log};
};
