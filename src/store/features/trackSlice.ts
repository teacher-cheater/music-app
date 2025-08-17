import { initialStateType, TrackType } from "@/sharedtypes/sharedTypes";
import { applyFilters } from "@/utils/applyFilters";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: initialStateType = {
  currentTrack: null,
  isPlay: false,
  isShuffled: false,
  currentPlayList: [],
  originalPlayList: [],
  shuffledPlayList: [],
  curIndex: -1,
  allTracks: [],
  favoriteTracks: [],
  fetchError: null,
  fetchIsLoading: true,
  pagePlaylist: [],
  filteredTracks: [],
  filters: {
    author: [],
    year: [],
    genre: ["Рок музыка", "Электронная музыка", "Классическая музыка"],
  },
};

const trackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<TrackType>) => {
      state.currentTrack = action.payload;
    },
    setCurrentPlayList: (state, action: PayloadAction<TrackType[]>) => {
      state.originalPlayList = action.payload;
      state.currentPlayList = state.isShuffled
        ? [...action.payload].sort(() => Math.random() - 0.5)
        : action.payload;
    },
    setIsPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload;
    },

    setIsShuffled: (state, action: PayloadAction<boolean>) => {
      if (action.payload && !state.isShuffled) {
        state.shuffledPlayList = [...state.currentPlayList].sort(
          () => Math.random() - 0.5
        );
        state.currentPlayList = state.shuffledPlayList;
        state.curIndex = 0;
      } else if (!action.payload && state.isShuffled) {
        const currentTrackId = state.currentTrack?._id;
        state.currentPlayList = state.originalPlayList;

        state.curIndex = currentTrackId
          ? state.originalPlayList.findIndex(t => t._id === currentTrackId)
          : 0;
      }

      state.isShuffled = action.payload;
    },

    setShuffledPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.currentPlayList = action.payload;
      state.currentTrack = action.payload[0];
      state.isShuffled = true;
      state.curIndex = 0;
    },
    setNextTrack: state => {
      if (state.currentTrack) {
        state.curIndex = state.currentPlayList.findIndex(
          elem => elem._id === state.currentTrack?._id
        );
        if (
          state.curIndex === -1 ||
          state.curIndex === state.currentPlayList.length - 1
        )
          return;
        const nextIndexTrack = state.curIndex + 1;
        state.currentTrack = state.currentPlayList[nextIndexTrack];
      }
    },
    setPrevTrack: state => {
      if (state.currentTrack) {
        state.curIndex = state.currentPlayList.findIndex(
          elem => elem._id === state.currentTrack?._id
        );
        if (state.curIndex <= 0) return;
        const prevIndexTrack = state.curIndex - 1;
        state.currentTrack = state.currentPlayList[prevIndexTrack];
      }
    },
    setAllTracks: (state, action: PayloadAction<TrackType[]>) => {
      state.allTracks = action.payload;
    },
    setFavoriteTracks: (state, action: PayloadAction<TrackType[]>) => {
      state.favoriteTracks = action.payload;
    },
    addLikedTracks: (state, action: PayloadAction<TrackType>) => {
      state.favoriteTracks = [...state.favoriteTracks, action.payload];
    },
    removeLikedTracks: (state, action: PayloadAction<TrackType>) => {
      state.favoriteTracks = state.favoriteTracks.filter(
        track => track._id !== action.payload._id
      );
    },
    setFetchError: (state, action: PayloadAction<string>) => {
      state.fetchError = action.payload;
    },
    setFetchIsLoading: (state, action: PayloadAction<boolean>) => {
      state.fetchIsLoading = action.payload;
    },
    setFilterAuthor: (state, action: PayloadAction<string>) => {
      const author = action.payload;

      if (state.filters.author.includes(author)) {
        state.filters.author = state.filters.author.filter(el => el !== author);
      } else {
        state.filters.author = [...state.filters.author, author];
      }

      state.filteredTracks = applyFilters(state);
    },
    removeFilterAuthor: (state, action: PayloadAction<string>) => {
      state.filters.author = state.filters.author.filter(
        author => author !== action.payload
      );
    },
    setFilterYear: (state, action: PayloadAction<string>) => {
      if (state.filters.year.includes(action.payload)) {
        state.filters.year = state.filters.year.filter(
          y => y !== action.payload
        );
      } else {
        state.filters.year.push(action.payload);
      }
    },
    setFilterGenre: (state, action: PayloadAction<string>) => {
      const genres = action.payload;

      if (state.filters.genre.includes(genres)) {
        state.filters.genre = state.filters.genre.filter(g => g !== genres);
      } else {
        state.filters.genre.push(genres);
      }

      state.filteredTracks = applyFilters(state);
    },
    setPagePlaylist: (state, action) => {
      state.pagePlaylist = action.payload;
    },
  },
});

export const {
  setCurrentTrack,
  setIsPlay,
  setIsShuffled,
  setShuffledPlaylist,
  setCurrentPlayList,
  setNextTrack,
  setPrevTrack,
  setAllTracks,
  setFavoriteTracks,
  addLikedTracks,
  removeLikedTracks,
  setFetchError,
  setFetchIsLoading,
  setFilterAuthor,
  removeFilterAuthor,
  setFilterGenre,
  setFilterYear,
  setPagePlaylist,
} = trackSlice.actions;
export const trackSliceReducer = trackSlice.reducer;
