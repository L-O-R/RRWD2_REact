import { useEffect, useState } from "react";

const UseState = ({ abc, setAbc }) => {
  console.log("Component rendered");
  return (
    <>
      <h1>Use State Hook</h1>

      <p>{abc}</p>

      <button type="button" onClick={() => setAbc(abc + 1)}>
        Click
      </button>
    </>
  );
};

export default UseState;
