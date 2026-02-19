const RangeSlider = ({ min, max, step, value, onChange, className, isReadOnly = false }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      className={`w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#4EA9A2] ${className}`}
      style={{
        background: `linear-gradient(to right, #4EA9A2 ${percentage}%, #E5E7EB ${percentage}%)`,
      }}
      readOnly={isReadOnly}
    />
  );
};

export default RangeSlider;
