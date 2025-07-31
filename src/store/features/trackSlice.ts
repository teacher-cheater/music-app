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
    },
    setIsPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload;
    },
    setNextTrack: state => {
      if (state.currentTrack) {
        const curIndex = state.playList.findIndex(
          elem => elem._id === state.currentTrack?._id
        );
        if (curIndex === -1 || curIndex === state.playList.length - 1) return;
        const nextIndexTrack = curIndex + 1;
        state.currentTrack = state.playList[nextIndexTrack];
      }
    },
    setPrevTrack: state => {
      if (state.currentTrack) {
        const curIndex = state.playList.findIndex(
          elem => elem._id === state.currentTrack?._id
        );
        if (curIndex <= 0) return;
        const prevIndexTrack = curIndex - 1;
        state.currentTrack = state.playList[prevIndexTrack];
      }
    },
  },
});

export const {
  setCurrentTrack,
  setIsPlay,
  setCurrentPlayList,
  setNextTrack,
  setPrevTrack,
} = trackSlice.actions;
export const trackSliceReducer = trackSlice.reducer;
