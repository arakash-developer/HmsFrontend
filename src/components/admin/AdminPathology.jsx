import React from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '@/axios'; // Import the Axios instance
  
// Fetch function using Axios
const fetchProtectedData = async () => {
  const response = await api.get('/api/users');  // Replace with your API endpoint
  return response.data;
};

const AdminPathology = () => {
  // Use useQuery hook with object syntax to fetch data
  const { data, error, isLoading } = useQuery({
    queryKey: ['protectedData'],  // The query key (array for unique identification)
    queryFn: fetchProtectedData,  // The query function
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Protected Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default AdminPathology;
