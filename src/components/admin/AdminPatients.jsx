import { useQuery } from "@tanstack/react-query";
import api from '@/axios'; // Import the Axios instance

const AdminPatients = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      api.get("/query") // Use Axios instead of fetch
        .then((res) => res.data), // Access the data directly from the Axios response
  });

  if (isLoading) return "Loading..."; // Use isLoading (from react-query)

  if (error) return "An error has occurred: " + error.message; // Display error if exists

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};

export default AdminPatients;
