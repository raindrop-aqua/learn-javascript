import React from "react";
import TaskList from "./components/TaskList";
import TaskGet from "./components/TaskGet";
import TaskDelete from "./components/TaskDelete";

const App = () => {
  return (
    <>
      <h2>Task list</h2>
      <TaskList />
      <hr />

      <h2>Task get</h2>
      <TaskGet />
      <hr />

      <h2>Task delete</h2>
      <TaskDelete />
      <hr />
    </>
  );
};

export default App;
