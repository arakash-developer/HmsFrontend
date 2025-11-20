import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const handleCustomToast = () => {
    toast(
      <div className="bg-[red]">
        <img src="/user.png" className="w-8 h-8 rounded-full" />
        <div>
          <h1 className="font-bold">New Message</h1>
          <p className="text-sm">You have 1 unread message</p>
        </div>
      </div>,
      {
        autoClose: 5000,
        closeButton: true,
        hideProgressBar: false,
      }
    );
  };

  return (
    <>
      <button
        onClick={handleCustomToast}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Show Custom JSX Toast
      </button>

      <ToastContainer position="bottom-left" />
    </>
  );
}
