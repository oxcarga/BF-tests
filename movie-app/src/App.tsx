import { useState } from "react";
import Header from "components/header";
import Search from "components/search";
import List from "components/list";

import "App.css";

function App() {
  const [results, setResults] = useState([]);
  const [layout, setLayout] = useState("list");
  return (
    <>
      <Header />
      <Search
        results={results}
        setResults={setResults}
        layout={layout}
        setLayout={setLayout}
      />
      <main className={layout}>
        <article>
          <List results={results} layout={layout} />
        </article>
        <aside>{/* <TheShow /> */}</aside>
      </main>
    </>
  );
}

export default App;
