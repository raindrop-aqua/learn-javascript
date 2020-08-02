import React, { useEffect, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "./EventForm";
import EventList from "./EventList";
import OperationLogList from "./OperationLogList";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

const APP_KEY = "react-hooks-101";

const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <EventList />
        <OperationLogList />
      </div>
    </AppContext.Provider>
  );
};

export default App;
