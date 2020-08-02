import React, { useState } from "react";

/** useState */
const BasicHooksUseState1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </div>
  );
};

export default BasicHooksUseState1;
