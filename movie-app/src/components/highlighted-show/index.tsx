import { useContext } from "react";
import { ChevronLeftCircle } from "lucide-react";
import { IShowFiltered } from "interfaces";
import {
  HighlightedShowContext,
  SetHighlightedShowContext,
} from "contexts/HighlightedShowContext";

export default function HighlightedShow() {
  const highlightedShow: IShowFiltered | null = useContext(
    HighlightedShowContext
  );
  const setHighlightedShow: Function = useContext(SetHighlightedShowContext);
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
