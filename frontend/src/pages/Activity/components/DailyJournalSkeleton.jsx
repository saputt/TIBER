import React from "react";
import Card from "../../../components/atoms/Card";
import Skeleton from "../../../components/atoms/Skeleton";

const DailyJournalSkeleton = () => {
    return (
        <Card size="full" variant="white" boxShadowActive={true} className="py-5">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-1">
                    <div className="flex flex-col gap-2">
                        <Skeleton className="h-8 w-48" />
                        <Skeleton className="h-5 w-64" />
                    </div>
                    <div className="hidden md:block">
                        <Skeleton className="h-10 w-40 rounded-full" />
                    </div>
                </div>

                <div className="relative min-h-[200px]">
                    <div className="absolute left-4 top-0 h-full w-px bg-gray-200 z-0 hidden lg:block"></div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="break-inside-avoid mb-5">
                                <Skeleton className="h-40 w-full rounded-xl" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default DailyJournalSkeleton;
