import React from 'react';
import { useMutation } from '@tanstack/react-query';
import api from '@/axios'; // Import the Axios instance

const AdminPatients = () => {
  // Define the mutation for the login request
  const { mutate, isLoading, error, data } = useMutation({
    mutationFn: async () => {
      try {
        console.log("Sending login request...");
        const response = await api.post("/api/login", {
          identifier: "arakash100.developer@gmail.com", // Your login identifier (email)
          password: "akash100", // Your login password
        });

        console.log("Login response:", response.data);
        return response.data; // Return response data to be used in the component
      } catch (err) {
        console.error("Login failed:", err);
        throw err; // Let React Query handle this error
      }
    },
  });

  const handleLogin = () => {
    console.log("Attempting to log in...");
    mutate(); // Trigger login request
  };

  // Display loading text while the request is being made
  if (isLoading) return <div>Logging in...</div>;

  // Display error message if the request fails
  if (error) {
    console.error("Error occurred:", error);
    return <div>An error has occurred: {error?.message || "Unknown error"}</div>;
  }

  return (
    <div>
      <h1>Login Response</h1>
      {/* Display response message from the API */}
      <p>{data?.message || "No message available"}</p>
      <button onClick={handleLogin}>Login</button> {/* Button to trigger login */}
    </div>
  );
};

export default AdminPatients;
