import {useContext} from 'react';

import {StateContext} from '../state/state.js';

export const useSlayInnocents = () => {
	const {childProcesses} = useContext(StateContext);

	const slayInnocents = () => {
		for (const process of childProcesses) process.childProcess.kill();
	};

	return {slayInnocents};
};
