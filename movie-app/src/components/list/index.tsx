import { useContext } from "react";
import ListItem from "components/list-item";
import { ShowsContext } from "contexts/ShowsContext";
import { IShow, IShowFiltered } from "interfaces";

import "./index.css";
import { SetHighlightedShowContext } from "contexts/HighlightedShowContext";

export default function List() {
  const results: IShow[] = useContext(ShowsContext);
  if (!results.length) return <h2>No shows yet...</h2>;

  const listItems = results.map(({ show }: any) => {
    const genres = show.genres.join(", ");
    const theShow: IShowFiltered = {
      id: show.id,
      name: show.name,
      rating: show.rating?.average,
      image: show.image?.medium,
      summary: show.summary,
      genres,
    };

    return <ListItem key={show.id} show={theShow} />;
  });
  return <ul>{listItems}</ul>;
}
