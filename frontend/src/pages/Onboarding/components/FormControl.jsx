import React, { useState } from "react";
import FormPersonalization from "../../../components/organism/FormPersonalization";
import Input from "../../../components/atoms/Input";
import InputLabel from "../../../components/molecules/InputLabel";
import SelectionOverlayCard from "../../../components/organism/DatePicker/SelectionOverlayCard";
import { useOnboardingStore } from "../../../store/useOnboardingStore";

const FormControl = () => {
  const isOverlay = useOnboardingStore((state) => state.isOverlay);
  const setOverlay = useOnboardingStore((state) => state.setOverlay);
  const data = [
    { name: "Hari", id: "day" },
    { name: "Minggu", id: "week" },
    { name: "Bulan", id: "month" },
  ];
  const freqValue = useOnboardingStore(
    (state) => state.formData?.personalization?.control_freq_value,
  );
  const freqUnit = useOnboardingStore(
    (state) => state.formData?.personalization?.control_freq_unit,
  );

  let nameDay = "";

  if (freqUnit === "day") {
    nameDay = "Hari";
  } else if (freqUnit === "week") {
    nameDay = "Minggu";
  } else if (freqUnit === "month") {
    nameDay = "Bulan";
  }

  const setFormData = useOnboardingStore((state) => state.setFormData);

  return (
    <FormPersonalization
      title="Seberapa sering jadwal kontrol Anda?"
      description="Kami akan membantu mengingatkan Anda satu hari sebelum jadwal kontrol tiba."
      info="Tahukah Anda? Kontrol rutin diperlukan dokter untuk memantau perkembangan kesehatan Anda dan menyesuaikan dosis obat jika diperlukan"
    >
      <InputLabel
        variantInput="select"
        placeholder="Contoh: 2 (Hari/Minggu/Bulan)"
        label="Rentang kontrol, Setiap:"
        defaultValue={nameDay || "Bulan"}
        onClick={() => setOverlay()}
        onChange={(e) =>
          setFormData("personalization", {
            control_freq_value: e.target.value,
            control_freq_unit: freqUnit || "month",
          })
        }
        value={freqValue || ""}
        type="number"
      />

      {isOverlay && <SelectionOverlayCard data={data} />}
    </FormPersonalization>
  );
};

export default FormControl;
