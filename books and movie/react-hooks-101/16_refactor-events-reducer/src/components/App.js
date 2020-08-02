import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "./EventForm";
import EventList from "./EventList";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

const App = () => {
  const initialState = {
    events: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <EventList />
      </div>
    </AppContext.Provider>
  );
};

export default App;
