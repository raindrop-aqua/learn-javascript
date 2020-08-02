import React, { useState } from "react";
import BasicHooksUseEffect3Timer from "./BasicHooksUseEffect3Timer";

const BasicHooksUseEffect3 = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setDisplay(!display)}>
        Switch Timer
      </button>
      {display && <BasicHooksUseEffect3Timer />}
    </div>
  );
};

export default BasicHooksUseEffect3;
