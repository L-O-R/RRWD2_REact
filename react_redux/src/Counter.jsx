import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count: {count}</p>

      <br />
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <br />
      <br />
      <button
        onClick={() => dispatch(incrementByAmount(50))}>
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;
