import React, { useState } from "react";
import Card from "../../components/atoms/Card";
import Badge from "../../components/atoms/Badge";
import { Pill } from "lucide-react";
import Button from "../../components/atoms/Button";
import CardLog from "./components/CardLog";
import CalendarStrip from "./components/CalendarStrip";
import CardStreak from "./components/CardStreak";
import CardJourney from "./components/CardJourney";
import CardControl from "./components/CardControl";
import CardProgress from "./components/CardProgress";
import CardImportant from "./components/CardImportant";
import { useDashboardOverview } from "../../hooks/useDashboard";
import DashboardSkeleton from "./components/DashboardSkeleton";
import Loading from "../../components/molecules/Loading";
import { useGetPersonalization } from "../../hooks/useProfile";
import { useActivityOverview } from "../../hooks/useActivity";

const DashboardPage = () => {
  const { data: dashboard, isLoading } = useDashboardOverview();
  const { data: personalization, isLoading: personalizationLoading } =
    useGetPersonalization();
  const { data: activityData } = useActivityOverview();

  if (isLoading || personalizationLoading) {
    return <DashboardSkeleton />;
  }

  const calculateDaysLeft = (targetDate) => {
    if (!targetDate) return 0;

    const target = new Date(targetDate);
    const now = new Date();

    target.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    const diffInMs = target - now;

    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
  };

  return (
    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-4 lg:items-stretch">
      {/* Row 1: Calendar Strip — full width */}
      <div className="lg:col-span-12">
        <CalendarStrip
          isTakenToday={dashboard?.data?.is_taken_today}
          weekSummary={activityData?.data?.weekly_summary || []}
        />
      </div>

      {/* Row 2: CardLog (left) + Streak & Control (right) */}
      <div className="lg:col-span-8">
        <CardLog
          isTaken={dashboard?.data?.is_taken_today}
          reminderTime={personalization?.data?.reminder_time}
          timeCategory={personalization?.data?.time_category}
          isCompleted={dashboard?.data?.days_passed >= dashboard?.data?.total_days}
        />
      </div>

      <div className="flex flex-col gap-4 lg:col-span-4">
        <CardStreak streak={dashboard?.data?.current_streak} />
        <CardControl
          dayLeft={calculateDaysLeft(dashboard?.data?.next_checkup)}
        />
      </div>

      {/* Row 3: Progress + Journey + Important */}
      <div className="lg:col-span-4">
        <CardProgress
          currentDay={dashboard?.data?.days_passed}
          totalDay={dashboard?.data?.total_days}
        />
      </div>
      <div className="lg:col-span-4">
        <CardJourney
          dayPass={dashboard?.data?.days_passed}
          totalDay={dashboard?.data?.total_days}
        />
      </div>
      <div className="lg:col-span-4">
        <CardImportant />
      </div>
    </div>
  );
};

export default DashboardPage;
