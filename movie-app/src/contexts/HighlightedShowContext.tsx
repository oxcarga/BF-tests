import { createContext } from "react";
import { IShowFiltered } from "interfaces";

type highlightedType = IShowFiltered | null;

type actionType = {
  type: string;
  show: highlightedType;
};

export const HighlightedShowContext = createContext<highlightedType>(null);
export const SetHighlightedShowContext = createContext(
  (action: actionType) => {}
);
