import { Toaster } from "react-hot-toast";
const ToastNotification = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        success: {
          style: {
            border: "1px solid #21da30",
            padding: "2rem",
            color: "#fff",
            background: "#21da3058",
          },
        },
        error: {
          style: {
            border: "1px solid #ff0000",
            padding: "1rem 2rem",
            color: "#fff",
            background: "#ff000057",
          },
        },
      }}
    />
  );
};

export default ToastNotification;
