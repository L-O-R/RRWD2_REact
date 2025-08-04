import React from "react";

const Child = React.memo(({ name, handleName }) => {
  console.log("child rendered");
  return (
    <div>
      <hr />
      <h2>Child</h2>
      <h5>{name}</h5>
      <button onClick={() => handleName()}>
        Change Name
      </button>
      <hr />
    </div>
  );
});

export default Child;
