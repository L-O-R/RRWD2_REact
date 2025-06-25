import { useEffect, useState } from "react";
import { LifecycleDemo } from "./LifeCycle";
import { Timer } from "./UnMounting";
import UseEffect from "./UseEffect";
import UseState from "./UseState";
const App = () => {
  const [abc, setAbc] = useState(10);
  console.log("Parent Component");
  return (
    <>
      <UseState abc={abc} setAbc={setAbc} />
    </>
  );
};

export default App;
