import React from "react";
import Footer from "../features/filters/Footer";
import AddTodo from "../features/todos/AddTodo";
import TodoList from "../features/todos/TodoList";

const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
