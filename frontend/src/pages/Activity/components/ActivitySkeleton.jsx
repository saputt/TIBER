import React from "react";
import Skeleton from "../../../components/atoms/Skeleton";

const ActivitySkeleton = () => {
    return (
        <div className="flex flex-col gap-3 animate-in fade-in duration-500">
            {/* Header */}
            <Skeleton className="h-8 w-40" />

            {/* Button */}
            <Skeleton className="h-9 w-32 rounded-xl" />

            {/* CalendarWeek Skeleton */}
            <Skeleton className="h-24 w-full" />

            {/* StreakCard Skeleton */}
            <Skeleton className="h-24 w-full" />

            {/* History Skeleton */}
            <Skeleton className="h-64 w-full" />
        </div>
    );
};

export default ActivitySkeleton;
