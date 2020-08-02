import React, { useEffect, useState } from "react";

const BasicHooksUseEffect1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("BasicHooksUseEffect1 invoked");
  });

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </div>
  );
};

export default BasicHooksUseEffect1;
