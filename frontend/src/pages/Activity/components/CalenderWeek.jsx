import React from "react";
import Card from "../../../components/atoms/Card";
import Notch from "../../../components/atoms/Notch";
import CheckboxCircle from "../../../components/atoms/CheckboxCircle";
import { useActivityStore } from "../../../store/useActivityStore";

const CalenderWeek = ({ weekSummary, startDate }) => {
  const setCalenderMonth = useActivityStore((state) => state.setCalenderMonth);

  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const start = startDate ? new Date(startDate + "T00:00:00") : now;
  start.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((now - start) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.max(1, Math.floor(diffDays / 7));

  const currentMonth = now.toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });

  return (
    <Card
      className="relative overflow-hidden pt-8 flex flex-col gap-3"
      variant="white"
      size="full"
      boxShadowActive={true}
    >
      <Notch variant="right" className="font-semibold text-h6 px-5 py-1 lg:text-h5 lg:px-8">
        Minggu {weekNumber} | {currentMonth}
      </Notch>

      <div className="flex justify-between">
        {weekSummary.map((week) => {
          const dateObj = new Date(week.date);
          const dayInWeek = dateObj.toLocaleDateString("id-ID", {
            weekday: "short",
          });
          const isTaken = week.status === "taken";

          return (
            <div className="flex flex-col items-center gap-1" key={week.date}>
              <p className="text-h6">{dayInWeek}</p>
              <CheckboxCircle
                isActive={isTaken}
                size={22}
                className="w-9 h-9 lg:w-12 lg:h-12"
                classCircle={`${isTaken ? "animate-[scaleIn_0.4s_ease-out]" : ""}`}
              />
              <p className="text-h6">{week.date.split("-")[2]}</p>
            </div>
          );
        })}
      </div>

      <p
        className="text-h6 text-right font-semibold hover:text-primary transition-colors cursor-pointer"
        onClick={() => setCalenderMonth()}
      >
        Lihat Selengkapnya →
      </p>
    </Card>
  );
};

export default CalenderWeek;
