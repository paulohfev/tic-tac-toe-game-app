import React, { useEffect, useState } from 'react';
import styles from './Square.module.css';

type Props = {
  board: string[][];
  isPlayerOneNext: boolean;
  placement: number[];
  setBoard: (T: string[][]) => void;
  setIsPlayerOneNext: (T: boolean) => void;
}

const Square: React.FC<Props> = ({ board, placement, setBoard, setIsPlayerOneNext, isPlayerOneNext }) => {
  const [rowIndex, columnIndex] = placement;
  const [value, setValue] = useState(board[rowIndex][columnIndex]);
  const newValue = isPlayerOneNext ? 'X' : 'O';

  useEffect(() => {
    setValue(board[rowIndex][columnIndex]);
  }, [board[rowIndex][columnIndex]]);

  const handleClick = () => {
    setIsPlayerOneNext(!isPlayerOneNext);
    setValue(newValue);

    const updatedBoard = [...board];
    updatedBoard[rowIndex][columnIndex] = newValue;
    setBoard(updatedBoard);
  }

  return (
    <div className={styles.wrapper} onClick={() => handleClick()}>
      {value}
    </div>
  );
};

export default Square;
