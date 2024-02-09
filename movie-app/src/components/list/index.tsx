import * as DOMPurify from "dompurify";
import ListItem from "../list-item";
import { IShow, IShowFiltered } from "../../interfaces";

type args = {
  results: Array<IShow>;
};

export default function List({ results }: args) {
  if (!results.length) return <span>nothing to show</span>;
  const listItems = results.map(({ show }: any) => {
    const rating = show.rating.average ? (
      <span>
        <strong>Rating:</strong> {show.rating.average}
      </span>
    ) : (
      "Unrated"
    );
    const genres = show.genres.join(", ");
    const summary = DOMPurify.sanitize(show.summary);
    const theShow: IShowFiltered = {
      name: show.name,
      rating: show.rating?.average,
      image: show.image?.medium,
      genres,
      summary,
    };
    return <ListItem key={show.id} show={theShow} />;
  });
  return <ul>{listItems}</ul>;
}
