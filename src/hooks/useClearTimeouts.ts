import {useContext} from 'react';

import {ActionTypes} from '../state/reducer.js';
import {DispatchContext, StateContext} from '../state/state.js';

export const useClearTimeouts = () => {
	const dispatch = useContext(DispatchContext);
	const {timeouts} = useContext(StateContext);

	const clearTimeouts = () => {
		for (const timeout of timeouts) {
			clearTimeout(timeout.timeout);
			dispatch({
				type: ActionTypes.removeTimeout,
				payload: {name: timeout.name},
			});
		}
	};

	return {clearTimeouts};
};
