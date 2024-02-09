import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import "./index.css";

type args = {
  setResults: Function;
};

export default function Search({ setResults }: args) {
  const [query, setQuery] = useState("");

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
    setQuery((event.target as HTMLButtonElement).value);
  }

  return (
    <div className="search">
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={onChange} />
    </div>
  );
}
