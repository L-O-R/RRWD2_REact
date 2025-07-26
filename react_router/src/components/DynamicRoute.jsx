import React from "react";
import { useParams } from "react-router-dom";

const arrayObj = [
  {
    id: 1,
    name: "JOhn",
  },
  {
    id: 2,
    name: "Roy",
  },
  {
    id: 3,
    name: "Shaun",
  },
];

const DynamicRoute = () => {
  const { param } = useParams();
  console.log(typeof param);
  const user = arrayObj.filter((obj) => obj.id == param);
  console.log(user);

  return (
    <div>
      {user.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}{" "}
      hello
    </div>
  );
};

export default DynamicRoute;
