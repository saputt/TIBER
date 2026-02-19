import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center w-full h-full min-h-[100px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
    );
};

export default Loading;
