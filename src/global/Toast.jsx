import { useToast } from "../contexts/ToastContext";

const Toast = ({ toast }) => {
  const { removeToast } = useToast();

  const handleClose = () => {
    removeToast(toast.id);
  };

  return (
    <div className="toast-item animate-slide-in">
      <div className="relative">
        {toast.content}
        {toast.showCloseButton && (
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-white hover:text-gray-200 text-xl font-bold"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

const ToastContainer = () => {
  const { toasts } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed z-[9999999999999] bottom-4 left-4 space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
