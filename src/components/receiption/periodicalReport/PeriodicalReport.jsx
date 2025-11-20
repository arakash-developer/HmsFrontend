import { useToast } from "../../../hooks/useToast.jsx";

export default function App() {
  const { showSuccess, showError } = useToast();

  const handleSuccessToast = () => {
    showSuccess(
      "Operation Successful",
      "Your request has been completed successfully",
      {
        duration: 5000,
        showCloseButton: true,
      }
    );
  };

  const handleErrorToast = () => {
    showError(
      "Operation Failed",
      "Something went wrong. Please try again later",
      {
        duration: 5000,
        showCloseButton: true,
      }
    );
  };

  return (
    <>
      <div className="space-x-4">
        <button
          onClick={handleSuccessToast}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Show Success Toast
        </button>

        <button
          onClick={handleErrorToast}
          className="px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Show Error Toast
        </button>
      </div>
    </>
  );
}
