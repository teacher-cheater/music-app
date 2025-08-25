import { initialStateType, TrackType } from "@/sharedtypes/sharedTypes";

export const applyFilters = (state: initialStateType): TrackType[] => {
  const { author, year, genre } = state.filters;
  const searchLower = state.searchQuery?.toLowerCase() || "";
  
  // 1. Всегда начинаем со ВСЕХ треков страницы
  let filteredPlaylist = state.allTracks;

  // 2. Если нет поиска и нет фильтров - возвращаем все треки
  if (!searchLower && !author.length && !year && !genre.length) {
    return filteredPlaylist;
  }

  // 3. Сначала ПОИСК (если есть поисковый запрос)
  if (searchLower) {
    filteredPlaylist = filteredPlaylist.filter(
      track =>
        track.name.toLowerCase().includes(searchLower) ||
        track.author.toLowerCase().includes(searchLower) ||
        (track.genre && track.genre.some(g => 
          g.toLowerCase().includes(searchLower)
        ))
    );
  }

  // 4. Затем ФИЛЬТРЫ (если есть фильтры)
  if (author.length) {
    filteredPlaylist = filteredPlaylist.filter(track =>
      author.includes(track.author)
    );
  }

  if (year) {
    filteredPlaylist = filteredPlaylist.filter(track => {
      if (!track.release_date) return false;
      const trackYear = new Date(track.release_date).getFullYear().toString();
      return trackYear === year;
    });
  }

  if (genre.length) {
    filteredPlaylist = filteredPlaylist.filter(track =>
      genre.some(filterGenre => track.genre.includes(filterGenre))
    );
  }

  return filteredPlaylist;
};