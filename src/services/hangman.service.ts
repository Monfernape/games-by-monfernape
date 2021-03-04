import { get } from "./request.service";
import { RANDOM_WORD_API_BASE_URL } from "../constants";
import { IRandomWord } from "../models";

export const getRandomWord = (): Promise<IRandomWord[]> => {
  return get<IRandomWord[]>(RANDOM_WORD_API_BASE_URL);
};
