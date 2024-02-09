import * as DOMPurify from "dompurify";
import ListItem from "../list-item";

export default function List({ results = [] }: any) {
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
    return (
      <ListItem
        key={show.id}
        image={show.image?.medium}
        name={show.name}
        genres={genres}
        rating={rating}
        summary={summary}
      />
    );
  });
  return <ul>{listItems}</ul>;
}
