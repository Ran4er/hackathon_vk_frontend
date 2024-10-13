import { Button } from '@vkontakte/vkui';
import { FC, useState } from 'react';

interface ColorSwapperProps {
  buttonText: string;
  colorbg: string; // изначальный цвет бэкграунда
  colortext: string; // изначальный цвет текста
  classname_?: string;
  onClick: () => void;
  isSwapped: boolean;
}



const ColorSwapper: FC<ColorSwapperProps> = ({
  buttonText,
  colorbg, 
  colortext,
  classname_,
  onClick,
  isSwapped,
  }) => {
  

  return (
      <Button 
        mode = "secondary"
        height={29}
        width={185}
        onClick={onClick} 
        className={classname_}
        style={{
          backgroundColor: isSwapped ? colortext : colorbg,
          color: isSwapped ? colorbg : colortext,

          }}
            >
            {buttonText} 
        </Button>
  );
};

export default ColorSwapper;
