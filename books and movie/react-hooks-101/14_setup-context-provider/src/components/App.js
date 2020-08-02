import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "./EventForm";
import EventList from "./EventList";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

console.log({ AppContext });

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={"Hello, I am a provider."}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <EventList state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
