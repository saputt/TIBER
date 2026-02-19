import React from "react";
import Skeleton from "../../../components/atoms/Skeleton";

const ActivityMonthSkeleton = () => {
    return (
        <div className="grid grid-cols-7 gap-y-2 gap-x-1 animate-in fade-in duration-500">
            {[...Array(35)].map((_, index) => (
                <div key={index} className="flex flex-col items-center justify-center aspect-square">
                    <Skeleton className="w-8 h-8 rounded-full" />
                </div>
            ))}
        </div>
    );
};

export default ActivityMonthSkeleton;
