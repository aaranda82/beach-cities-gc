import React from "react";

const BaseModal: React.FC = ({ children }) => (
  <div
    className="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
          <div className="bg-white ">
            <div className="sm:flex sm:items-start">{children}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BaseModal;
