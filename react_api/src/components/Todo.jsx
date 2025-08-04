import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUser = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todasaos/1"
  );
  return data;
};

export default function todo() {
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user", 1], // A unique key for caching this query
    queryFn: fetchUser,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return <h1>Welcome, {user.title}</h1>;
}
