import React, { useMemo } from "react";
import Card from "../../../components/atoms/Card";
import { Flame } from "lucide-react";
import { streakMessages } from "../../../utils/messages";

const StreakCard = ({ highestStreak }) => {
  const randomMessage = useMemo(() => {
    return streakMessages[Math.floor(Math.random() * streakMessages.length)];
  }, []);

  return (
    <Card
      size="full"
      variant="white"
      boxShadowActive="true"
      className="flex flex-col justify-center lg:items-start lg:flex-col gap-3 lg:gap-4 lg:h-full lg:px-6"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-light-orange/30">
          <Flame className="text-dark-orange" size={14} />
        </div>
        <p className="font-semibold text-h6 lg:text-h4">
          Streak terpanjang: {highestStreak} hari
        </p>
      </div>

      <p className="text-gray-500 text-h6 font-normal leading-relaxed">
        {randomMessage}
      </p>
    </Card>
  );
};

export default StreakCard;
