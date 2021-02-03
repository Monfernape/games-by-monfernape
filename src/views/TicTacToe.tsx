import React from "react";
import { PLAYER_I, PLAYER_II, WinningPatterns } from "../constants";
import { Board } from "../components";

export const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = React.useState(PLAYER_I);
  const [turn, setTurn] = React.useState(1);
  const [isGameOver, setGameStatus] = React.useState(false);
  const [winner, setWinner] = React.useState(null);
  const [restartGame, setRestartGame] = React.useState(false);
  const [isGameDraw, setGameDraw] = React.useState(false);

  const moveToNextTurn = (board) => {
    setCurrentPlayer((previousPlayer) =>
      previousPlayer === PLAYER_I ? PLAYER_II : PLAYER_I
    );
    const currentTurn = turn + 1;
    setTurn(currentTurn);
    if (currentTurn > 5) {
      const winner = getWinner(board);
      if (winner) handleWinner(winner);
      else if (currentTurn > 9 && !winner) handleGameEndInDraw();
    }
  };

  const getWinner = (board) => {
    let winner = null;
    for (const pattern of WinningPatterns) {
      const [a, b, c] = pattern;
      if (
        board[a]["signature"] &&
        board[a]["signature"] === board[b]["signature"] &&
        board[b]["signature"] === board[c]["signature"]
      ) {
        winner = board[a];
        break;
      }
    }
    return winner;
  };

  const handleWinner = (winner) => {
    setGameStatus(true);
    setWinner(winner);
  };

  const handleGameEndInDraw = () => {
    setGameDraw(true);
    setGameStatus(true);
  };

  const resetBoard = () => {
    setCurrentPlayer(PLAYER_I);
    setTurn(1);
    setGameStatus(false);
    setWinner(null);
    setGameDraw(false);
    setRestartGame(!restartGame);
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Monfernape's Tic Tac Toe</h1>
        <Board
          player={currentPlayer}
          nextTurn={moveToNextTurn}
          isGameOver={isGameOver}
          restartGame={restartGame}
        />
      </div>

      {winner && (
        <div>
          <p>{winner.playedBy} Won. Press Reset To Restart The Game</p>
          <button onClick={() => resetBoard()}>Reset</button>
        </div>
      )}
      {isGameDraw && (
        <div>
          <p>Game end up in draw. Press Reset To Restart The Game</p>
          <button onClick={() => resetBoard()}>Reset</button>
        </div>
      )}
    </React.Fragment>
  );
};
