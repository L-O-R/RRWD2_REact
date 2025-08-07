import React, { useEffect, useState } from "react";

const TodoAPI = () => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (Loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data &&
        data.map((item) => {
          console.log("rednedring", item.title);
          return (
            <h2 role={item.title} key={item.id}>
              {item.title}
            </h2>
          );
        })}
    </div>
  );
};

export default TodoAPI;
