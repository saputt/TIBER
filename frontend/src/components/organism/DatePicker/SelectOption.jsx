import React, { useState } from "react";
import SelectionButton from "../../atoms/SelectionButton";
import { useOnboardingStore } from "../../../store/useOnboardingStore";

const SelectOption = ({ options }) => {
  const [isSelect, setIsSelect] = useState();
  const setFormData = useOnboardingStore((state) => state.setFormData);

  return (
    <div>
      <div>
        <h3 className="text-h3 text-primary font-medium">Pilih Rentang</h3>
      </div>

      <div className="flex flex-col px-4 py-2 gap-2">
        {options.map((option) => (
          <SelectionButton
            selectionName={option.name}
            key={option.name}
            isSelect={isSelect === option.name}
            onClick={() => {
              setIsSelect(option.name);
              setFormData("personalization", {
                control_freq_unit: option.id // Use ID not name for logic usually? FormControl uses id: "day" etc.
              });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectOption;
