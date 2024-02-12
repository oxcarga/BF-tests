import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { LayoutList, LayoutGrid } from "lucide-react";
import { IShow } from "interfaces";
import "./index.css";

type args = {
  results: Array<IShow>;
  setResults: Function;
  layout: string;
  setLayout: Function;
};

export default function Search({
  results,
  setResults,
  layout,
  setLayout,
}: args) {
  const [query, setQuery] = useState("");

  /**
   *
   */
  const gotResults = useMemo(() => {
    return results && results.length > 0;
  }, [results]);

  /**
   *  Run search only when query changes using a timeout
   */
  useEffect(() => {
    if (!query) return setResults([]);
    const timeoutRef = setTimeout(() => doSearch(query), 500);
    return () => clearTimeout(timeoutRef);
  }, [query]);

  /**
   *
   */
  const doSearch = async (query: string) => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const items = await res.json();
    console.log(items);
    setResults(items);
  };

  /**
   *
   */
  function onChange(event: ChangeEvent) {
    setQuery((event.target as HTMLInputElement).value);
  }

  /**
   *
   */
  function onGridChange(event: React.MouseEvent<HTMLElement>) {
    const el = event.target as HTMLButtonElement;
    if (el.classList.contains("selected")) return;
    const l = el.getAttribute("data-layout");
    console.log(`LAYOUT: ${l}`);
    setLayout(el.getAttribute("data-layout"));
  }

  return (
    <div className="search">
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={onChange} />
      <button
        disabled={!gotResults}
        data-layout="list"
        className={layout === "list" ? "selected" : ""}
        onClick={onGridChange}
      >
        <LayoutList />
      </button>
      <button
        disabled={!gotResults}
        data-layout="grid"
        className={layout === "grid" ? "selected" : ""}
        onClick={onGridChange}
      >
        <LayoutGrid />
      </button>
    </div>
  );
}
