import React from "react";

const Basic1 = (props) => {
  const onClickHander = (e) => {
    console.log(props.name);
  };

  return (
    <div>
      <p>Hello, {props.name}</p>
      <button type="button" onClick={onClickHander}>
        Output log
      </button>
    </div>
  );
};

export default Basic1;
