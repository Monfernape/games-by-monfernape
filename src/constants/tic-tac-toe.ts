import { BoardItem } from "../models"

export const PLAYER_I = "Player I";
export const PLAYER_II = "Player II";

export const WinningPatterns: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const BoardSettings: BoardItem[] = [
  {
    index: 1,
    playedBy: null,
    signature: null
  },
  {
    index: 2,
    playedBy: null,
    signature: null
  },
  {
    index: 3,
    playedBy: null,
    signature: null
  },
  {
    index: 4,
    playedBy: null,
    signature: null
  },
  {
    index: 5,
    playedBy: null,
    signature: null
  },
  {
    index: 6,
    playedBy: null,
    signature: null
  },
  {
    index: 7,
    playedBy: null,
    signature: null
  },
  {
    index: 8,
    playedBy: null,
    signature: null
  },
  {
    index: 9,
    playedBy: null,
    signature: null
  }
];
