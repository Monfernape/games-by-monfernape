import React from "react";
import { ButtonGroup, Button, Flex } from "@chakra-ui/react";
import { Alphabet } from "../../constants";
import { IAlphabet, Letter } from "../../models";

interface IProps {
  isGameOver: boolean;
  onLetterSelection: (letter: Letter) => void;
  restartGame: boolean;
}

export const AlphabetBoard: React.FC<IProps> = ({
  onLetterSelection,
  isGameOver,
  restartGame
}) => {
  const [letters, setLetters] = React.useState<IAlphabet[]>(Alphabet);

  /**
   * useEffect triggers:
   * 1- Either number of remaining tries are zero
   * 2- Or user has guess the correct word
   */
  React.useEffect(() => {
    if (isGameOver)
      setLetters((previousLetterState) =>
        previousLetterState.map((l) => ({ ...l, pressed: true }))
      );
  }, [isGameOver]);

  /**
   * Resets the board
   */
  React.useEffect(() => {
    setLetters(Alphabet)
  }, [restartGame])

  /**
   * 
   * @param letter 
   * Updates the state of button, practically disabling them
   */
  const handleClick = (letter: Letter): void => {
    setLetters(
      letters.map((l) => (l.letter === letter ? { letter, pressed: true } : l))
    );
    onLetterSelection(letter);
  };

  return (
    <ButtonGroup spacing={6}>
      <Flex wrap={"wrap"} alignItems={"center"} justifyContent={"center"}>
        {letters.map(({ letter, pressed }) => (
          <Button
            key={letter}
            variant={"solid"}
            colorScheme={"teal"}
            size={"lg"}
            margin={"10px"}
            disabled={pressed}
            onClick={() => handleClick(letter)}
          >
            {letter}
          </Button>
        ))}
      </Flex>
    </ButtonGroup>
  );
};
