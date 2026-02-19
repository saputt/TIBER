import React, { useState } from "react";
import FormPersonalization from "../../../components/organism/FormPersonalization";
import DateTrigger from "../../../components/atoms/DateTrigger";
import DatePicker from "../../../components/organism/DatePicker/DatePicker";
import { formatDateID } from "../../../utils/dateUtils";
import { useOnboardingStore } from "../../../store/useOnboardingStore";

const FormStartDate = () => {
  const setFormData = useOnboardingStore((state) => state.setFormData);
  const startDate = useOnboardingStore(
    (state) => state.formData?.personalization?.start_date
  );

  const [showDatePicker, setShowDatePicker] = useState(false);

  const formattedDate = startDate ? formatDateID(startDate) : "";

  return (
    <FormPersonalization
      title="Kapan Anda memulai pengobatan"
      description="Ini membantu kami menghitung progres perjalanan pengobatan Anda."
      info="Tahukah Anda? Pengobatan TBC biasanya berlangsung 6 - 8 bulan. Konsistensi minum obat setiap hari sangat penting untuk kesembuhan total."
    >
      <div className="flex flex-col gap-1.5">
        <span className="text-h4 font-inter">Tanggal Mulai Pengobatan</span>

        <DateTrigger
          value={formattedDate}
          placeholder="Pilih Tanggal Mulai"
          onClick={() => setShowDatePicker(true)}
        />
      </div>

      <DatePicker
        isOpen={showDatePicker}
        onClose={() => setShowDatePicker(false)}
        onSelectDate={(date) => setFormData("personalization", { start_date: date })}
        initialDate={startDate}
      />
    </FormPersonalization>
  );
};

export default FormStartDate;
