import React from "react";
import FilterButton from "./FilterButton";
import { VisisiblityFilter } from "./filterSlice";

export default function Footer(): JSX.Element {
  return (
    <div>
      <span>Show: </span>
      <FilterButton
        visisiblityFilter={VisisiblityFilter.ShowAll}
        text={"All"}
      />
      <FilterButton
        visisiblityFilter={VisisiblityFilter.ShowActive}
        text={"Active"}
      />
      <FilterButton
        visisiblityFilter={VisisiblityFilter.ShowCompleted}
        text={"Completed"}
      />
    </div>
  );
}
