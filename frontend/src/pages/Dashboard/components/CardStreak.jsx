import React, { useMemo } from "react";
import Card from "../../../components/atoms/Card";
import { Flame } from "lucide-react";
import { streakMessages } from "../../../utils/messages";

const CardStreak = ({ streak }) => {
  const randomMessage = useMemo(() => {
    return streakMessages[Math.floor(Math.random() * streakMessages.length)];
  }, []);

  return (
    <Card
      variant="white"
      size="full"
      className="flex flex-col py-4 items-start gap-2"
      boxShadowActive={true}
    >
      <div className="flex items-center gap-2 w-full">
        <div className="w-11 h-11 bg-light-orange/30 rounded-full aspect-square flex items-center justify-center">
          <Flame size={20} className="text-dark-orange" />
        </div>
        <div className="flex-1">
          <h2 className="text-h2 font-medium">{streak}</h2>
          <p className="text-h5">Konsisten tanpa terlewat</p>
        </div>
      </div>
      <div className="w-full pt-2 border-t border-gray-100">
        <p className="text-h6 text-gray-500 italic">"{randomMessage}"</p>
      </div>
    </Card>
  );
};

export default CardStreak;
