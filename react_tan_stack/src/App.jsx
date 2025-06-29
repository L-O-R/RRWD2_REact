import React from "react";
import UserProfile from "./components/UserProfile";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
//this is a store i guess
// store
const queryClient = new QueryClient();
const App = () => {
  return (
    <div>
      {/* provider */}
      <QueryClientProvider client={queryClient}>
        <h1>React Query Example</h1>
        <p>Fetching user data with React Query</p>
        <UserProfile userId={9} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
