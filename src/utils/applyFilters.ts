import { initialStateType, TrackType } from "@/sharedtypes/sharedTypes";

export const applyFilters = (state: initialStateType): TrackType[] => {
  const { author, year, genre } = state.filters;
  let filteredPlaylist = state.pagePlaylist;
  const searchLower = state.searchQuery?.toLowerCase() || "";

  if (searchLower) {
    filteredPlaylist = filteredPlaylist.filter(
      track =>
        track.name.toLowerCase().includes(searchLower) ||
        track.author.toLowerCase().includes(searchLower) ||
        track.genre.some(genre => genre.toLowerCase().includes(searchLower))
    );
  }

  if (author.length) {
    filteredPlaylist = filteredPlaylist.filter(track =>
      state.filters.author.includes(track.author)
    );
  }

  if (year) {
    filteredPlaylist = filteredPlaylist.filter(track => {
      const trackYear = new Date(track.release_date).getFullYear().toString();
      return trackYear === state.filters.year;
    });
  }

  if (genre.length) {
    filteredPlaylist = filteredPlaylist.filter(track =>
      state.filters.genre.some(el => track.genre.includes(el))
    );
  }

  return filteredPlaylist;
};
