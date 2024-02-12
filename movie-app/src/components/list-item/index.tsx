import { SyntheticEvent } from "react";
import parse from "html-react-parser";
import { ChevronDown } from "lucide-react";
import { IShowFiltered } from "interfaces";

type args = { show: IShowFiltered; layout: string };

export default function ListItem({ show, layout }: args) {
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
    console.log(el);
    console.log(parentEl);
    parentEl.classList.toggle("visible");
  };

  return (
    <li>
      <img src={show.image} alt="" />
      <div>
        <h2>{show.name}</h2>
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
