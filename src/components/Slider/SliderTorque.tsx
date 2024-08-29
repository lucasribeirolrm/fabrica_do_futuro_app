import React, { useState } from 'react';
import '../../style/Slider.css';

interface SliderProps {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
}

const SliderTorque: React.FC<SliderProps> = ({
  initialValue = 0,
  min = 0,
  max = 10,
  step = 1,
  onChange,
}) => {
  const [value, setValue] = useState<number>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const renderTicks = () => {
    const ticks = [];
    for (let i = min; i <= max; i += step) {
      ticks.push(
        <span key={i} className="tick" style={{ left: `${((i - min) / (max - min)) * 100}%` }}>
          {i}
        </span>
      );
    }
    return ticks;
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <div className="ticks-container">
        {renderTicks()}
      </div>
    </div>
  );
};

export default SliderTorque;