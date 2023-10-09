import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_LOCATIONS_KEY } from "../../../utils/constants";
import { Location } from "../../../types";

const initialState = () => {
  const locationsString = localStorage.getItem(LOCAL_STORAGE_LOCATIONS_KEY);
  if (locationsString) {
    return { locations: JSON.parse(locationsString) as Location[] };
  }
  return { locations: [] as Location[] };
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.locations.push(action.payload.location);
      localStorage.setItem(
        LOCAL_STORAGE_LOCATIONS_KEY,
        JSON.stringify(state.locations),
      );
    },
    removeLocation: (state, action) => {
      state.locations = state.locations.filter(
        (location) =>
          location.lat !== action.payload.lat &&
          location.lon !== action.payload.lon,
      );
      localStorage.setItem(
        LOCAL_STORAGE_LOCATIONS_KEY,
        JSON.stringify(state.locations),
      );
    },
  },
});

export const { addLocation, removeLocation } = locationsSlice.actions;

export default locationsSlice.reducer;
