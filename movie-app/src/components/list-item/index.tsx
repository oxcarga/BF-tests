export default function ListItem({
  theKey,
  image,
  name,
  genres,
  summary,
  rating,
}: any) {
  return (
    <li>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{rating}</p>
      <p>{genres}</p>
      <p dangerouslySetInnerHTML={{ __html: summary }}></p>
    </li>
  );
}
