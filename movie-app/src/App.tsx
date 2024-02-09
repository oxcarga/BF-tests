import { useState } from "react";
import Header from "./components/header";
import Search from "./components/search";
import List from "./components/list";

import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  return (
    <>
      <Header />
      <Search setResults={setResults} />
      <List results={results} />
    </>
  );
}

export default App;
