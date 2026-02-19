import { Circle, CircleCheck } from "lucide-react";
import React, { useState } from "react";

const CheckboxCircle = ({ isActive, className, classCircle = "w-4 h-4" }) => {
  const defaultDesign =
    "rounded-full p-2 flex justify-center items-center ";
  return (
    <>
      {isActive && (
        <div className={`${defaultDesign} bg-primary ${className}`}>
          <CircleCheck className={`text-white ${classCircle}`} />
        </div>
      )}

      {!isActive && (
        <div className={`${defaultDesign} bg-gray-200 ${className}`}>
          <Circle className={`text-gray-400 ${classCircle}`} />
        </div>
      )}
    </>
  );
};

export default CheckboxCircle;
