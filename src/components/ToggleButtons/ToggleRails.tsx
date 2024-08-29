import React, { useState } from 'react';

interface ToggleButtonProps {
  initialState?: boolean;
  onToggle?: (state: boolean) => void;
}

const ToggleRails: React.FC<ToggleButtonProps> = ({ initialState = false, onToggle }) => {
  const [isToggled, setIsToggled] = useState(initialState);

  const handleToggle = () => {
    const newState = !isToggled;
    setIsToggled(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <button onClick={handleToggle}> 
        {isToggled ? 'Sim' : 'Não'}
    </button>
  );
};

export default ToggleRails;
