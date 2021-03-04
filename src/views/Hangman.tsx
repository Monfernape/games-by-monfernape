import React from "react";
import { useToast, Button, Text, Container, Box, Flex } from "@chakra-ui/react";
import { AlphabetBoard, AnswerBox } from "../components";
import { Letter } from "../models";

export const Hangman: React.FC = () => {
  const [usedLetters, setUsedLetters] = React.useState<Letter[]>([]);
  const [isGameOver, setGameStatus] = React.useState(false);
  const [restartGame, setGameRestart] = React.useState<boolean>(false);
  const notification = useToast();

  const onLetterSelection = (letter: Letter) => {
    setUsedLetters([...usedLetters, letter]);
  };

  const onTriesFinish = () => {
    setGameStatus(true);
    notification({
      title: "Oops. Better Luck Next Time",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  };

  const onGameWinning = () => {
    setGameStatus(true);
    notification({
      title: "You Dawg!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  const resetGame = () => {
    setUsedLetters([]);
    setGameStatus(false);
    setGameRestart((previousRestartState) => !previousRestartState);
  };

  return (
    <Container>
      <AnswerBox
        usedLetters={usedLetters}
        onTriesFinish={onTriesFinish}
        restartGame={restartGame}
        onGameWinning={onGameWinning}
      />
      <AlphabetBoard
        onLetterSelection={onLetterSelection}
        isGameOver={isGameOver}
        restartGame={restartGame}
      />
      {isGameOver && (
        <Box>
          <Text textAlign={"center"}>Wanna Play More? Press Reset To Restart The Game</Text>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Button onClick={resetGame}>Reset</Button>
          </Flex>
        </Box>
      )}
    </Container>
  );
};
