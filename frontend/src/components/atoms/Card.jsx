import React from "react";

const Card = ({ variant, size, boxShadowActive, children, className }) => {
  const defaultStyle = "h-fit rounded-xl px-5 py-2.5";

  const variants = {
    white: "bg-white",
    Blue: "bg-light-blue border-1 border-dark-blue",
    BlueNoBorder: "bg-light-blue/30",
    primary: "bg-primary/20 border-1 border-primary",
    primaryNoBorder: "bg-primary/20",
    purpleNoBorder: "bg-purple",
    yellow: "bg-light-yellow border-1 border-dark-yellow",
    gray: "bg-slate-100 border-1 border-slate-300",
  };

  const sizes = {
    sm: "w-[40%]",
    md: "w-[80%]",
    full: "w-full",
  };

  const boxShadow = boxShadowActive ? "shadow-card" : "";

  return (
    <div
      className={`${sizes[size]} ${variants[variant]} ${defaultStyle} ${className} ${boxShadow}`}
    >
      {children}
    </div>
  );
};

export default Card;
