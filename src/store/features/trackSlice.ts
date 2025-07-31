import { TrackType } from "@/sharedtypes/sharedTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  currentTrack: TrackType | null;
  isPlay: boolean;
  playList: TrackType[];
};

const initialState: initialStateType = {
  currentTrack: null,
  isPlay: false,
  playList: [],
};

const trackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
    },
    setCurrentPlayList: (state, action: PayloadAction<TrackType[]>) => {
      state.playList = action.payload;
      console.log(state, action.payload);
    },
    setIsPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload;
    },
  },
});

export const { setCurrentTrack, setIsPlay, setCurrentPlayList } =
  trackSlice.actions;
export const trackSliceReducer = trackSlice.reducer;
