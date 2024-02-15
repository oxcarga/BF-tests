import ListItem from "components/list-item";
import { IShow, IShowFiltered } from "interfaces";

import "./index.css";

type args = {
  results: Array<IShow>;
  layout: string;
  setHighlightedShow: Function;
};

export default function List({ results, layout, setHighlightedShow }: args) {
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

    return (
      <ListItem
        key={show.id}
        show={theShow}
        layout={layout}
        setHighlightedShow={setHighlightedShow}
      />
    );
  });
  return <ul>{listItems}</ul>;
}
