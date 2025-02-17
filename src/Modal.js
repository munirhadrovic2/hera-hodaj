import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // If the modal is closed, do not render it

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal content */}
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {/* Modal children (content) */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
