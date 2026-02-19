import React from "react";
import InputSelect from "./InputSelect";
import Input from "../atoms/Input";

const InputLabel = ({
  label,
  variantInput = "input",
  variantLabel = "normal",
  variant,
  type = "text",
  placeholder,
  size = "full",
  className,
  onChange,
  value,
  onClick,
  defaultValue,
  endIcon,
  onEndIconClick,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      {variantLabel == "normal" && (
        <span className="lg:text-h4 text-h5 font-inter">{label}</span>
      )}
      {variantLabel == "medium" && (
        <span className="lg:text-h4 text-h5 font-medium font-inter">
          {label}
        </span>
      )}
      {variantInput == "select" && (
        <InputSelect
          variant={variant}
          placeholder={placeholder}
          onClick={onClick}
          defaultValue={defaultValue}
          onChange={onChange}
          value={value}
          type={type}
        />
      )}
      {variantInput == "input" && (
        <Input
          variant={variant}
          placeholder={placeholder}
          type={type}
          className={className}
          onChange={onChange}
          size={size}
          value={value}
          endIcon={endIcon}
          onEndIconClick={onEndIconClick}
        />
      )}
    </div>
  );
};

export default InputLabel;
