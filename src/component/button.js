import React from "react";

export const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
  >
    {children}
  </button>
);
