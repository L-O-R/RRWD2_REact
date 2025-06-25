import { useEffect, useState } from "react";

const UseEffect = () => {
  const [num, setNum] = useState(0);
  //   coponent Did Mount
  useEffect(() => {
    console.log("1. Component Mounted");
  }, []);

  useEffect(() => {
    console.log("2. Component updated");
  }, [num]);

  const handlerClick = () => {
    setNum(num + 1);
  };

  return (
    <div>
      Use Effect
      <br />
      {num}
      <br />
      <button onClick={() => handlerClick()}>Click</button>
    </div>
  );
};

export default UseEffect;
