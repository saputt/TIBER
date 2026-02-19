import React from "react";
import Skeleton from "../../../components/atoms/Skeleton";

const ProfileSkeleton = () => {
    return (
        <div className="flex flex-col gap-4 animate-in fade-in duration-500">
            {/* ProfileCard Skeleton */}
            <Skeleton className="h-40 w-full" />

            {/* SummaryCard Skeleton */}
            <Skeleton className="h-32 w-full" />

            {/* SettingReminderCard Skeleton */}
            <Skeleton className="h-24 w-full" />

            {/* HelpCard Skeleton */}
            <Skeleton className="h-16 w-full" />

            {/* NoteCard Skeleton */}
            <Skeleton className="h-16 w-full" />

            {/* Logout Button Skeleton */}
            <Skeleton className="h-12 w-full rounded-2xl" />
        </div>
    );
};

export default ProfileSkeleton;
