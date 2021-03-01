import React from "react";
import { BoardItem } from "../../models";
import { Button } from "@chakra-ui/react";
interface IProps {
  mark: BoardItem;
  handleClick: (item: BoardItem) => void;
}

export const Square: React.FC<IProps> = ({ mark, handleClick }) => (
  <Button
    variant={"outline"}
    size={"lg"}
    colorScheme={"teal"}
    width={["33%"]}
    onClick={() => !mark.signature && handleClick(mark)}
  >
    {mark.signature}
  </Button>
);
