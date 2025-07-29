import { TrackType } from "@/sharedtypes/sharedTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  currentTrack: TrackType | null;
};

const initialState: initialStateType = {
  currentTrack: null,
};

const trackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
    },
  },
});

export const { setCurrentTrack } = trackSlice.actions;
export const trackSliceReducer = trackSlice.reducer;
