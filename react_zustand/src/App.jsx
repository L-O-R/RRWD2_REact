import React from "react";
import { useCounterStore } from "./zustand/store";

const App = () => {
  const { count, increment, decrement, reset, setCount } =
    useCounterStore();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setCount(120)}>
        Set Count to 10
      </button>
    </div>
  );
};

export default App;
