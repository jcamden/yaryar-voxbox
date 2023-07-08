import React, {
	createContext,
	type Dispatch,
	type ReactNode,
	useReducer,
} from 'react';

import {
	type Actions,
	appReducer,
	ChildProcessPayload,
	TimeoutPayload,
} from './reducer.js';

export interface StateInterface {
	childProcesses: ChildProcessPayload[];
	logs: string[];
	text: string;
	timeouts: TimeoutPayload[];
}

const initialState: StateInterface = {
	childProcesses: [],
	logs: [],
	text: '',
	timeouts: [],
};

interface StateProps {
	children: ReactNode;
}

export const StateContext = createContext<StateInterface>(initialState);
export const DispatchContext = createContext<Dispatch<Actions>>(
	() => undefined,
);

export const State = ({children}: StateProps) => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return (
		<DispatchContext.Provider value={dispatch}>
			<StateContext.Provider value={state}>{children}</StateContext.Provider>
		</DispatchContext.Provider>
	);
};
