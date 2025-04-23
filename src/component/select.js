import React from "react";

export const Select = ({ onValueChange, children }) => (
  <select
    onChange={(e) => onValueChange(e.target.value)}
    className="border p-2 rounded-lg w-full"
  >
    {children}
  </select>
);

export const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);
