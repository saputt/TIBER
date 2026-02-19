import React from "react";
import { ChevronDown } from "lucide-react";

const Select = ({ size, onClick, defaultValue }) => {
  const defaultStyle =
    "flex items-center justify-center gap-0.5 text-h5 py-0.5";

  const sizes = {
    sm: "w-[20%]",
    md: "w-[40%]",
    full: "w-full",
  };

  return (
    <div className={`${sizes[size]} ${defaultStyle}`}>
      <span className="font-inter" onClick={onClick}>
        {defaultValue}
      </span>
      <ChevronDown size="16px" />
    </div>
  );
};

export default Select;
