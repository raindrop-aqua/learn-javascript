import React, { useState } from "react";

/** setState - previous value */
const BasicHooksUseState2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Count {count}
      </button>
    </div>
  );
};

export default BasicHooksUseState2;
