import {Actions, ActionTypes, ChildProcessPayload} from './reducer.js';

export const registerChildProcess = (
	payload: ChildProcessPayload,
	dispatch: React.Dispatch<Actions>,
) => {
	payload.childProcess.on('spawn', () => {
		dispatch({
			type: ActionTypes.addChildProcess,
			payload,
		});
	});

	payload.childProcess.on('exit', () => {
		dispatch({
			type: ActionTypes.removeChildProcess,
			payload,
		});
	});
};
