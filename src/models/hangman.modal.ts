export interface IAlphabet {
  letter: Letter;
  pressed: boolean;
}

export interface IRandomWord {
  word: string;
  definition: string;
  pronunciation: string;
}

export interface IGameWord {
  letter: Letter;
  guessed: boolean;
}

export type Letter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";
