import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newTask } from "./taskSlice";

export const TaskInput = () => {
  const dispatch = useDispatch();
  const [editTitle, setEditTitle] = useState("");

  // タスクタイトルを編集した時のイベント
  const handleTitleChange = (event) => {
    setEditTitle(event.target.value);
  };

  // タスクを追加した時のイベント
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(newTask(editTitle));
    setEditTitle("");
  };

  return (
    <>
      <input
        type="text"
        value={editTitle}
        onChange={handleTitleChange}
        placeholder="Please type in"
      />
      <button type="button" onClick={handleSubmit}>
        NEW
      </button>
    </>
  );
};
