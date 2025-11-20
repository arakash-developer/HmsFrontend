import { useToast as useToastContext } from "../contexts/ToastContext";

export const useToast = () => {
  const { addToast, removeToast, removeAllToasts } = useToastContext();

  const showToast = (content, options = {}) => {
    return addToast(content, options);
  };

  const showSuccess = (headline, paragraph, options = {}) => {
    const content = (
      <div className="bg-primary-500 border trezo-card-content border-primary-500 rounded-md py-2 px-4">
        <h5 className="font-bold text-white mb-0 pb-0">{headline}</h5>
        <p className="text-sm text-white mt-0 pt-0">{paragraph}</p>
      </div>
    );
    return addToast(content, { ...options, type: "success" });
  };

  const showError = (headline, paragraph, options = {}) => {
    const content = (
      <div className="bg-red-500 rounded-lg p-4">
        <div>
          <h1 className="font-bold text-white">{headline}</h1>
          <p className="text-sm text-white">{paragraph}</p>
        </div>
      </div>
    );
    return addToast(content, { ...options, type: "error" });
  };

  const showWarning = (headline, paragraph, options = {}) => {
    const content = (
      <div className="mycontent bg-yellow-500 rounded-lg p-4">
        <div>
          <h1 className="font-bold text-white">{headline}</h1>
          <p className="text-sm text-white">{paragraph}</p>
        </div>
      </div>
    );
    return addToast(content, { ...options, type: "warning" });
  };

  const showInfo = (headline, paragraph, options = {}) => {
    const content = (
      <div className="mycontent bg-blue-500 rounded-lg p-4">
        <div>
          <h1 className="font-bold text-white">{headline}</h1>
          <p className="text-sm text-white">{paragraph}</p>
        </div>
      </div>
    );
    return addToast(content, { ...options, type: "info" });
  };

  const showCustom = (content, options = {}) => {
    return addToast(content, { ...options, type: "custom" });
  };

  return {
    showToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showCustom,
    removeToast,
    removeAllToasts,
  };
};
