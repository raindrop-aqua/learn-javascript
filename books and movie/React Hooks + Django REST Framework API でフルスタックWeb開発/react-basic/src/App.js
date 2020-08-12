import React from "react";
import Basic1 from "./components/Basic1";
import BasicHooksUseState1 from "./components/BasicHooksUseState1";
import BasicHooksUseState2 from "./components/BasicHooksUseState2";
import BasicHooksUseState3 from "./components/BasicHooksUseState3";
import BasicHooksUseState4 from "./components/BasicHooksUseState4";
import BasicHooksUseEffect1 from "./components/BasicHooksUseEffect1";
import BasicHooksUseEffect2 from "./components/BasicHooksUseEffect2";
import BasicHooksUseEffect3 from "./components/BasicHooksUseEffect3";
import ApiFetch from "./components/ApiFetch";
import AppContext from "./contexts/AppContext";
import BasicHooksUseContextChild from "./components/BasicHooksUseContextChild";
import BasicHooksUseReducer from "./components/BasicHooksUseReducer";
import BasicHooksUseReducerAndUseContextChild from "./components/BasicHooksUseReducerAndUseContextChild";

const App = () => {
  return (
    <AppContext.Provider value={"Value from App.js"}>
      basic react - props
      <Basic1 name="Hooks" />
      <hr />
      basic hooks - useState
      <BasicHooksUseState1 />
      <BasicHooksUseState1 />
      <hr />
      basic hooks - useState - previous value
      <BasicHooksUseState2 />
      <hr />
      basic hooks - useState - object
      <BasicHooksUseState3 />
      <hr />
      basic hooks - useState - array
      <BasicHooksUseState4 />
      <hr />
      basic hooks - useEffect
      <BasicHooksUseEffect1 />
      <hr />
      basic hooks - useEffect - filter
      <BasicHooksUseEffect2 />
      <hr />
      basic hooks - useEffect - cleanup
      <BasicHooksUseEffect3 />
      <hr />
      basic hooks - API Fetch
      <ApiFetch />
      <hr />
      basic hooks - useContext
      <BasicHooksUseContextChild />
      <hr />
      basic hooks - useReducer
      <BasicHooksUseReducer />
      <hr />
      basic hooks - useReducer and useContext
      <BasicHooksUseReducerAndUseContextChild />
    </AppContext.Provider>
  );
};

export default App;
