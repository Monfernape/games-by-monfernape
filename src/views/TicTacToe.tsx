import React from "react";
import { Flex, Box, Button, Heading, Text } from "@chakra-ui/react";
import { Board } from "../components";
import { PLAYER_I, PLAYER_II, WinningPatterns } from "../constants";
import { BoardItem } from "../models";

export const TicTacToe: React.FC = () => {
  const [currentPlayer, setCurrentPlayer] = React.useState<string>(PLAYER_I);
  const [turn, setTurn] = React.useState<number>(1);
  const [isGameOver, setGameStatus] = React.useState<boolean>(false);
  const [winner, setWinner] = React.useState<BoardItem | null>(null);
  const [restartGame, setRestartGame] = React.useState<boolean>(false);
  const [isGameDraw, setGameDraw] = React.useState<boolean>(false);

  const moveToNextTurn = (board: BoardItem[]) => {
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

  const getWinner = (board: BoardItem[]): BoardItem | null => {
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

  const handleWinner = (winner: BoardItem) => {
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
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Heading as={"h1"}>Tic Tac Toe</Heading>
        <Board
          player={currentPlayer}
          nextTurn={moveToNextTurn}
          isGameOver={isGameOver}
          restartGame={restartGame}
        />
      </Flex>

      {winner && (
        <Box>
          <Text>{winner.playedBy} Won. Press Reset To Restart The Game</Text>
          <Button onClick={() => resetBoard()}>Reset</Button>
        </Box>
      )}
      {isGameDraw && (
        <Box>
          <Text>Game end up in draw. Press Reset To Restart The Game</Text>
          <Button onClick={() => resetBoard()}>Reset</Button>
        </Box>
      )}
    </React.Fragment>
  );
};
