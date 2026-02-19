import React from "react";
import Input from "../atoms/Input";
import Select from "../atoms/Select";

const InputSelect = ({
  variant,
  placeholder,
  onClick,
  defaultValue,
  onChange,
  value,
  type,
}) => {
  return (
    <div className="flex justify-center items-center pr-2 border border-gray-400 rounded-lg focus:outline-black">
      <Input
        type={type}
        variant={variant}
        size="full"
        placeholder={placeholder}
        onChange={onChange}
        className="focus:outline-0"
        value={value}
      />
      <Select size="sm" onClick={onClick} defaultValue={defaultValue} />
    </div>
  );
};

export default InputSelect;
