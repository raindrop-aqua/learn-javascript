import React, { FC, useState } from "react";
import axios from "axios";
import { TOKEN } from "../constants/constants";

interface OwnProps {}

type Props = OwnProps;

const TaskDelete: FC<Props> = () => {
  const [id, setId] = useState(1);

  const deleteTask = async () => {
    const url = `http://localhost:8000/tasks/${id}`;
    const params = { headers: { Authorization: TOKEN } };

    try {
      await axios.delete(url, params);
      console.log("deleted!");
    } catch (e) {
      // nop.
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
      <button type="button" onClick={() => deleteTask()}>
        Delete Task
      </button>
    </>
  );
};

export default TaskDelete;
