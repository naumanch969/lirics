import { createSlice, isPlain } from '@reduxjs/toolkit';



const playerSlice = createSlice({
  name: 'player',
  initialState:{
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListId: '',
  },
  reducers: {

    setActiveSong: (state, action) => { 
      const { song, data, index } = action.payload
      state.activeSong = song;
      state.currentIndex = index;
      state.isActive = true;
      if (data?.tracks?.hits) {           // if SongCard is in Search page
        state.currentSongs = data.tracks.hits;
      } else if (data?.properties) {
        state.currentSongs = data?.tracks;
      } else {
        state.currentSongs = data;
      }
    },

    nextSong: (state, action) => {
      const index = action.payload
      if (state.currentSongs[index]?.track) {
        state.activeSong = state.currentSongs[index]?.track;
      } else {
        state.activeSong = state.currentSongs[index];
      }
      state.currentIndex = index;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      const index = action.payload
      if (state.currentSongs[index]?.track) {
        state.activeSong = state.currentSongs[index]?.track;
      } else {
        state.activeSong = state.currentSongs[index];
      }
      state.currentIndex = index;
      state.isActive = true;
    },

    isSongPlaying: (state, action) => {
      const isPlaying = action.payload
      state.isPlaying = isPlaying;
    },

    selectGenreListId: (state, action) => {
      const genre = action.payload
      state.genreListId = genre;
    },

  },
});

export const { setActiveSong, nextSong, prevSong, isSongPlaying, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;
