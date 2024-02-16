import { ChangeEvent, useContext, useEffect, useMemo, useState } from "react";
import { LayoutList, LayoutGrid } from "lucide-react";
import { SetShowsContext, ShowsContext } from "contexts/ShowsContext";
import { LayoutContext, SetLayoutContext } from "contexts/LayoutContext";
import searchShows from "apis/ShowsAPI";
import { IShow } from "interfaces";
import "./index.css";

export default function Search() {
  const results: IShow[] = useContext(ShowsContext);
  const setResults: Function = useContext(SetShowsContext);
  const layout: string = useContext(LayoutContext);
  const setLayout: Function = useContext(SetLayoutContext);
  const [query, setQuery] = useState<string>("");

  /**
   *
   */
  const areThereResults: boolean = useMemo(() => {
    return results && results.length > 0;
  }, [results]);

  /**
   *  Run search only when query changes using a timeout
   */
  useEffect(() => {
    if (!query)
      return setResults({
        type: "add",
        shows: [],
      });
    const timeoutRef = setTimeout(async () => {
      setResults({
        type: "add",
        shows: await searchShows(query),
      });
    }, 500);
    return () => clearTimeout(timeoutRef);
  }, [query, setResults]);

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
        disabled={!areThereResults}
        data-layout="list"
        className={layout === "list" ? "selected" : ""}
        onClick={onGridChange}
      >
        <LayoutList />
      </button>
      <button
        disabled={!areThereResults}
        data-layout="grid"
        className={layout === "grid" ? "selected" : ""}
        onClick={onGridChange}
      >
        <LayoutGrid />
      </button>
    </div>
  );
}
