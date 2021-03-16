/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Flex,
  Button,
  CircularProgress,
  Heading,
  Container,
  Text,
  Box,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Letter, IRandomWord, IGameWord } from "../../models";
import { getRandomWord } from "../../services";
import { DEFAULT_NUMBER_OF_TRIES } from "../../constants"

interface IProps {
  usedLetters: Letter[];
  restartGame: boolean;
  onTriesFinish: () => void;
  onGameWinning: () => void
}

export const AnswerBox: React.FC<IProps> = ({
  usedLetters,
  onTriesFinish,
  restartGame,
  onGameWinning
}) => {
  const [word, setWord] = React.useState<IGameWord[]>([]);
  const [randomWord, setRandomWord] = React.useState<IRandomWord | null>(null);
  const [remainingTries, setRemainingTries] = React.useState<number>(DEFAULT_NUMBER_OF_TRIES);

  /**
   * Restarts the game and fetches a new word
   */
  React.useEffect(() => {
    setWord([])
    setRemainingTries(DEFAULT_NUMBER_OF_TRIES);
    setRandomWord(null)
    getWord();
  }, [restartGame])

  /**
   * Runs on mounting
   * Fetches random word from API
   */
  React.useEffect(() => {
    getWord()
  }, []);

  /**
   * Reveals the letter if match within the usedLetters
   * Runs everytime usedLetters is changed
   */
  React.useEffect(() => {
    setWord((previousWordState) =>
      previousWordState.map((x) =>
        usedLetters.includes(x.letter) ? { ...x, guessed: true } : x
      )
    );

    setRemainingTries(
      DEFAULT_NUMBER_OF_TRIES - usedLetters.filter((u) => !word.some((w) => w.letter === u)).length
    );
  }, [usedLetters]);

  /**
   * Runs when user is out of tries
   */
  React.useEffect(() => {
    if (remainingTries === 0) {
      onTriesFinish();
      setWord((previoiusWordState) =>
        previoiusWordState.map((w) => ({ ...w, guessed: true }))
      );
    }
  }, [remainingTries]);

  React.useEffect(() => {
    if(remainingTries > 0 && word.length && word.every(x => x.guessed === true)) onGameWinning()
  }, [word])

  const getWord = () => {
    getRandomWord()
    .then((response) => ({
      ...response[0],
      word: response[0].word.toUpperCase(),
    }))
    .then((response) => {
      setRandomWord(response);
      setWord(
        (response.word.split("") as Letter[]).map((x) => ({
          letter: x,
          guessed: false,
        }))
      );
    });
  }

  return (
    <Container>
      <Heading textAlign={"center"}>Hangman</Heading>
      <Flex alignItems={"center"} justifyContent={"center"} wrap={"wrap"}>
        {!randomWord ? (
          <CircularProgress isIndeterminate size={100} />
        ) : (
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            wrap={"wrap"}
          >
            <Box>
              {[0, 1, 2, 3, 4].map((x) => (
                <StarIcon
                  key={x}
                  color={remainingTries > x ? "gold" : "wheat"}
                />
              ))}
            </Box>
            <Box>
              {word.map(({ letter, guessed }, index) => (
                <React.Fragment key={index}>
                  <Button
                    variant={"outline"}
                    colorScheme={"teal"}
                    size={"lg"}
                    margin={"10px"}
                  >
                    {guessed ? letter : ""}
                  </Button>
                </React.Fragment>
              ))}
            </Box>
            <Box>
              <Text fontSize={"sm"}>Hint: {randomWord.definition}</Text>
            </Box>
          </Flex>
        )}
      </Flex>
    </Container>
  );
};
