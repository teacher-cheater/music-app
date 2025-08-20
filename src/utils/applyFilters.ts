import { initialStateType, TrackType } from "@/sharedtypes/sharedTypes";

export const applyFilters = (state: initialStateType): TrackType[] => {
  const { author, year, genre } = state.filters;
  let filteredPlaylist = state.pagePlaylist;

  if (!author.length && !year && !genre.length) {
    return state.pagePlaylist;
  }

  if (state.filters.author.length) {
    filteredPlaylist = filteredPlaylist.filter(track =>
      state.filters.author.includes(track.author)
    );
  }

  if (state.filters.year) {
    filteredPlaylist = filteredPlaylist.filter(track => {
      const trackYear = new Date(track.release_date).getFullYear().toString();
      return trackYear === state.filters.year;
    });
  }

  if (state.filters.genre.length) {
    filteredPlaylist = filteredPlaylist.filter(track =>
      state.filters.genre.some(el => track.genre.includes(el))
    );
  }

  return filteredPlaylist;
};
