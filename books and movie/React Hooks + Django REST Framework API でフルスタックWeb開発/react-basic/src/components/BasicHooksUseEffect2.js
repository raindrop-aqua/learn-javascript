import React, { useEffect, useState } from "react";

const BasicHooksUseEffect2 = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");

  useEffect(() => {
    console.log("BasicHooksUseEffect2(count) invoked");
  }, [count]);

  useEffect(() => {
    console.log("BasicHooksUseEffect2(item) invoked");
  }, [item]);

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
    </div>
  );
};

export default BasicHooksUseEffect2;
