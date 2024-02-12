import parse from "html-react-parser";
import { IShowFiltered } from "interfaces";

type args = { show: IShowFiltered };

export default function ListItem({ show }: args) {
  const rating = show.rating ? (
    <span>
      <strong>Rating: </strong>
      {show.rating}
    </span>
  ) : (
    <span>Unrated</span>
  );
  return (
    <li>
      <img src={show.image} alt="" />
      <div>
        <h2>{show.name}</h2>
        <p>{rating}</p>
        <p>{show.genres}</p>
        {parse(show.summary)}
      </div>
    </li>
  );
}
