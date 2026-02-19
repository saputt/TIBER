import React from "react";
import Card from "../../../components/atoms/Card";
import { Calendar, Timer } from "lucide-react";
import { useProfileStore } from "../../../store/useProfileStore";

const TreatmentEditSetting = ({ startDate, durationTreatment }) => {
  const setDuration = useProfileStore((state) => state.setDuration);
  const setStartDate = useProfileStore((state) => state.setStartDate);
  return (
    <Card
      className="flex flex-col gap-2"
      variant="white"
      boxShadowActive={true}
      size="full"
    >
      <div className="flex items-center ">
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex items-center gap-1">
            <Calendar size={10} />
            <p className="text-h5 font-semibold">Tanggal Mulai</p>
          </div>
          <p className="text-h5">{startDate}</p>
        </div>
        <p
          className="text-primary text-h5 font-semibold cursor-pointer"
          onClick={() => setStartDate()}
        >
          Ubah
        </p>
      </div>
      <hr className="text-gray-400" />
      <div className="flex items-center">
        <div className="flex flex-col flex-1 gap-1">
          <div className="flex items-center gap-1">
            <Timer size={10} />
            <p className="text-h5 font-semibold">Durasi Pengobatan</p>
          </div>
          <p className="text-h5">{durationTreatment} Bulan</p>
        </div>
        <p
          className="text-primary text-h5 font-semibold cursor-pointer"
          onClick={() => setDuration()}
        >
          Ubah
        </p>
      </div>
    </Card>
  );
};

export default TreatmentEditSetting;
