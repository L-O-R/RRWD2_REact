import { useEffect, useState } from "react";

const ABC = () => {
  let [num, setNum] = useState(4);
  // console.log("hello form app.jsx");

  useEffect(() => {
    let time = setInterval(() => {
      console.log("hello");
    }, 2000);
    console.log(time);
    return () => {
      clearInterval(time);
      console.log("stoped");
    };
  }, []);

  function count() {
    setNum((previousState) => previousState + 1);
  }
  return (
    <div>
      <div>
        {num} <button onClick={count}>count +</button>
      </div>
    </div>
  );
};

export default ABC;
