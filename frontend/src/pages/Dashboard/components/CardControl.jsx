import React, { useState } from "react";
import Card from "../../../components/atoms/Card";
import { Bell, Calendar } from "lucide-react";
import { useMedicationLog } from "../../../hooks/useDashboard";
import CheckupModal from "./CheckupModal";

const CardControl = ({ dayLeft }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = () => {
    if (dayLeft === 0) {
      setIsModalOpen(true);
    }
  };

  const handleConfirmCheckup = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        className={`py-4 flex flex-col gap-2 transition-all ${dayLeft === 0
          ? "bg-dark-purple/20 cursor-pointer hover:shadow-lg active:scale-[0.98]"
          : "bg-light-purple"
          }`}
        size="full"
        boxShadowActive={true}
        onClick={handleCardClick}
      >
        <div className="flex gap-3 items-center">
          <div className="w-8 h-8 aspect-square rounded-full flex justify-center items-center bg-dark-purple/20">
            <Calendar size={15} className="text-dark-purple" />
          </div>
          <h5 className="text-h5 font-medium">
            {dayLeft === 0 ? "Saatnya Kontrol!" : "Kontrol Berikutnya"}
          </h5>
        </div>

        <div>
          <h3 className="font-medium text-h3">
            {dayLeft === 0 ? "Hari ini waktunya kontrol" : `${dayLeft} Hari Lagi`}
          </h3>
        </div>

        <div className="flex gap-2">
          <Bell size={14} className="text-dark-purple" />
          <p className="text-h6">
            {dayLeft === 0 ? "Jangan lupa periksa ya!" : "Kami akan mengingatkanmu"}
          </p>
        </div>
      </Card>

      <CheckupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmCheckup}
      />
    </>
  );
};

export default CardControl;
