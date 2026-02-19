import React from "react";
import Skeleton from "../../../components/atoms/Skeleton";

const ActivityHistorySkeleton = () => {
    return (
        <div className="flex flex-col gap-3 animate-in fade-in duration-500">
            {[...Array(6)].map((_, index) => (
                <div className="flex gap-3 items-center" key={index}>
                    <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />

                    <div className="flex flex-col flex-1 gap-1">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-4 w-24" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActivityHistorySkeleton;
