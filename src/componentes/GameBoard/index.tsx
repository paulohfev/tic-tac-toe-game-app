import React, { useEffect, useState } from 'react';
import Square from '../Square';
import { Player } from '../../enums/Player';
import { PlayerSymbol } from '../../enums/PlayerSymbol';
import { Board } from '../../types/board';
import styles from './GameBoard.module.css';

const GameBoard: React.FC = () => {
  const boardInitialState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  const [board, setBoard] = useState<Board>(boardInitialState);
  const [isPlayerOneNext, setIsPlayerOneNext] = useState(true);
  const [winner, setWinner] = useState<string | Player>('None');

  const checkWinningCondition = (board: Board, symbol: string): boolean => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === symbol && board[i][1] === symbol && board[i][2] === symbol) {
        return true;
      }
    }
  
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol) {
        return true;
      }
    }
  
    // Check diagonals
    if (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) {
      return true;
    }
  
    if (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol) {
      return true;
    }
  
    return false;
  };

  useEffect(() => {
    if (checkWinningCondition(board, PlayerSymbol.X)) {
      setWinner(Player.One)
    } else if (checkWinningCondition(board, PlayerSymbol.O)) {
      setWinner(Player.Two)
    } else {
      setWinner('None')
    }
  }, [board, checkWinningCondition])

  const resetBoard = () => {
    setBoard(boardInitialState);
    setIsPlayerOneNext(true);
  };

  return (
    <div className={styles["game-board"]}>
      <div className={styles.instructions}>
        Next player: <span>{isPlayerOneNext ? Player.One : Player.Two}</span>
      </div>
      <div className={styles.instructions}>Winner: <span>{winner}</span></div>
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

export default GameBoard;
