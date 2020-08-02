import React, { useEffect, useState } from "react";

const BasicHooksUseEffect3Timer = () => {
  const [count, setCount] = useState(0);
  const time = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(time, 1000);
    return () => {
      clearInterval(interval);
      console.log("BasicHooksUseEffect3Timer cleared.");
    };
  }, []);

  return <div>{count}</div>;
};

export default BasicHooksUseEffect3Timer;
