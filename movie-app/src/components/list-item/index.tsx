import { IShowFiltered } from "interfaces";

type args = { show: IShowFiltered };

export default function ListItem({ show }: args) {
  return (
    <li>
      <img src={show.image} alt="" />
      <h2>{show.name}</h2>
      <p>{show.rating}</p>
      <p>{show.genres}</p>
      <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
    </li>
  );
}
