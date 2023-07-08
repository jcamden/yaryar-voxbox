import { StateInterface } from "./state.js";

export enum ActionTypes {
  setText = 'setText',
}

export type Actions = { type: ActionTypes.setText; payload: string };

const updates: {[key in ActionTypes]?: (state: StateInterface, payload: any) => StateInterface} = {
	"setText": (state: StateInterface, payload: string) => ({
		...state,
		text: state.text + payload,
	})
}


export const appReducer = (
  state: StateInterface,
  action: Actions
): StateInterface => {
	const update = updates[action.type]
	return update ? update(state, action.payload) : state;
};
