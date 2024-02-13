import { SyntheticEvent } from "react";
import parse from "html-react-parser";
import { ChevronDown } from "lucide-react";
import { IShow, IShowFiltered } from "interfaces";

type args = {
  show: IShowFiltered;
  layout: string;
  setShowHighlighted: Function;
};

export default function ListItem({ show, layout, setShowHighlighted }: args) {
  const rating = show.rating ? (
    <span>
      <strong>Rating: </strong>
      {show.rating}
    </span>
  ) : (
    <span>Unrated</span>
  );

  const onReadMoreClick = (event: SyntheticEvent) => {
    const el = event.target as HTMLElement;
    const parentEl = el.parentElement as HTMLElement;
    parentEl.classList.toggle("visible");
  };

  return (
    <li>
      <img src={show.image} alt="" onClick={() => setShowHighlighted(show)} />
      <div>
        <h2 onClick={() => setShowHighlighted(show)}>{show.name}</h2>
        <p>{rating}</p>
        <p>{show.genres}</p>
        <div className="summary">
          {parse(show.summary || "")}
          {layout === "grid" && (
            <button onClick={onReadMoreClick}>
              <ChevronDown />
            </button>
          )}
        </div>
      </div>
    </li>
  );
}
