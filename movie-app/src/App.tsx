import { useEffect, useMemo, useState } from "react";
import Header from "components/header";
import Search from "components/search";
import List from "components/list";
import ShowHighlighted from "components/show-highlight";
import { IShowFiltered } from "interfaces";

import "App.css";

function App() {
  const [results, setResults] = useState([]);
  const [layout, setLayout] = useState("list");
  const [showHighlighted, setShowHighlighted] = useState<IShowFiltered | null>(
    null
  );

  useEffect(() => {
    setShowHighlighted(null);
  }, [results]);

  const mainClasses = useMemo(() => {
    const showVisible = showHighlighted ? "show-highlighted" : "";
    return `${layout} ${showVisible}`;
  }, [layout, showHighlighted]);

  return (
    <>
      <Header />
      <Search
        results={results}
        setResults={setResults}
        layout={layout}
        setLayout={setLayout}
      />
      <main className={mainClasses}>
        <article>
          <List
            results={results}
            layout={layout}
            setShowHighlighted={setShowHighlighted}
          />
        </article>
        <aside>
          <ShowHighlighted
            showHighlighted={showHighlighted}
            setShowHighlighted={setShowHighlighted}
          />
        </aside>
      </main>
    </>
  );
}

export default App;
