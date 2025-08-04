import React, { useEffect, useState } from "react";

const Users = () => {
  const [user, setusers] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new console.error("Data bug");
        }
        return response.json();
      })
      .then((data) => {
        if (!data) {
          throw new console.error("data bug");
        }
        setLoading(false);
        setusers(data);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(user);
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <section>
      <div>
        {(user &&
          user?.map((item, index) => {
            return <h2 key={item.id}>{item.name}</h2>;
          })) || <h3>Data bug</h3>}
      </div>
    </section>
  );
};

export default Users;
