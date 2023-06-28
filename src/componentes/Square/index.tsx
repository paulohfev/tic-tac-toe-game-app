import React, { useState } from 'react';

type Props = {
  board: string[][];
  isPlayerOneNext: boolean;
  placement: number[];
  setBoard: (T: string[][]) => void;
  setIsPlayerOneNext: (T: boolean) => void;
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const Square: React.FC<Props> = ({ board, placement, setBoard, setIsPlayerOneNext, isPlayerOneNext }) => {
  const [value, setValue] = useState('');
  const [rowIndex, columnIndex] = placement;
  const newValue = isPlayerOneNext ? 'X' : 'O';

  const handleClick = () => {
    setIsPlayerOneNext(!isPlayerOneNext);
    setValue(newValue);
    board[rowIndex][columnIndex] = newValue;
    setBoard((prevState) => [...prevState])
  }

  return (
    <div
      className="square"
      onClick={() => handleClick()}
      style={squareStyle}
    >
      {value}
    </div>
  );
};

export default Square;
