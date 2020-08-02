import React, { useState } from "react";
import Timer from "./Timer";

const TimerContainer = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setDisplay(!display)}>
        Switch Timer
      </button>
      {display && <Timer />}
    </div>
  );
};

export default TimerContainer;
