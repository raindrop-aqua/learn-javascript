import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

const BasicHooksUseContextGrandchild = () => {
  const value = useContext(AppContext);
  return (
    <div>
      <h3>BasicHooksUseContextGrandchild</h3>
      {value}
    </div>
  );
};

export default BasicHooksUseContextGrandchild;
