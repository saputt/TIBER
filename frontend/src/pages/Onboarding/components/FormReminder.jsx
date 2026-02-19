import React from "react";
import FormPersonalization from "../../../components/organism/FormPersonalization";
import TimePickerSlider from "./TimePickerSlider";
import { useOnboardingStore } from "../../../store/useOnboardingStore";

const FormReminder = () => {
  const timeCategory = useOnboardingStore(
    (state) => state.formData?.personalization?.time_category,
  );
  return (
    <FormPersonalization
      title="Jam berapa Anda ingin diingatkan minum obat?"
      description="Kami akan mengirimkan notifikasi harian pada jam yang Anda tentukan agar pengobatan tidak terputus"
      info="Tips: Pilih waktu yang sama setiap hari agar kadar obat di tubuh Anda tetap stabil. Konsistensi jam minum obat sangat menentukan kecepatan kesembuhan Anda."
    >
      <TimePickerSlider timeDay={timeCategory || "pagi"} />
    </FormPersonalization>
  );
};

export default FormReminder;
