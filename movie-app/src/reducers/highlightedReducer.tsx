import { IShowFiltered } from "interfaces";

type show = IShowFiltered | null;
type actionType = {
  type: string;
  show: show;
};

export default function highlightedReducer(
  state: show,
  action: actionType
): show {
  if (action.type === "set") return action.show;
  if (action.type === "unset") return null;
  return state;
}
