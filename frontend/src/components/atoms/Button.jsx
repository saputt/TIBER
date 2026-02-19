import React from "react";

const Button = ({
  variant,
  size,
  children,
  className,
  boxShadowActive,
  onClick,
  disabled,
  type = "button"
}) => {
  const defaultStyle = "rounded-lg font-inter cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-white shadow-primary/20 hover:shadow-primary/40 ",
    secondary: "bg-primary/50",
    gray: "bg-gray-100 border-1 border-gray-200",
    white: "bg-white border-1 border-gray-200",
  };

  const sizes = {
    sm: "py-3 px-10",
    md: "w-[80%] py-3",
    full: "w-full py-3",
  };

  const boxShadow = boxShadowActive ? "shadow-button" : "";

  return (
    <button
      type={type}
      className={`${sizes[size]} ${variants[variant]} ${defaultStyle} ${className} ${boxShadow}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
