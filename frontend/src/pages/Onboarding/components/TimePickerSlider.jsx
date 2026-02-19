import React, { useEffect, useState } from "react";
import RangeSlider from "../../../components/atoms/RangeSlider";
import { useOnboardingStore } from "../../../store/useOnboardingStore";

const times = [
  {
    timeDay: "pagi",
    defaultMin: 480,
    time: ["07.00", "08.00", "09.00", "10.00"],
  },
  {
    timeDay: "siang",
    defaultMin: 720,
    time: ["11.00", "12.00", "13.00", "14.00"],
  },
  {
    timeDay: "sore",
    defaultMin: 960,
    time: ["15.00", "16.00", "17.00", "18.00"],
  },
  {
    timeDay: "malam",
    defaultMin: 1200,
    time: ["19.00", "20.00", "21.00", "22.00"],
  },
];

const TimePickerSlider = ({ timeDay }) => {
  const setFormData = useOnboardingStore((state) => state.setFormData);

  const getTime = () => times.find((time) => time.timeDay === timeDay);

  const minMinute = parseInt(getTime().time[0].split(".")[0] * 60);
  const maxMinute = parseInt(getTime().time.at(-1).split(".")[0] * 60);

  const [minutes, setMinutes] = useState(getTime().defaultMin);

  const formatTime = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    const format = `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
    return format;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormData("personalization", { reminder_time: formatTime(minutes) });
    }, 500);
    return () => clearTimeout(timer);
  }, [minutes, timeDay]);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-black">
        time Pengingat - <b>{timeDay}</b>
      </p>
      <div className="p-5 flex flex-col gap-3 bg-white rounded-md border-1 border-gray-300 shadow-sm">
        <RangeSlider
          min={minMinute}
          max={maxMinute}
          step={5}
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
        />

        <div className="flex justify-between text-black/70">
          {getTime().time.map((time) => (
            <p className="text-h6" key={time}>{time}</p>
          ))}
        </div>

        <div className="w-[80%] bg-gray-100 p-2 rounded-xl text-center text-h5 font-bold m-auto border-1 border-gray-300 text-black/75">
          {formatTime(minutes)}
        </div>
      </div>
    </div>
  );
};

export default TimePickerSlider;
