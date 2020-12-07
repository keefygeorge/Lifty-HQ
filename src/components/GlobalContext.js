import React, { createContext, useReducer, useContext } from 'react';
//
//
//
/* Define a context and a reducer for updating the context */
const GlobalStateContext = createContext(null);


/**
 * global state provider. Provides global context to all components it wraps
 * @param children
 * @param reducer
 * @param initialState
 * @returns {*}
 * @constructor
 */
export const GlobalStateProvider = ({children, reducer, initialState}) => {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <GlobalStateContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => {
    return useContext(GlobalStateContext);
};

export default useGlobalState;