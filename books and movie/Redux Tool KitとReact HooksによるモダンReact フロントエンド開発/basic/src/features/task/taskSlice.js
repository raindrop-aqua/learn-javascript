import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    idCount: 3,
    tasks: [
      { id: 3, title: "TASK C", completed: false },
      { id: 2, title: "TASK B", completed: true },
      { id: 1, title: "TASK A", completed: false },
    ],
  },
  reducers: {
    newTask: (state, action) => {
      // タスクのIDカウンタをインクリメント
      state.idCount++;
      // 新しいタスクを作成してタスクリストの先頭に追加
      const newTaskItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTaskItem, ...state.tasks];
    },
    completeTask: (state, action) => {
      // 対象のタスクを検索
      const targetTask = state.tasks.find(
        (task) => task.id === action.payload.id
      );
      if (targetTask) {
        // 対象のタスクの達成状態を反転
        targetTask.completed = !targetTask.completed;
      }
    },
    deleteTask: (state, action) => {
      // 削除するタスクをタスクリストから除外
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { newTask, completeTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state) => state.task.tasks;

export default taskSlice.reducer;
