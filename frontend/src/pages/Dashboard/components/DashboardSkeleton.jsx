import React from "react";
import Skeleton from "../../../components/atoms/Skeleton";

const DashboardSkeleton = () => {
    return (
        <div className="flex flex-col gap-4 animate-in fade-in duration-500">
            {/* CardLog Skeleton */}
            <Skeleton className="h-48 w-full" />

            {/* CardStreak Skeleton */}
            <Skeleton className="h-24 w-full" />

            {/* CardJourney Skeleton */}
            <div className="flex gap-3">
                <Skeleton className="h-32 flex-1" />
                <Skeleton className="h-32 flex-1" />
            </div>

            {/* CardControl Skeleton */}
            <Skeleton className="h-28 w-full" />

            {/* CardProgress Skeleton */}
            <Skeleton className="h-64 w-full" />

            {/* CardImportant Skeleton */}
            <Skeleton className="h-20 w-full" />
        </div>
    );
};

export default DashboardSkeleton;
