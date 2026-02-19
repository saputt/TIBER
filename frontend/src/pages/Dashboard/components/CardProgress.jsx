import React from "react";
import Card from "../../../components/atoms/Card";
import { ChartBar } from "lucide-react";
import BarStep from "../../../components/atoms/BarStep";
import RangeSlider from "../../../components/atoms/RangeSlider";

const CardProgress = ({ currentDay, totalDay }) => {
  const percentage = (currentDay / totalDay) * 100;

  const getProgressMessage = (progress) => {
    if (progress <= 10) {
      return "Perjalanan ribuan mil dimulai dengan satu langkah.";
    } else if (progress <= 30) {
      return "Konsistensi adalah kunci. Kamu melakukan hal yang hebat.";
    } else if (progress <= 60) {
      return "Setiap hari membawamu lebih dekat pada kesembuhan.";
    } else if (progress <= 90) {
      return "Terus melangkah, kemenangan sudah di depan mata.";
    } else {
      return "Kamu berhasil! Kesehatanmu adalah prioritas utama.";
    }
  };

  return (
    <Card
      boxShadowActive={true}
      size="full"
      variant="white"
      className="py-4 flex flex-col gap-4 h-full"
    >
      <div className="flex gap-2 items-center">
        <div className="w-8 h-8 rounded-full bg-light-green/30 flex items-center justify-center">
          <ChartBar size={15} className="text-primary" />
        </div>
        <h4 className="text-h4">Progres Pengobatan</h4>
      </div>
      <div className="flex flex-col">
        <h2 className="font-semibold text-h2">
          Hari {currentDay} dari {totalDay}
        </h2>
        <p className="text-h5">{getProgressMessage(percentage)}</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex">
          <RangeSlider min={0} max={totalDay} value={currentDay} isReadOnly={true} />
        </div>
        <div className="w-full flex justify-between">
          <p className="text-h6">Mulai</p>
          <p className="text-h6">Selesai</p>
        </div>
      </div>
    </Card>
  );
};

export default CardProgress;
