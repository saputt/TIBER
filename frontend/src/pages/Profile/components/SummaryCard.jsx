import React from "react";
import Card from "../../../components/atoms/Card";
import { Calendar, ChartNoAxesColumnIncreasing, Flame } from "lucide-react";

const SummaryCard = ({ dayPass, currentStreak, totalDay }) => {
  const progress = Number(((dayPass / totalDay) * 100).toFixed(1));
  return (
    <Card
      size="full"
      className="flex flex-col gap-2 bg-tersier/10 border-1 border-primary lg:py-5"
    >
      <h4 className="text-h4 font-semibold">Ringkasan Perjalanan</h4>

      {/* Hari tercatat */}
      <div className="flex justify-between lg:justify-around">
        <div className="flex flex-col text-center items-center gap-1">
          <div className="w-9 h-9 aspect-square rounded-full bg-white/50 flex justify-center items-center">
            <Calendar className="text-primary" size={16} />
          </div>
          <div className="flex flex-col text-center items-center">
            <h3 className="font-semibold text-h3">{dayPass}</h3>
            <p className="text-h6">Hari Dilewati</p>
          </div>
        </div>

        {/* Streak */}
        <div className="flex flex-col text-center items-center gap-1">
          <div className="w-9 h-9 aspect-square rounded-full bg-white/50 flex justify-center items-center">
            <Flame size={16} className="text-dark-orange" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-h3">{currentStreak}</h3>
            <p className="text-h6">Beruntun</p>
          </div>
        </div>

        {/* progress */}
        <div className="flex flex-col text-center items-center gap-1">
          <div className="w-9 h-9 aspect-square rounded-full bg-white/50 flex justify-center items-center">
            <ChartNoAxesColumnIncreasing className="text-primary" size={16} />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-h3">{progress}%</h3>
            <p className="text-h6">Progress</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SummaryCard;
