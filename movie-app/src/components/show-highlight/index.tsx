import { IShowFiltered } from "interfaces";
import { ChevronLeftCircle } from "lucide-react";

type args = {
  showHighlighted: IShowFiltered | null;
  setShowHighlighted: Function;
};

export default function ShowHighlighted({
  showHighlighted,
  setShowHighlighted,
}: args) {
  return (
    <div className="sticky">
      <ChevronLeftCircle onClick={() => setShowHighlighted(null)} />
      <h3>{showHighlighted?.name}</h3>
      <img src={showHighlighted?.image} alt="" />
    </div>
  );
}
