import ListItem from "components/list-item";
import { IShow, IShowFiltered } from "interfaces";

import "./index.css";

type args = {
  results: Array<IShow>;
  layout: string;
};

export default function List({ results, layout }: args) {
  if (!results.length) return <span>nothing to show</span>;
  const listItems = results.map(({ show }: any) => {
    const genres = show.genres.join(", ");
    const theShow: IShowFiltered = {
      name: show.name,
      rating: show.rating?.average,
      image: show.image?.medium,
      summary: show.summary,
      genres,
    };
    return <ListItem key={show.id} show={theShow} layout={layout} />;
  });
  return <ul>{listItems}</ul>;
}
