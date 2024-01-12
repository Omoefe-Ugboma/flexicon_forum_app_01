import ReactDOM from "react-dom";
const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div className="modalOverlay">{children}</div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
