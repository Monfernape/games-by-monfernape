import React from "react";
import { Square } from "./Square";
import { BoardSettings, PLAYER_I } from "../../constants";

export const Board = ({ player, nextTurn, isGameOver, restartGame }) => {
  const [board, setBoard] = React.useState(BoardSettings);

  React.useEffect(() => {
    setBoard(BoardSettings);
  }, [restartGame]);

  const handleTurn = (item) => {
    const updatedBoard = board.map((x) =>
      x.index === item.index && !x.playedBy && !x.signature
        ? {
            ...x,
            playedBy: player,
            signature: player === PLAYER_I ? "X" : "O"
          }
        : x
    );
    setBoard(updatedBoard);
    nextTurn(updatedBoard);
  };

  return (
    <div style={{ pointerEvents: isGameOver && "none" }}>
      {board.map((item) => (
        <React.Fragment key={item.index}>
          <Square mark={item} handleClick={handleTurn} />
          {item.index % 3 === 0 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};
