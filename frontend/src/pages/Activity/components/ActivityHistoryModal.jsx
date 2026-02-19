import React, { useState, useEffect } from "react";
import Card from "../../../components/atoms/Card";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import CheckboxCircle from "../../../components/atoms/CheckboxCircle";
import Loading from "../../../components/molecules/Loading";
import { useActivityWeek } from "../../../hooks/useActivity";
import {
  formatDateISO,
  formatRelativeDateID,
  getStartOfWeek,
  getWeekOfMonth,
  formatMonthYearID,
} from "../../../utils/dateUtils";
import Notch from "../../../components/atoms/Notch";
import ActivityHistorySkeleton from "./ActivityHistorySkeleton";

const ActivityHistoryModal = ({ isOpen, onClose, startDate, durationMonth }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const weekStart = getStartOfWeek(currentDate);
  const weekStartISO = formatDateISO(weekStart);

  const { data: activityData, isLoading } = useActivityWeek(weekStartISO);

  const monthYearString = formatMonthYearID(currentDate);
  const weekNumber = getWeekOfMonth(currentDate);

  // Calculate min and max dates
  const minDate = startDate ? new Date(startDate) : null;
  let maxDate = null;
  if (minDate && durationMonth) {
    maxDate = new Date(minDate);
    maxDate.setMonth(maxDate.getMonth() + durationMonth);
  }

  const canGoPrev = () => {
    if (!minDate) return true;
    const prevWeekDate = new Date(currentDate);
    prevWeekDate.setDate(prevWeekDate.getDate() - 7);
    // Ensure the *end* of the previous week (or even the start) is not fully before minDate.
    // Simplest check: start of the week vs minDate.
    const prevWeekStart = getStartOfWeek(prevWeekDate);

    // If the start of the previous week is before the start of the min allowed date?
    // Actually, if the week contains strict "start_date", it should be allowed.
    // But let's stick to "start of week" logic for simplicity first.
    // Or checking if the *week* overlaps with the allowed range.

    // If we go back 7 days, is the new date still valid?
    // Let's use the `currentDate` (which acts as a pointer) for navigation check.
    // Usually `currentDate` is somewhere in the week.

    return prevWeekStart >= getStartOfWeek(minDate);
  };

  const canGoNext = () => {
    if (!maxDate) return true;
    const nextWeekDate = new Date(currentDate);
    nextWeekDate.setDate(nextWeekDate.getDate() + 7);

    const nextWeekStart = getStartOfWeek(nextWeekDate);
    // Check if next week starts before the cutoff
    return nextWeekStart < maxDate;
  };


  const handlePrevWeek = () => {
    if (canGoPrev()) {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() - 7);
      setCurrentDate(newDate);
    }
  };

  const handleNextWeek = () => {
    if (canGoNext()) {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() + 7);
      setCurrentDate(newDate);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <Card className="bg-white w-full max-w-sm lg:max-w-md rounded-2xl p-5 shadow-xl relative animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-h5 font-medium text-gray-900">
            Riwayat Aktivitas
          </h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="text-gray-400" size={20} />
          </button>
        </div>

        <div className="flex justify-center mb-2">
          <div className="bg-primary/20 px-3 py-1 rounded-lg text-h5 font-medium text-gray-700 flex items-center gap-1">
            {monthYearString} ▼
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevWeek}
            disabled={!canGoPrev()}
            className={`p-2 rounded-full transition-colors ${canGoPrev() ? 'text-primary hover:bg-green-50' : 'text-gray-300 cursor-not-allowed'}`}
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-h5 font-medium text-gray-600">
            Minggu {weekNumber}
          </span>
          <button
            onClick={handleNextWeek}
            disabled={!canGoNext()}
            className={`p-2 rounded-full transition-colors ${canGoNext() ? 'text-primary hover:bg-green-50' : 'text-gray-300 cursor-not-allowed'}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <Card
          boxShadowActive={true}
          className="flex-1 overflow-y-auto relative overflow-hidden pt-8"
        >
          <Notch variant="right" className="px-3 py-1">
            Minggu {weekNumber} | {monthYearString}
          </Notch>

          <p className="text-h7 lg:text-h6 font-light text-gray-500 mb-2">
            Hanya menampilkan 1 Minggu terakhir
          </p>

          <div className="flex flex-col gap-1 lg:gap-2">
            {isLoading ? (
              <ActivityHistorySkeleton />
            ) : activityData?.data?.logs?.length > 0 ? (
              activityData.data.logs.map((item, index) => {
                const isTaken = item.status === "taken";
                const statusText = isTaken
                  ? "Minum obat tercatat"
                  : "Tidak tercatat";

                return (
                  <div className="flex gap-3 items-center" key={index}>
                    <div className="mt-0.5">
                      <CheckboxCircle isActive={isTaken} />
                    </div>
                    <div className="flex flex-col lg:gap-1 flex-1 justify-center">
                      <p className="font-semibold text-h6 lg:text-h5 text-gray-900">
                        {formatRelativeDateID(item.date)}
                      </p>
                      <p className="text-h7 lg:text-h6 text-gray-500">
                        {statusText}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500 py-10">
                Tidak ada aktivitas pada minggu ini.
              </p>
            )}
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default ActivityHistoryModal;
