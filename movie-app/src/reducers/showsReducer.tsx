import { IShow } from "interfaces";

type actionType = {
  type: string;
  shows: IShow[];
};

export default function showsReducer(state: Array<IShow>, action: actionType) {
  if (action.type === "add") {
    return action.shows;
  }
  return [...state];
}
