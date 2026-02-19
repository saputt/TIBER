import React, { useState, useEffect } from "react";
import Card from "../../atoms/Card";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
    getDaysInMonth,
    formatMonthYearID,
    getYearRange,
    formatDateISO,
} from "../../../utils/dateUtils";

const DatePicker = ({ isOpen, onClose, onSelectDate, initialDate }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [mode, setMode] = useState("days"); // 'days' or 'years'
    const [selectedDate, setSelectedDate] = useState(
        initialDate ? new Date(initialDate) : null
    );

    const [yearPage, setYearPage] = useState(new Date().getFullYear());

    useEffect(() => {
        if (isOpen) {
            if (initialDate) {
                const date = new Date(initialDate);
                setCurrentDate(date);
                setSelectedDate(date);
                setYearPage(date.getFullYear());
            } else {
                const now = new Date();
                setCurrentDate(now);
                setYearPage(now.getFullYear());
            }
            setMode("days");
        }
    }, [isOpen, initialDate]);

    if (!isOpen) return null;

    const monthYearString = formatMonthYearID(currentDate);

    const calendarDays = getDaysInMonth(currentDate);

    const handlePrevMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };

    const handleNextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    const handleYearClick = (year) => {
        const newDate = new Date(currentDate);
        newDate.setFullYear(year);
        setCurrentDate(newDate);
        setMode("days");
    };

    const handleDayClick = (day) => {
        const newDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day
        );
        const dateString = formatDateISO(newDate);

        setSelectedDate(newDate);
        onSelectDate(dateString);
        onClose();
    };

    const renderDays = () => {
        const weekDays = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

        return (
            <div className="flex flex-col gap-2 animate-in fade-in duration-300">
                <div className="grid grid-cols-7 gap-y-1 gap-x-1 text-center mb-2">
                    {weekDays.map((day) => (
                        <div key={day} className="font-medium text-gray-500 text-h6">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center">
                    {calendarDays.map((day, index) => {
                        const isSelected =
                            selectedDate &&
                            day === selectedDate.getDate() &&
                            currentDate.getMonth() === selectedDate.getMonth() &&
                            currentDate.getFullYear() === selectedDate.getFullYear();

                        const today = new Date();
                        const isToday =
                            day === today.getDate() &&
                            currentDate.getMonth() === today.getMonth() &&
                            currentDate.getFullYear() === today.getFullYear();

                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center aspect-square"
                            >
                                {day ? (
                                    <button
                                        onClick={() => handleDayClick(day)}
                                        className={`w-full h-full rounded-full flex items-center justify-center text-h6 font-medium transition-all ${isSelected
                                            ? "bg-primary text-white shadow-md shadow-primary/30"
                                            : isToday && "hover:bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {day}
                                    </button>
                                ) : (
                                    <div className="w-full h-full"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderYears = () => {
        const startYear = yearPage - 7;
        const years = getYearRange(startYear, 15);

        return (
            <div className="flex flex-col gap-4 animate-in fade-in duration-300 py-2">
                <div className="grid grid-cols-4 gap-3">
                    {years.map((year) => (
                        <button
                            key={year}
                            onClick={() => handleYearClick(year)}
                            className={`py-3 rounded-[14px] text-h6 font-medium transition-colors ${year === currentDate.getFullYear()
                                ? "bg-primary text-white shadow-md shadow-primary/30"
                                : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
                <div className="flex justify-between items-center px-2">
                    <button
                        onClick={() => setYearPage(yearPage - 15)}
                        className="text-primary p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <span className="text-gray-500 text-h6">
                        {years[0]} - {years[years.length - 1]}
                    </span>
                    <button
                        onClick={() => setYearPage(yearPage + 15)}
                        className="text-primary p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <Card className="bg-white w-full max-w-sm rounded-[24px] p-5 shadow-xl relative animate-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-h4 font-bold text-gray-900">Pilih Tanggal</h3>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="text-gray-500" size={24} />
                    </button>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center bg-gray-50 p-2 rounded-xl mb-4">
                    {mode === "days" && (
                        <button
                            onClick={handlePrevMonth}
                            className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-primary"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    )}

                    <button
                        onClick={() => setMode(mode === "days" ? "years" : "days")}
                        className="flex-1 text-center font-bold text-h5 text-gray-800 hover:text-primary transition-colors flex items-center justify-center gap-1"
                    >
                        {mode === "days" ? monthYearString : "Pilih Tahun"}
                    </button>

                    {mode === "days" && (
                        <button
                            onClick={handleNextMonth}
                            className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-primary"
                        >
                            <ChevronRight size={20} />
                        </button>
                    )}
                </div>

                {/* Content */}
                {mode === "days" ? renderDays() : renderYears()}
            </Card>
        </div>
    );
};

export default DatePicker;
