import React from "react";
import Card from "../../../components/atoms/Card";
import { Sparkle } from "lucide-react";

const CardJourney = ({ dayPass, totalDay }) => {
  const progressPercentage = (dayPass / totalDay) * 100;

  const getJourneyMessage = (progress) => {
    if (progress <= 10) {
      return "Awal yang hebat! Membangun rutinitas adalah kunci kesuksesan.";
    } else if (progress <= 30) {
      return "Kamu sudah di jalur yang benar. Terus pertahankan semangatmu!";
    } else if (progress <= 60) {
      return "Sudah separuh jalan! Jangan menyerah, kesehatanmu sangat berharga.";
    } else if (progress <= 90) {
      return "Sedikit lagi! Garis finish sudah di depan mata.";
    } else {
      return "Luar biasa! Kamu adalah pejuang yang tangguh.";
    }
  };

  return (
    <Card
      variant="white"
      size="full"
      className="py-5 flex flex-col gap-3 h-full justify-between"
      boxShadowActive={true}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 aspect-square rounded-full bg-sec-dark-blue/30 flex items-center justify-center">
          <Sparkle className="text-sec-dark-blue" size={16} />
        </div>
        <h3 className="text-h4">Perjalanan Pengobatan</h3>
      </div>
      <Card
        className="bg-sec-dark-blue/10 flex flex-col gap-1 py-4"
        size="full"
      >
        <h5 className="font-bold text-h5">{dayPass} hari sudah kamu jalani.</h5>
        <p className="text-h5">
          {getJourneyMessage(progressPercentage)}
        </p>
      </Card>
    </Card>
  );
};

export default CardJourney;
