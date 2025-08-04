import React, {
  useCallback,
  useState,
  lazy,
  Suspense,
} from "react";

const Child = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./Child")), 3000)
    )
);

const Parent = () => {
  console.log("parent rendered");
  const [count, setCount] = useState(0);
  //   let name = "Alice";
  const handleName = useCallback(() => {
    alert("hello");
  }, []);
  return (
    <div>
      <h2>Parent</h2>
      <h6>Count: {count}</h6>
      <Suspense fallback={<div>Loading Child......</div>}>
        <Child name="Alice" handleName={handleName} />
      </Suspense>
      <button onClick={() => setCount(30)}>CLick</button>
    </div>
  );
};

export default Parent;
