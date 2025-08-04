import React from "react";
import Users from "./components/Users";
import Todo from "./components/Todo";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const qC = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={qC}>
      <div>
        <Users />
        <hr />
        <Todo />
      </div>
    </QueryClientProvider>
  );
};

export default App;
