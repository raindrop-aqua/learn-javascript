import React from "react";
import TaskList from "./components/TaskList";
import TaskGet from "./components/TaskGet";

const App = () => {
  return (
    <>
      <h2>Task list</h2>
      <TaskList />
      <hr />

      <h2>Task get</h2>
      <TaskGet />
      <hr />
    </>
  );
};

export default App;
