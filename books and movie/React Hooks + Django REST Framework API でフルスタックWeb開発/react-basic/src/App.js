import React from "react";
import Basic1 from "./components/Basic1";
import BasicHooksUseState1 from "./components/BasicHooksUseState1";
import BasicHooksUseState2 from "./components/BasicHooksUseState2";
import BasicHooksUseState3 from "./components/BasicHooksUseState3";
import BasicHooksUseState4 from "./components/BasicHooksUseState4";
import BasicHooksUseEffect1 from "./components/BasicHooksUseEffect1";
import BasicHooksUseEffect2 from "./components/BasicHooksUseEffect2";
import TimerContainer from "./components/TimerContainer";

const App = () => {
  return (
    <>
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
      <TimerContainer />
    </>
  );
};

export default App;
