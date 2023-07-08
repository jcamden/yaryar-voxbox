import {ChildProcess} from 'node:child_process';

import {StateInterface} from './state.js';

export enum ActionTypes {
	pushChar = 'pushChar',
	pushLogItem = 'pushLogItem',
	popChar = 'popChar',
	clearText = 'clearText',
	addChildProcess = 'addChildProcess',
	removeChildProcess = 'removeChildProcess',
	addTimeout = 'addTimeout',
	removeTimeout = 'removeTimeout',
}

export interface ChildProcessPayload {
	childProcess: ChildProcess;
	name: string;
}

export interface TimeoutPayload {
	timeout: NodeJS.Timeout;
	name: string;
}

export type Actions =
	| {type: ActionTypes.clearText; payload: undefined}
	| {type: ActionTypes.popChar; payload: undefined}
	| {type: ActionTypes.pushChar; payload: string}
	| {type: ActionTypes.pushLogItem; payload: string}
	| {
			type: ActionTypes.addChildProcess;
			payload: ChildProcessPayload;
	  }
	| {
			type: ActionTypes.removeChildProcess;
			payload: ChildProcessPayload;
	  }
	| {
			type: ActionTypes.addTimeout;
			payload: TimeoutPayload;
	  }
	| {
			type: ActionTypes.removeTimeout;
			payload: {name: string};
	  };

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
	pushLogItem: (state: StateInterface, payload: string) => ({
		...state,
		logs: [...state.logs, payload],
	}),
	addChildProcess: (state: StateInterface, payload: ChildProcessPayload) => ({
		...state,
		childProcesses: [...state.childProcesses, payload],
	}),
	removeChildProcess: (
		state: StateInterface,
		payload: ChildProcessPayload,
	) => ({
		...state,
		childProcesses: state.childProcesses.filter(
			childProcessPayload =>
				childProcessPayload.childProcess.pid !== payload.childProcess.pid,
		),
	}),
	addTimeout: (state: StateInterface, payload: TimeoutPayload) => ({
		...state,
		timeouts: [...state.timeouts, payload],
	}),
	removeTimeout: (state: StateInterface, payload: {name: string}) => ({
		...state,
		timeouts: state.timeouts.filter(
			timeoutPayload => timeoutPayload.name !== payload.name,
		),
	}),
};

export const appReducer = (
	state: StateInterface,
	action: Actions,
): StateInterface => {
	const update = updates[action.type];
	return update ? update(state, action.payload) : state;
};
