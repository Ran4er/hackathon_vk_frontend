import React, { useState } from 'react';

interface ColorSwapperProps {
  buttonText: string;
  colorbg: string;
  colortext: string;
}

const ColorSwapper_for1: React.FC<ColorSwapperProps> = ({ buttonText, colorbg, colortext }) => {
  const [isSwapped, setIsSwapped] = useState<boolean>(false);

  const toggleColors = () => {
    setIsSwapped(prev => !prev);
  };

  return (
    <button
      onClick={toggleColors}
      className='px-3 py-1 rounded-full'
      style={{
        backgroundColor: isSwapped ? colortext : colorbg,
        color: isSwapped ? colorbg : colortext // Assuming text color remains white on color2
      }}
    >
      {buttonText}
    </button>
  );
};

export default ColorSwapper_for1;
