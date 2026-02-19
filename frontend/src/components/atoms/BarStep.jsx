import React from "react";

const BarStep = ({ isActive }) => {
  return (
    <div
      className={`h-1 flex-1 ${isActive ? "bg-primary" : "bg-gray-200"}`}
    ></div>
  );
};

export default BarStep;
