import React from "react";
import BasicHooksUseContextC from "./BasicHooksUseContextGrandchild";

const BasicHooksUseContextChild = () => {
  return (
    <div>
      <h3>BasicHooksUseContextChild</h3>
      <BasicHooksUseContextC />
    </div>
  );
};

export default BasicHooksUseContextChild;
