import React from "react";
import { Flex  } from "@chakra-ui/react"
import { Square } from "./Square";
import { BoardSettings, PLAYER_I } from "../../constants";
import { BoardItem } from "../../models"

interface IProps {
  player: string;
  nextTurn: (board: BoardItem[]) => void
  isGameOver: boolean;
  restartGame: boolean
}

export const Board: React.FC<IProps> = ({ player, nextTurn, isGameOver, restartGame }) => {
  const [board, setBoard] = React.useState<BoardItem[]>(BoardSettings);

  React.useEffect(() => {
    setBoard(BoardSettings);
  }, [restartGame]);

  const handleTurn = (item: BoardItem) => {
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
    <Flex isDisabled={isGameOver} width={"100%"}>
      {board.map((item) => <Square mark={item} handleClick={handleTurn} />)}
    </Flex>
  );
};


{/* <React.Fragment key={item.index}>
<Square mark={item} handleClick={handleTurn} />
{item.index % 3 === 0 && <br />}
</React.Fragment> */}