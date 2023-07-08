import React, { Dispatch, createContext, ReactNode, useReducer } from 'react';
import { Actions, appReducer } from './reducer.js';

export interface StateInterface {
  text: string;
}

const initialState: StateInterface = {
  text: "",
};

interface StateProps {
  children: ReactNode;
}

export const StateContext = createContext<StateInterface>(initialState);
export const DispatchContext = createContext<Dispatch<Actions>>(
  () => undefined
);

export const State = ({ children }: StateProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={{ ...state }}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};
