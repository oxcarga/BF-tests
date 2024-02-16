import { SyntheticEvent, useContext } from "react";
import parse from "html-react-parser";
import { ChevronDown } from "lucide-react";
import { IShowFiltered } from "interfaces";
import { LayoutContext } from "contexts/LayoutContext";
import { SetHighlightedShowContext } from "contexts/HighlightedShowContext";

type args = {
  show: IShowFiltered;
};

export default function ListItem({ show }: args) {
  const setHighlightedShow = useContext(SetHighlightedShowContext);
  const layout = useContext(LayoutContext);
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
      <img
        src={show.image}
        alt=""
        onClick={() =>
          setHighlightedShow({
            type: "set",
            show,
          })
        }
      />
      <div>
        <h2
          onClick={() =>
            setHighlightedShow({
              type: "set",
              show,
            })
          }
        >
          {show.name}
        </h2>
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
