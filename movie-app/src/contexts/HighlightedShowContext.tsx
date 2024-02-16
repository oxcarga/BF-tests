import { createContext } from "react";
import { IShowFiltered } from "interfaces";

type highlightedType = IShowFiltered | null;

export const HighlightedShowContext = createContext<highlightedType>(null);
export const SetHighlightedShowContext = createContext<Function>(() => {});
