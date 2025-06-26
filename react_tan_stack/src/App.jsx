import React from "react";
import UserProfile from "./components/UserProfile";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
//this is a store i guess
const queryClient = new QueryClient();
const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <h1>React Query Example</h1>
        <p>Fetching user data with React Query</p>
        <UserProfile userId={4} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
