import React from "react";
import { useParams } from "react-router";

const Blog = () => {
  // catch Id
  const { id } = useParams();
  console.log(id);
  return (
    <>
      {(id === "1" && (
        <div>
          <h1>Blog</h1>
          <p>This is the blog page with id {id}</p>
        </div>
      )) ||
        (id === "2" && (
          <div>
            <h1>Blog</h1>
            <p>This is the blog page with id {id}</p>
          </div>
        )) || (
          <div>
            <h1>Blog</h1>
            <p>This is the blog page with no id</p>
          </div>
        )}
    </>
  );
};

export default Blog;
