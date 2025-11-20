import { router } from "@/routes/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastProvider } from "./contexts/ToastContext";
import ToastContainer from "./global/Toast";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AuthProvider>
        <ToastProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
            <ToastContainer />
          </QueryClientProvider>
        </ToastProvider>
      </AuthProvider>
    </>
  );
}

export default App;
