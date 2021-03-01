import React from "react";
import { Container, ButtonGroup } from "@chakra-ui/react";
import { Square } from "./Square";
import { BoardSettings, PLAYER_I } from "../../constants";
import { BoardItem } from "../../models";

interface IProps {
  player: string;
  nextTurn: (board: BoardItem[]) => void;
  isGameOver: boolean;
  restartGame: boolean;
}

export const Board: React.FC<IProps> = ({
  player,
  nextTurn,
  isGameOver,
  restartGame,
}) => {
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
            signature: player === PLAYER_I ? "X" : "O",
          }
        : x
    );
    setBoard(updatedBoard);
    nextTurn(updatedBoard);
  };

  return (
    <ButtonGroup spacing={6} isDisabled={isGameOver}>
      <Container>
        {board.map((item) => (
          <Square mark={item} handleClick={handleTurn} />
        ))}
      </Container>
    </ButtonGroup>
  );
};
