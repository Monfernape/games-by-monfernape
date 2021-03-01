import { Home, TicTacToe } from "../views";

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
];
