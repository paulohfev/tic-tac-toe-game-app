import React, { useState } from 'react';
import Square from '../Square';
import styles from './Board.module.css';

const Board: React.FC = () => {
  const initialBoardState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];

  const [board, setBoard] = useState([
    ["", "X", ""],
    ["", "", ""],
    ["", "O", ""]
  ]);
  const [isPlayerOneNext, setIsPlayerOneNext] = useState(true);

  const resetBoard = () => {
    console.log('I was clicked')
    setBoard(initialBoardState)
  };

  return (
    <div className={styles["game-board"]}>
      <div id="statusArea" className={styles.instructions}>Next player: <span>X</span></div>
      <div id="winnerArea" className={styles.instructions}>Winner: <span>None</span></div>
      <button onClick={() => resetBoard()} className={styles.button}>Reset</button>
      <div className={styles.board}>
        <div className={styles["board-row"]}>
          <Square
            board={board}
            placement={[0, 0]}
            setBoard={setBoard}
            setIsPlayerOneNext={setIsPlayerOneNext}
            isPlayerOneNext={isPlayerOneNext}
          />
          <Square
            board={board}
            placement={[0, 1]}
            setBoard={setBoard}
            setIsPlayerOneNext={setIsPlayerOneNext}
            isPlayerOneNext={isPlayerOneNext}
          />
          <Square
            board={board}
            placement={[0, 2]}
            setBoard={setBoard}
            setIsPlayerOneNext={setIsPlayerOneNext}
            isPlayerOneNext={isPlayerOneNext}
          />
        </div>
        <div className={styles["board-row"]}>
          <Square
            board={board}
            placement={[1, 0]}
            setBoard={setBoard}
            setIsPlayerOneNext={setIsPlayerOneNext}
            isPlayerOneNext={isPlayerOneNext}
          />
          <Square
            board={board}
            placement={[1, 1]}
            setBoard={setBoard}
            setIsPlayerOneNext={setIsPlayerOneNext}
            isPlayerOneNext={isPlayerOneNext}
          />
          <Square
            board={board}
            placement={[1, 2]}
            setBoard={setBoard}
            setIsPlayerOneNext={setIsPlayerOneNext}
            isPlayerOneNext={isPlayerOneNext}
          />
        </div>
        <div className={styles["board-row"]}>
          <Square
            board={board}
            placement={[2, 0]}
            setBoard={setBoard}
            setIsPlayerOneNext={setIsPlayerOneNext}
            isPlayerOneNext={isPlayerOneNext}
          />
          <Square
            board={board}
            placement={[2, 1]}
            setBoard={setBoard}
            setIsPlayerOneNext={setIsPlayerOneNext}
            isPlayerOneNext={isPlayerOneNext}
          />
          <Square
            board={board}
            placement={[2, 2]}
            setBoard={setBoard}
            setIsPlayerOneNext={setIsPlayerOneNext}
            isPlayerOneNext={isPlayerOneNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
