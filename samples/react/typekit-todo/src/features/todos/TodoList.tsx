import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { VisisiblityFilter } from "../filters/filterSlice";
import TodoListItem from "./TodoListItem";
import { Todo, toggleTodo } from "./todoSlice";

const getVisibleTodos = (todos: Todo[], filter: VisisiblityFilter) => {
  switch (filter) {
    case VisisiblityFilter.ShowAll:
      return todos;
    case VisisiblityFilter.ShowActive:
      return todos.filter((t) => !t.completed);
    case VisisiblityFilter.ShowCompleted:
      return todos.filter((t) => t.completed);
    default:
      throw new Error("Unknown filter:" + filter);
  }
};

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) =>
    getVisibleTodos(state.todos, state.visiblityFilter)
  );

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          {...todo}
          onClick={() => dispatch(toggleTodo(todo))}
        />
      ))}
    </ul>
  );
}
