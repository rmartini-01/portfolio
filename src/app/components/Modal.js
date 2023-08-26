import React from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center  items-center m-32 z-50">
      <div className="bg-black justify-center p-8 flex flex-col rounded-lg shadow-lg max-h-full w-full">
        <button
          className="text-right text-gray-500 hover:text-gray-700 absolute top-2 right-2"
          onClick={onClose}
        >
          Close
        </button>
        <div className="overflow-y-auto flex flex-col justify-center  items-center">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
