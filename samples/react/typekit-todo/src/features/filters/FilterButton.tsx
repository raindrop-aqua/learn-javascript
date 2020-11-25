import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { setVisiblityFilter, VisisiblityFilter } from "./filterSlice";

interface FilterButtonProps {
  visisiblityFilter: VisisiblityFilter;
  text: string;
}

export default function FilterButton({
  visisiblityFilter,
  text,
}: FilterButtonProps): JSX.Element {
  const dispatch = useDispatch();
  const currentVisisiblityFilter = useSelector(
    (state: RootState) => state.visiblityFilter
  );

  return (
    <button
      disabled={currentVisisiblityFilter === visisiblityFilter}
      onClick={() => dispatch(setVisiblityFilter(visisiblityFilter))}
    >
      {text}
    </button>
  );
}
