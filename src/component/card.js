import React from "react";

export const Card = ({ children }) => (
  <div className="rounded-2xl shadow-lg p-4 bg-white border border-gray-200">
    {children}
  </div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`space-y-2 ${className}`}>{children}</div>
);
