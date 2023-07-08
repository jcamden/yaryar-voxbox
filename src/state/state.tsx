import React, {
	createContext,
	type Dispatch,
	type ReactNode,
	useReducer,
} from 'react';

import {type Actions, appReducer} from './reducer.js';

export type StateInterface = {
	text: string;
};

const initialState: StateInterface = {
	text: '',
};

type StateProps = {
	children: ReactNode;
};

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
