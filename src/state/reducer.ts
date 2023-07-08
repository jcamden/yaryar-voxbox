import {type StateInterface} from './state.js';

export enum ActionTypes {
	pushChar = 'pushChar',
	popChar = 'popChar',
	clearText = 'clearText',
}

export type Actions =
	| {type: ActionTypes.pushChar; payload: string}
	| {type: ActionTypes.popChar; payload: undefined}
	| {type: ActionTypes.clearText; payload: undefined};

const updates: {
	[key in ActionTypes]?: (
		state: StateInterface,
		payload: any,
	) => StateInterface;
} = {
	clearText: (state: StateInterface) => ({
		...state,
		text: '',
	}),
	popChar: (state: StateInterface) => ({
		...state,
		text: state.text.slice(0, -1),
	}),
	pushChar: (state: StateInterface, payload: string) => ({
		...state,
		text: state.text + payload,
	}),
};

export const appReducer = (
	state: StateInterface,
	action: Actions,
): StateInterface => {
	const update = updates[action.type];
	return update ? update(state, action.payload) : state;
};
