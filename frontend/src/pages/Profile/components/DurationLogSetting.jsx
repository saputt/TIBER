import React, { useState } from "react";
import Card from "../../../components/atoms/Card";
import { Timer, X } from "lucide-react";
import Button from "../../../components/atoms/Button";
import { useProfileStore } from "../../../store/useProfileStore";
import InputSelect from "../../../components/molecules/InputSelect";
import Input from "../../../components/atoms/Input";
import { useUpdatePersonalization } from "../../../hooks/useProfile";

const DurationLogSetting = ({ durationMonth: initialDuration }) => {
  const setDuration = useProfileStore((state) => state.setDuration);
  const [durationMonth, setDurationMonth] = useState(initialDuration || "");
  const { mutate, isIdle } = useUpdatePersonalization();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!durationMonth) return;
    mutate({
      duration_month: durationMonth,
    });
    setTimeout(() => {
      setDuration();
    }, 500);
  };

  const isFormValid = durationMonth !== "";

  return (
    <div className="z-90 bg-white/10 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-5">
      <Card
        className="flex flex-col gap-4 py-4 w-full lg:w-[40%]"
        boxShadowActive={true}
        variant="white"
        size="full"
      >
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <Timer size={15} className="text-gray-700" />
            <p className="flex-1 text-h5 font-medium">Durasi Pengobatan</p>
            <X size={20} onClick={() => setDuration()} />
          </div>

          <div className="py-2">
            <Input
              placeholder="Bulan"
              variant="white"
              onChange={(e) => setDurationMonth(e.target.value)}
              type="number"
              value={durationMonth}
            />
          </div>

          <div className="flex text-h6 gap-2">
            <Button variant="gray" className="flex-1 py-2">
              Batal
            </Button>
            <Button variant="primary" className="flex-1" type="submit" disabled={!isFormValid} onClick={handleSubmit}>
              {isIdle ? "Simpan" : "Menyimpan..."}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default DurationLogSetting;
