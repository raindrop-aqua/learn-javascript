import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Divider } from "semantic-ui-react";
import {
  increment,
  decrement,
  incrementWithAsync,
  decrementWithAsync,
} from "./testReducer";
import { openModal } from "../../app/common/modals/modalReducer";

export default function Sandbox() {
  const [target, setTarget] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  const { loading } = useSelector((state) => state.async);

  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <Button
        onClick={() => dispatch(increment(20))}
        content='Increment'
        color='green'
      />
      <Button
        onClick={() => dispatch(decrement(10))}
        content='Decrement'
        color='red'
      />
      <Divider />
      <Button
        name='increment'
        loading={loading && target === "increment"}
        onClick={(e) => {
          dispatch(incrementWithAsync(20));
          setTarget(e.target.name);
        }}
        content='Increment(async)'
        color='green'
      />
      <Button
        name='decrement'
        loading={loading && target === "decrement"}
        onClick={(e) => {
          dispatch(decrementWithAsync(10));
          setTarget(e.target.name);
        }}
        content='Decrement(async)'
        color='red'
      />
      <Divider />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
        content='Open Modal'
        color='teal'
      />
    </>
  );
}
