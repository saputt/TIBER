import React from "react";

const Notch = ({ variant, children, className }) => {
  const styles = {
    left: "rounded-br-lg top-0 left-0",
    right: "rounded-bl-lg top-0 right-0",
  };

  const defaultStyle =
    "bg-primary text-white text-h6 font-semibold absolute text-center";
  return (
    <div className={`${className} ${styles[variant]} ${defaultStyle}`}>
      {children}
    </div>
  );
};

export default Notch;
