import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../axios.js"; // <-- your existing Axios instance

const useCrud = (endpoint) => {
  const qc = useQueryClient();

  // FETCH ALL
  const fetchQuery = useQuery({
    queryKey: [endpoint],
    queryFn: async () => (await api.get(`/${endpoint}`)).data,
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
    data: fetchQuery.data,
    isLoading: fetchQuery.isLoading,
    refetch: fetchQuery.refetch,
    create,
    update,
    remove,
  };
};

export default useCrud;
