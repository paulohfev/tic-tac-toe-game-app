import React, { useState } from 'react';
import Square from '../Square';
import styles from './Board.module.css';

const Board: React.FC = () => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);
  const [isPlayerOneNext, setIsPlayerOneNext] = useState(true);

  const resetBoard = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]);
    setIsPlayerOneNext(true);
  };

  console.log(board)

  return (
    <div className={styles["game-board"]}>
      <div className={styles.instructions}>
        Next player: <span>{isPlayerOneNext ? 'Player 1' : 'Player 2'}</span>
      </div>
      <div className={styles.instructions}>Winner: <span>None</span></div>
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
