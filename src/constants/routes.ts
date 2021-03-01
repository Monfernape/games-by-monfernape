import { Home, TicTacToe, Hangman } from "../views";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/tic-tac-toe",
    component: TicTacToe,
    exact: true,
  },
  {
    path: "/hangman",
    component: Hangman,
    exact: true,
  },
];

export const links = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/tic-tac-toe",
    label: "Tic Tac Toe",
  },
  {
    path: "/hangman",
    label: "Hangman",
  },
];
