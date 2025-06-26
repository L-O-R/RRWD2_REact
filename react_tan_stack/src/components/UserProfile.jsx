import {
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

const fetchUser = async (userId) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return data;
};

const UserProfile = ({ userId }) => {
  // useQuery handles everything: fetching, loading, errors, caching...
  //   QueryClientProvider.tsx:18
  //  Uncaught Error: No QueryClient set, use QueryClientProvider to set one
  //  at UserProfile (UserProfile.jsx:18:7)

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user", userId], // A unique key for this query
    queryFn: () => fetchUser(userId),
  });

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return <h1>{user.name}</h1>;
};

export default UserProfile;
