import { IShowFiltered } from "interfaces";
import { ChevronLeftCircle } from "lucide-react";

type args = {
  highlightedShow: IShowFiltered | null;
  setHighlightedShow: Function;
};

export default function ShowHighlighted({
  highlightedShow,
  setHighlightedShow,
}: args) {
  return (
    <div className="sticky">
      <ChevronLeftCircle
        onClick={() =>
          setHighlightedShow({
            type: "unset",
            show: null,
          })
        }
      />
      <h3>{highlightedShow?.name}</h3>
      <img src={highlightedShow?.image} alt="" />
    </div>
  );
}
