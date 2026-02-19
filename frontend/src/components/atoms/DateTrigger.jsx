import React from "react";
import { Calendar } from "lucide-react";

const DateTrigger = ({ value, onClick, placeholder, className }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full p-3 rounded-lg border border-gray-400 flex justify-between items-center transition-all duration-200 bg-gray-50 text-gray-400 hover:border-primary/50 text-left ${className}`}
            type="button"
        >
            <span className={`text-h5 font-medium font-inter ${value ? "text-black" : ""}`}>
                {value || placeholder}
            </span>
            <Calendar size={20} className={value ? "text-primary" : "text-gray-400"} />
        </button>
    );
};

export default DateTrigger;
