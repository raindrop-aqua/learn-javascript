import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export enum VisisiblityFilter {
  ShowAll = "SHOW_ALL",
  ShowCompleted = "SHOW_COMPLETED",
  ShowActive = "SHOW_ACTIVE",
}

const filtersSlice = createSlice({
  name: "visiblityFilters",
  initialState: VisisiblityFilter.ShowAll,
  reducers: {
    setVisiblityFilter(state, action: PayloadAction<VisisiblityFilter>) {
      return action.payload;
    },
  },
});

export const { setVisiblityFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
