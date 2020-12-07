import './App.css';
import {useState, useEffect} from 'react';
import {GlobalStateProvider} from "./components/GlobalContext";
import Main from "./components/Main";
import {initialState, businessReducer} from "./reducers/businessReducer";

function App() {
  return (
      <GlobalStateProvider initialState={initialState} reducer={businessReducer}>
        <Main />
      </GlobalStateProvider>
  );
}

export default App;
