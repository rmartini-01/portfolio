import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-black p-4 flex flex-col rounded-lg shadow-lg max-h-full w-full max-w-screen-lg">
        <button
          className="self-end text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          Close
        </button>
        <div className="overflow-y-auto flex flex-col justify-center items-center h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
