import { createContext } from "react";
import { IShow } from "interfaces";

export const ShowsContext = createContext<IShow[]>([]);
export const SetShowsContext = createContext<Function>(() => {});
