import React, { useState } from "react";
import Card from "../../../components/atoms/Card";
import { Timer, X, Calendar } from "lucide-react";
import Button from "../../../components/atoms/Button";
import DateTrigger from "../../../components/atoms/DateTrigger";
import DatePicker from "../../../components/organism/DatePicker/DatePicker";
import { formatDateID } from "../../../utils/dateUtils";
import { useProfileStore } from "../../../store/useProfileStore";
import { useUpdatePersonalization } from "../../../hooks/useProfile";

const StartDateSetting = ({ startDate }) => {
  const setStartDate = useProfileStore((state) => state.setStartDate);
  const [selectedDate, setSelectedDate] = useState(startDate || "");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsDatePickerOpen(false);
  };

  const isFormValid = selectedDate.trim() !== "";
  const { mutate, isIdle } = useUpdatePersonalization();

  const handleSubmit = () => {
    if (!selectedDate) return;

    const dateObj = new Date(selectedDate);
    const formattedDate = dateObj.toISOString().split("T")[0];
    mutate({
      start_date: formattedDate,
    });
    setTimeout(() => {
      setStartDate();
    }, 500);
  };

  return (
    <div className="z-90 bg-white/20 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-5">
      <Card
        className="flex flex-col gap-4 py-4 w-full lg:w-[40%]"
        boxShadowActive={true}
        variant="white"
        size="full"
      >
        <div className="flex gap-2">
          <Timer size={15} className="text-gray-700" />
          <p className="flex-1 text-h5 font-medium">Tanggal Mulai</p>
          <X
            size={20}
            onClick={() => setStartDate()}
            className="cursor-pointer"
          />
        </div>

        <DateTrigger
          value={selectedDate ? formatDateID(new Date(selectedDate)) : ""}
          placeholder="Atur tanggal mulai"
          onClick={() => setIsDatePickerOpen(true)}
          className="cursor-pointer"
        />

        <DatePicker
          isOpen={isDatePickerOpen}
          onClose={() => setIsDatePickerOpen(false)}
          onSelectDate={handleDateSelect}
          initialDate={selectedDate || new Date()}
        />

        <div className="flex text-h6 gap-2">
          <Button
            variant="gray"
            className="flex-1 py-2"
            onClick={() => setStartDate()}
          >
            Batal
          </Button>
          <Button variant="primary" className="flex-1" disabled={!isFormValid} onClick={handleSubmit}>
            {isIdle ? "Simpan" : "Menyimpan..."}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default StartDateSetting;
