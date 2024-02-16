import { useEffect, useMemo, useReducer, useState } from "react";
import Header from "components/header";
import Search from "components/search";
import List from "components/list";
import HighlightedShow from "components/highlighted-show";
import showsReducer from "reducers/showsReducer";
import highlightedReducer from "reducers/highlightedReducer";
import { SetShowsContext, ShowsContext } from "contexts/ShowsContext";
import { LayoutContext, SetLayoutContext } from "contexts/LayoutContext";
import {
  HighlightedShowContext,
  SetHighlightedShowContext,
} from "contexts/HighlightedShowContext";

import "App.css";

function App() {
  const [shows, setShows] = useReducer(showsReducer, []);
  const [highlightedShow, setHighlightedShow] = useReducer(
    highlightedReducer,
    null
  );
  const [layout, setLayout] = useState("list");

  /**
   *
   */
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

  /**
   *
   */
  const mainClasses = useMemo(() => {
    const showVisible = highlightedShow ? "show-highlighted" : "";
    return `${layout} ${showVisible}`;
  }, [layout, highlightedShow]);

  return (
    <>
      <Header />
      <ShowsContext.Provider value={shows}>
        <SetShowsContext.Provider value={setShows}>
          <LayoutContext.Provider value={layout}>
            <SetLayoutContext.Provider value={setLayout}>
              <Search />
            </SetLayoutContext.Provider>
          </LayoutContext.Provider>
        </SetShowsContext.Provider>
      </ShowsContext.Provider>
      <main className={mainClasses}>
        <article>
          <ShowsContext.Provider value={shows}>
            <LayoutContext.Provider value={layout}>
              <SetHighlightedShowContext.Provider value={setHighlightedShow}>
                <List />
              </SetHighlightedShowContext.Provider>
            </LayoutContext.Provider>
          </ShowsContext.Provider>
        </article>
        <aside>
          <HighlightedShowContext.Provider value={highlightedShow}>
            <SetHighlightedShowContext.Provider value={setHighlightedShow}>
              <HighlightedShow />
            </SetHighlightedShowContext.Provider>
          </HighlightedShowContext.Provider>
        </aside>
      </main>
    </>
  );
}

export default App;
