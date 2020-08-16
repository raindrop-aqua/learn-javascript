import React from "react";
import { Counter } from "./features/counter/Counter";
import { TaskList } from "./features/task/TaskList";
import { TaskInput } from "./features/task/TaskInput";
import { Fetch } from "./features/fetch/Fetch";

function App() {
  return (
    <div>
      <h2>Counter features</h2>
      <Counter />

      <hr />
      <h2>Task features</h2>

      <TaskInput />
      <TaskList />

      <hr />
      <h2>Fetch features</h2>
      <Fetch />
    </div>
  );
}

export default App;
