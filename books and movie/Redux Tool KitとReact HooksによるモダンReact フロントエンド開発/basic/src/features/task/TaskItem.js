import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "./taskSlice";

export const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        onClick={() => dispatch(completeTask(task))}
        defaultChecked={task.completed}
      />
      <span>{task.title}</span>
      <button type="button" onClick={() => dispatch(deleteTask(task))}>
        DELETE
      </button>
    </div>
  );
};
