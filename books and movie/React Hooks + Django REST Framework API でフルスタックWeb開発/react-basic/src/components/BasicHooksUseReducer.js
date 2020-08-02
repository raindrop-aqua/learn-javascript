import React, { useReducer } from "react";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "add":
      return currentState + 1;
    case "multiple":
      return currentState * 3;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

const BasicHooksUseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count {count}</div>
      <button type="button" onClick={() => dispatch("add")}>
        Add + 1
      </button>
      <button type="button" onClick={() => dispatch("multiple")}>
        Multiple * 3
      </button>
      <button type="button" onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
};

export default BasicHooksUseReducer;
