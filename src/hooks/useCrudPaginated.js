import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../axios.js"; // your existing Axios instance
import { useState } from "react";

const useCrudPaginated = (endpoint, initialPage = 1, initialLimit = 20) => {
  const qc = useQueryClient();

  // Local state for pagination
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);

  // FETCH ALL with pagination
  const fetchQuery = useQuery({
    queryKey: [endpoint, page, limit],
    queryFn: async () => {
      const { data } = await api.get(`/${endpoint}?page=${page}&limit=${limit}`);
      return data;
    },
    keepPreviousData: true,
  });

  // CREATE
  const create = useMutation({
    mutationFn: (body) => api.post(`/${endpoint}`, body),
    onSuccess: (data, variables) => {
      qc.invalidateQueries([endpoint]);
      if (variables?.onSuccess) variables.onSuccess(data);
    },
  });

  // UPDATE
  const update = useMutation({
    mutationFn: ({ id, body }) => api.put(`/${endpoint}/${id}`, body),
    onSuccess: (data, variables) => {
      qc.invalidateQueries([endpoint]);
      if (variables?.onSuccess) variables.onSuccess(data);
    },
  });

  // DELETE
  const remove = useMutation({
    mutationFn: (id) => api.delete(`/${endpoint}/${id}`),
    onSuccess: (data, variables) => {
      qc.invalidateQueries([endpoint]);
      if (variables?.onSuccess) variables.onSuccess(data);
    },
  });

  return {
    data: fetchQuery.data?.data || [], // paginated data array
    totalPages: fetchQuery.data?.totalPages || 0,
    totalItems: fetchQuery.data?.totalPatients || 0,
    page,
    setPage,
    limit,
    setLimit,
    isLoading: fetchQuery.isLoading,
    refetch: fetchQuery.refetch,
    create,
    update,
    remove,
  };
};

export default useCrudPaginated;
