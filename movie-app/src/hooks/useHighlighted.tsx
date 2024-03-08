import { useEffect, useReducer } from "react";
import { IShow } from "interfaces";
import highlightedReducer from "reducers/highlightedReducer";

export function useHighlightedShow(shows: IShow[]) {
  const [highlightedShow, setHighlightedShow] = useReducer(
    highlightedReducer,
    null
  );

  useEffect(() => {
    // do not reset the highlighted if highlighted show is inside shows array
    if (shows.find(item => item.show.id === highlightedShow?.id)) {
      return;
    }
    setHighlightedShow({
      type: "unset",
      show: null,
    });
  }, [shows, highlightedShow]);

  return { highlightedShow, setHighlightedShow };
}
