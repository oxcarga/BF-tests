import { useMemo, useReducer, useState } from "react";
import Header from "components/header";
import Search from "components/search";
import List from "components/list";
import HighlightedShow from "components/highlighted-show";
import showsReducer from "reducers/showsReducer";
import { SetShowsContext, ShowsContext } from "contexts/ShowsContext";
import { LayoutContext, SetLayoutContext } from "contexts/LayoutContext";
import {
  HighlightedShowContext,
  SetHighlightedShowContext,
} from "contexts/HighlightedShowContext";
import { useHighlightedShow } from "hooks/useHighlighted";

import "App.css";

function App() {
  const [shows, setShows] = useReducer(showsReducer, []);
  const [layout, setLayout] = useState("list");
  const { highlightedShow, setHighlightedShow } = useHighlightedShow(shows);

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
