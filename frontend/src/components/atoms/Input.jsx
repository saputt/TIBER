import React from "react";

const Input = ({
  type,
  placeholder,
  variant,
  size,
  className,
  boxShadowActive,
  onChange,
  value,
  endIcon,
  onEndIconClick,
}) => {
  const defaultStyle =
    "rounded-lg px-2.5 py-2.5 focus:outline-black font-inter";

  const variants = {
    white: "bg-white text-black border-1 border-gray-400",
    gray: "bg-bg-gray-50 text-black border-1 border-gray-400",
    whiteNoBorder: "bg-white text-black border-none",
    grayNoBorder: "bg-bg-gray-50 text-black border-none",
  };

  const sizes = {
    sm: "w-[40%]",
    md: "w-[80%]",
    full: "w-full",
  };

  const boxShadow = boxShadowActive ? "shadow-input" : "";

  return (
    <div className={`relative ${sizes[size]}`}>
      <input
        type={type}
        placeholder={placeholder}
        className={`${sizes.full} ${variants[variant]} ${defaultStyle} ${className} ${boxShadow}`}
        onChange={onChange}
        value={value}
        min={type === "number" ? 1 : undefined}
        max={type === "number" ? 100 : undefined}
      />
      {endIcon && (
        <div
          className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 z-10 ${onEndIconClick ? "cursor-pointer" : ""
            }`}
          onClick={onEndIconClick}
        >
          {endIcon}
        </div>
      )}
    </div>
  );
};

export default Input;
