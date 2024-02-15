import { useEffect, useMemo, useReducer, useState } from "react";
import Header from "components/header";
import Search from "components/search";
import List from "components/list";
import ShowHighlighted from "components/show-highlight";
import showsReducer from "reducers/showsReducer";

import "App.css";
import highlightedReducer from "reducers/highlightedReducer";

function App() {
  const [shows, setShows] = useReducer(showsReducer, []);
  const [highlightedShow, setHighlightedShow] = useReducer(
    highlightedReducer,
    null
  );
  const [layout, setLayout] = useState("list");

  useEffect(() => {
    // do not reset the highlighted if highlighted show is inside shows array
    if (shows.find(item => item.show.id === highlightedShow?.id)) {
      return;
    }
    setHighlightedShow({
      type: "unset",
      show: null,
    });
  }, [shows]);

  const mainClasses = useMemo(() => {
    const showVisible = highlightedShow ? "show-highlighted" : "";
    return `${layout} ${showVisible}`;
  }, [layout, highlightedShow]);

  return (
    <>
      <Header />
      <Search
        results={shows}
        setResults={setShows}
        layout={layout}
        setLayout={setLayout}
      />
      <main className={mainClasses}>
        <article>
          <List
            results={shows}
            layout={layout}
            setHighlightedShow={setHighlightedShow}
          />
        </article>
        <aside>
          <ShowHighlighted
            highlightedShow={highlightedShow}
            setHighlightedShow={setHighlightedShow}
          />
        </aside>
      </main>
    </>
  );
}

export default App;
