export interface TrackType {
  _id: number;
  name: string;
  author: string;
  release_date: string;
  genre: string[];
  duration_in_seconds: number;
  album: string;
  logo: string | null;
  track_file: string;
  stared_user: number[];
}

export interface CategoryType {
  _id: number;
  name: string;
  items: number[];
  owner: number[];
}

export type initialStateType = {
  currentTrack: TrackType | null;
  isPlay: boolean;
  isShuffled: boolean;
  currentPlayList: TrackType[];
  originalPlayList: TrackType[];
  shuffledPlayList: TrackType[];
  curIndex: number;
  allTracks: TrackType[];
  favoriteTracks: TrackType[];
  fetchError: null | string;
  fetchIsLoading: boolean;
  pagePlaylist: TrackType[];
  filteredTracks: TrackType[];
  filters: {
    name: string;
    author: string[];
    year: string | null;
    genre: string[];
  };
  searchQuery: string;
};
