import { createContext } from "react";

export const LayoutContext = createContext<string>("");
export const SetLayoutContext = createContext<Function>(() => {});
