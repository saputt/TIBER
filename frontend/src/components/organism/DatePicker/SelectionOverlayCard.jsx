import React, { useState } from "react";
import Card from "../../atoms/Card";
import SelectionButton from "../../../components/atoms/SelectionButton";
import { useOnboardingStore } from "../../../store/useOnboardingStore";
import { X } from "lucide-react";

const SelectionOverlayCard = ({ data }) => {
  const setFormData = useOnboardingStore((state) => state.setFormData);

  const freqUnit = useOnboardingStore(
    (state) => state.formData?.personalization?.control_freq_unit,
  );

  const setOverlay = useOnboardingStore((state) => state.setOverlay);

  return (
    <div className="h-screen w-full bg-white/20 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-5 z-999">
      <Card
        className="flex flex-col gap-3 py-4 w-70 "
        boxShadowActive={true}
        variant="white"
      >
        <div className="flex justify-between">
          <h3>Pilih Rentang</h3>
          <X size={20} onClick={() => setOverlay()} />
        </div>
        {data.map((data) => (
          <SelectionButton
            selectionName={data.name}
            isSelect={freqUnit == data.id}
            isBoarding={true}
            key={data.id}
            onClick={() => {
              setFormData("personalization", { control_freq_unit: data.id });
              setOverlay();
            }}
            className="py-2"
          />
        ))}
      </Card>
    </div>
  );
};

export default SelectionOverlayCard;
