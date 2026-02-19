import { Calendar, X } from "lucide-react";
import React, { useState } from "react";
import Card from "../../../components/atoms/Card";
import Button from "../../../components/atoms/Button";
import { useProfileStore } from "../../../store/useProfileStore";
import DatePicker from "../../../components/organism/DatePicker/DatePicker";
import { formatDateID } from "../../../utils/dateUtils";
import { useUpdatePersonalization } from "../../../hooks/useProfile";

const ManageControl = ({ controlDate }) => {
  const setControl = useProfileStore((state) => state.setControl);
  const [selectedDate, setSelectedDate] = useState(controlDate || "");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsDatePickerOpen(false);
  };

  const { mutate, isIdle } = useUpdatePersonalization();

  const handleSubmit = () => {
    if (!selectedDate) return;

    const dateObj = new Date(selectedDate);
    const formattedDate = dateObj.toISOString().split("T")[0];
    mutate({
      next_checkup_date: formattedDate,
    });
    setTimeout(() => {
      setControl();
    }, 500);
  };

  return (
    <div className="h-screen w-full bg-white/10 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-5 z-50">
      <Card
        className="flex flex-col gap-3 py-4 w-full lg:w-[40%]"
        boxShadowActive={true}
        variant="white"
      >
        <div className="flex gap-2">
          <Calendar size={15} className="text-dark-purple" />
          <h5 className="text-h5 flex-1">Pengingat Kontrol Dokter</h5>
          <X
            size={25}
            onClick={() => setControl()}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-2 py-2">
          <h5 className="text-h5 font-medium">Tanggal kontrol selanjutnya</h5>

          <div
            onClick={() => setIsDatePickerOpen(true)}
            className="border-1 border-gray-400 rounded-lg px-2.5 py-2.5 text-h5 font-inter cursor-pointer text-black"
          >
            {selectedDate
              ? formatDateID(new Date(selectedDate))
              : "Pilih Tanggal"}
          </div>

          <DatePicker
            isOpen={isDatePickerOpen}
            onClose={() => setIsDatePickerOpen(false)}
            onSelectDate={handleDateSelect}
            initialDate={selectedDate ? new Date(selectedDate) : new Date()}
          />
        </div>
        <div className="flex text-h6 gap-2">
          <Button
            variant="gray"
            className="flex-1 py-2"
            onClick={() => setControl()}
          >
            Batal
          </Button>
          <Button variant="primary" className="flex-1" onClick={handleSubmit}>
            {isIdle ? "Simpan" : "Sedang Simpan..."}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ManageControl;
