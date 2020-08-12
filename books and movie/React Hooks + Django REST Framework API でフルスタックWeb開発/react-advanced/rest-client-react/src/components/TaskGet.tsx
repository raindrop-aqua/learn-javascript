import React, { FC, useState } from "react";
import axios from "axios";
import { Task } from "../iface/ITask";
import { TOKEN } from "../constants/constants";

interface OwnProps {}

type Props = OwnProps;

const TaskGet: FC<Props> = () => {
  const [selectedTasks, setSelectedTasks] = useState<Task>(
    new Task("", "", "", "")
  );
  const [id, setId] = useState(1);

  const getTask = async () => {
    const url = `http://localhost:8000/tasks/${id}`;
    const params = { headers: { Authorization: TOKEN } };

    try {
      const res = await axios.get(url, params);
      setSelectedTasks(res.data);
    } catch (e) {
      setSelectedTasks(new Task("", "", "", ""));
    }
  };

  return (
    <>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(parseInt(e.target.value));
        }}
      />
      <button type="button" onClick={() => getTask()}>
        Get Task
      </button>
      <h3>
        {selectedTasks.title} | {selectedTasks.id} | {selectedTasks.created_at}{" "}
        | {selectedTasks.updated_at}
      </h3>
    </>
  );
};

export default TaskGet;
