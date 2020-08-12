import React, { FC, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Task } from "../iface/ITask";
import { TOKEN } from "../constants/constants";

interface OwnProps {}

type Props = OwnProps;

const TaskList: FC<Props> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/tasks/", {
        headers: {
          Authorization: TOKEN,
        },
      })
      .then((res: AxiosResponse<Task[]>) => {
        setTasks(res.data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>
            {task.title} | {task.id} | {task.created_at} | {task.updated_at}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
