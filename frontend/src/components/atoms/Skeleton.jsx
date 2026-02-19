import React from "react";

const Skeleton = ({ className, ...props }) => {
    return (
        <div
            className={`animate-pulse bg-gray-200 rounded-2xl ${className}`}
            {...props}
        />
    );
};

export default Skeleton;
