import { initialStateType, TrackType } from "@/sharedtypes/sharedTypes";

export const applyFilters = (state: initialStateType): TrackType[] => {
  let filteredPlaylist = state.pagePlaylist;

  if (state.filters.author.length) {
    filteredPlaylist = filteredPlaylist.filter(track =>
      state.filters.author.includes(track.author)
    );
  }

  if (state.filters.genre.length) {
    filteredPlaylist = filteredPlaylist.filter(track =>
      state.filters.genre.some(el => track.genre.includes(el))
    );
  }

  return filteredPlaylist;
};
