import React from "react";

const Badge = ({ variant, size, children, className }) => {
  const defaultStyle =
    "flex items-center justify-center rounded-xl text-h6 py-0.5 font-inter";

  const variants = {
    primary: "bg-primary/20 text-primary border-1 border-primary",
    darkBlue: "bg-dark-blue/20 text-dark-blue border-1 border-dark-blue",
    darkYellow:
      "bg-dark-yellow/10 text-dark-yellow border-1 border-dark-yellow",
    gray: "bg-gray-200 text-black border-1 border-gray-400",
    confirmPrimary: "bg-primary/30 text-black",
    confirmGray: "bg-gray-200 text-black",
    yellow: "bg-dark-yellow text-white black border-1 border-dark-yellow",
  };

  const sizes = {
    sm: "w-24",
    md: "w-40",
    full: "w-full",
  };

  return (
    <div
      className={`${sizes[size]} ${variants[variant]} ${defaultStyle} ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
