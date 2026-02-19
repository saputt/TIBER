import React, { useState } from "react";
import CalenderWeek from "./components/CalenderWeek";
import StreakCard from "./components/StreakCard";
import History from "./components/History";
import ActivityMonthModal from "./components/ActivityMonthModal";
import ActivityHistoryModal from "./components/ActivityHistoryModal";
import ActivitySkeleton from "./components/ActivitySkeleton";
import DailyJournal from "./components/DailyJournal";
import Button from "../../components/atoms/Button";
import { useActivityOverview, useGetDailyNotes } from "../../hooks/useActivity";
import { useGetPersonalization } from "../../hooks/useProfile";

const ActivityPage = () => {
  const { data, isLoading } = useActivityOverview();
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isDailyJournal, setIsDailyJournal] = useState(false);

  const colorMinumObat = isDailyJournal
    ? "bg-white text-black border border-gray-200"
    : "bg-primary text-white";
  const colorDailyJournal = isDailyJournal
    ? "bg-primary text-white"
    : "bg-white text-black border border-gray-200";

  const { data: personalization } = useGetPersonalization();

  if (isLoading) {
    return <ActivitySkeleton />;
  }

  return (
    <>
      <div className="flex flex-col gap-3 lg:gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-h3">Aktivitas Saya</h3>
          <div className="flex gap-2.5">
            <button
              className={`${colorMinumObat} text-h6 px-5 py-1 rounded-xl w-fit cursor-pointer transition-colors`}
              onClick={() => setIsDailyJournal(false)}
            >
              Minum Obat
            </button>
            <Button
              className={`${colorDailyJournal} text-h6 px-5 py-1 rounded-xl w-fit cursor-pointer transition-colors`}
              onClick={() => setIsDailyJournal(true)}
            >
              Catatan
            </Button>
          </div>
        </div>

        {isDailyJournal ? (
          <DailyJournal />
        ) : (
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-12 lg:gap-6 lg:items-stretch">
            <div className="lg:col-span-8">
              <CalenderWeek weekSummary={data?.data?.weekly_summary} startDate={personalization?.data?.start_date} />
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <StreakCard highestStreak={data?.data?.highest_streak} />
            </div>

            <div className="lg:col-span-12">
              <History
                data={data?.data?.recent_logs}
                onOpen={() => setIsHistoryModalOpen(true)}
              />
            </div>
          </div>
        )}
      </div>

      {!isDailyJournal && (
        <>
          <ActivityMonthModal
            startDate={personalization?.data?.start_date}
            durationMonth={personalization?.data?.duration_month}
          />
          <ActivityHistoryModal
            isOpen={isHistoryModalOpen}
            onClose={() => setIsHistoryModalOpen(false)}
            startDate={personalization?.data?.start_date}
            durationMonth={personalization?.data?.duration_month}
          />
        </>
      )}
    </>
  );
};

export default ActivityPage;
