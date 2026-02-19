import { X, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useActivityStore } from "../../../store/useActivityStore";
import { useActivityMonth } from "../../../hooks/useActivity";
import CheckboxCircle from "../../../components/atoms/CheckboxCircle";
import Notch from "../../../components/atoms/Notch";
import Card from "../../../components/atoms/Card";
import Loading from "../../../components/molecules/Loading";
import { getDaysInMonth, formatMonthYearID } from "../../../utils/dateUtils";
import ActivityMonthSkeleton from "./ActivityMonthSkeleton";

const ActivityMonthModal = ({ startDate, durationMonth }) => {
    const { isCalenderMonth, setCalenderMonth } = useActivityStore();
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        if (isCalenderMonth) {
            setCurrentDate(new Date());
        }
    }, [isCalenderMonth]);

    const monthYearString = formatMonthYearID(currentDate);

    const monthNumber = currentDate.getMonth() + 1;

    const { data: activityData, isLoading } = useActivityMonth(monthNumber);

    // Calculate min and max dates
    const minDate = startDate ? new Date(startDate) : null;
    let maxDate = null;

    if (minDate && durationMonth) {
        maxDate = new Date(minDate);
        maxDate.setMonth(maxDate.getMonth() + durationMonth);
    }

    // Helper to check if we can go to previous month
    const canGoPrev = () => {
        if (!minDate) return true;
        const prevMonthDate = new Date(currentDate);
        prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
        // We compare the first day of the months
        const currentMonthStart = new Date(prevMonthDate.getFullYear(), prevMonthDate.getMonth(), 1);
        const minMonthStart = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
        return currentMonthStart >= minMonthStart;
    };

    // Helper to check if we can go to next month
    const canGoNext = () => {
        if (!maxDate) return true;
        const nextMonthDate = new Date(currentDate);
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

        const nextMonthStart = new Date(nextMonthDate.getFullYear(), nextMonthDate.getMonth(), 1);
        // maxDate is exclusive (start + duration), so we check if next month is BEFORE maxDate
        // Actually, let's treat duration as inclusive range. 
        // If start is Jan, duration 1 month, it means Jan is allowed. Feb is not? Or Jan + 10 months?
        // Let's assume duration 10 months means we can access 10 months starting from start_date.
        // e.g. Start Jan, duration 1. Allowed: Jan.
        // Start Jan, duration 10. Allowed: Jan, Feb, ..., Oct.
        // So maxDate should be the end of the allowed period.

        // Let's refine maxDate calculation.
        // If duration is 10, and start is 2026-02-08.
        // Allowed range: 2026-02-08 to 2026-12-08 (approx).
        // Navigation is by month. So we allow if the month of nextMonthDate is within range.

        // Let's simplify: 
        // minDate (start of authorized period)
        // maxDate (end of authorized period) = start + duration months.

        return nextMonthDate < maxDate;
    };

    const handlePrevMonth = () => {
        if (canGoPrev()) {
            setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
        }
    };

    const handleNextMonth = () => {
        if (canGoNext()) {
            setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
        }
    };

    const calendarDays = getDaysInMonth(currentDate);
    const weekDays = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

    const getLogForDay = (day) => {
        if (!activityData?.data?.logs || !day) return null;

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const dayStr = String(day).padStart(2, '0');
        const dateKey = `${year}-${month}-${dayStr}`;

        return activityData.data.logs.find(log => log.date === dateKey);
    };

    if (!isCalenderMonth) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <Card className="bg-white w-full max-w-sm lg:max-w-lg rounded-3xl p-5 shadow-xl relative animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">

                <div className="flex justify-between items-center">
                    <h3 className="text-h5 font-medium">Kalender Aktivitas</h3>
                    <button
                        onClick={() => setCalenderMonth()}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="text-gray-500" size={20} />
                    </button>
                </div>

                <div className="flex justify-between items-center py-1">
                    <button
                        onClick={handlePrevMonth}
                        disabled={!canGoPrev()}
                        className={`p-2 rounded-full transition-colors ${canGoPrev() ? 'hover:bg-gray-100 text-primary' : 'text-gray-300 cursor-not-allowed'}`}
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <span className="text-h5 font-medium text-gray-600">{monthYearString}</span>
                    <button
                        onClick={handleNextMonth}
                        disabled={!canGoNext()}
                        className={`p-2 rounded-full transition-colors ${canGoNext() ? 'hover:bg-gray-100 text-primary' : 'text-gray-300 cursor-not-allowed'}`}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div className="border border-primary rounded-2xl p-3 relative pt-8 mb-4 overflow-hidden text-h6">

                    <Notch variant="right" className="px-4 py-1 font-semibold">
                        {monthYearString}
                    </Notch>

                    <div className="grid grid-cols-7 gap-y-1 gap-x-1 text-center">
                        {weekDays.map(day => (
                            <div key={day} className="font-medium text-gray-500">
                                {day}
                            </div>
                        ))}

                        {isLoading ? (
                            <div className="col-span-7 py-2">
                                <ActivityMonthSkeleton />
                            </div>
                        ) : (
                            calendarDays.map((day, index) => {
                                const log = getLogForDay(day);
                                const status = log?.status; // 'taken', 'missed', 'none'
                                const isTaken = status === 'taken';

                                return (
                                    <div key={index} className="flex flex-col items-center">
                                        {day ? (
                                            <>
                                                <div className="relative">
                                                    <CheckboxCircle isActive={isTaken} />
                                                </div>
                                                <span className={`${day ? 'text-gray-700' : 'text-transparent'}`}>
                                                    {day}
                                                </span>
                                            </>
                                        ) : (
                                            <div className="w-8 h-8"></div> // Empty slot placeholder
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                <Card className="mt-4 bg-primary/20 border-1 border-primary p-4 rounded-xl text-h6">
                    <p className="text-primary font-bold">
                        Satu lingkaran hijau = satu langkah baik hari itu.
                    </p>
                    <p className="text-primary/80 leading-relaxed">
                        Perjalanan ini bukan tentang sempurna, tapi tentang terus berjalan.
                        Tidak apa-apa jika ada hari yang terlewat. Yang penting, kamu kembali melanjutkan.
                    </p>
                </Card>

            </Card>
        </div>
    );
};

export default ActivityMonthModal;
