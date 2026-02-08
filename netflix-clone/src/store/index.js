import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cardImage from "../assets/card.jpg";

// Mock movie data for development
const moviesData = [
  // Trending Now (0-10)
  { id: 1, title: "The Shawshank Redemption", image: cardImage, genre: "Drama" },
  { id: 2, title: "The Dark Knight", image: cardImage, genre: "Action" },
  { id: 3, title: "Inception", image: cardImage, genre: "Sci-Fi" },
  { id: 4, title: "The Matrix", image: cardImage, genre: "Sci-Fi" },
  { id: 5, title: "Pulp Fiction", image: cardImage, genre: "Crime" },
  { id: 6, title: "Forrest Gump", image: cardImage, genre: "Drama" },
  { id: 7, title: "The Godfather", image: cardImage, genre: "Crime" },
  { id: 8, title: "Interstellar", image: cardImage, genre: "Sci-Fi" },
  { id: 9, title: "Fight Club", image: cardImage, genre: "Drama" },
  { id: 10, title: "The Usual Suspects", image: cardImage, genre: "Crime" },

  // New Releases (10-20)
  { id: 11, title: "Oppenheimer", image: cardImage, genre: "Drama" },
  { id: 12, title: "Killers of the Flower Moon", image: cardImage, genre: "Drama" },
  { id: 13, title: "Barbie", image: cardImage, genre: "Comedy" },
  { id: 14, title: "Dune: Part Two", image: cardImage, genre: "Sci-Fi" },
  { id: 15, title: "Past Lives", image: cardImage, genre: "Drama" },
  { id: 16, title: "Insidious", image: cardImage, genre: "Horror" },
  { id: 17, title: "The Nun II", image: cardImage, genre: "Horror" },
  { id: 18, title: "Cocaine Bear", image: cardImage, genre: "Comedy" },
  { id: 19, title: "Fair Play", image: cardImage, genre: "Drama" },
  { id: 20, title: "Passages", image: cardImage, genre: "Drama" },

  // Blockbuster Movies (20-30)
  { id: 21, title: "Avatar", image: cardImage, genre: "Sci-Fi" },
  { id: 22, title: "Avengers: Endgame", image: cardImage, genre: "Action" },
  { id: 23, title: "Titanic", image: cardImage, genre: "Drama" },
  { id: 24, title: "Top Gun: Maverick", image: cardImage, genre: "Action" },
  { id: 25, title: "Spider-Man: No Way Home", image: cardImage, genre: "Action" },
  { id: 26, title: "The Lion King", image: cardImage, genre: "Animation" },
  { id: 27, title: "Frozen", image: cardImage, genre: "Animation" },
  { id: 28, title: "Jurassic World", image: cardImage, genre: "Action" },
  { id: 29, title: "The Avengers", image: cardImage, genre: "Action" },
  { id: 30, title: "Black Panther", image: cardImage, genre: "Action" },

  // Popular on Netflix (30-40)
  { id: 31, title: "Wednesday", image: cardImage, genre: "Drama" },
  { id: 32, title: "Stranger Things", image: cardImage, genre: "Drama" },
  { id: 33, title: "The Queen's Gambit", image: cardImage, genre: "Drama" },
  { id: 34, title: "Money Heist", image: cardImage, genre: "Drama" },
  { id: 35, title: "Squid Game", image: cardImage, genre: "Drama" },
  { id: 36, title: "The Crown", image: cardImage, genre: "Drama" },
  { id: 37, title: "Bridgerton", image: cardImage, genre: "Drama" },
  { id: 38, title: "Ozark", image: cardImage, genre: "Drama" },
  { id: 39, title: "Breaking Bad", image: cardImage, genre: "Drama" },
  { id: 40, title: "The Office", image: cardImage, genre: "Comedy" },

  // Action Movies (40-50)
  { id: 41, title: "John Wick", image: cardImage, genre: "Action" },
  { id: 42, title: "Mission: Impossible", image: cardImage, genre: "Action" },
  { id: 43, title: "Die Hard", image: cardImage, genre: "Action" },
  { id: 44, title: "Mad Max Fury Road", image: cardImage, genre: "Action" },
  { id: 45, title: "Fast & Furious", image: cardImage, genre: "Action" },
  { id: 46, title: "James Bond: No Time to Die", image: cardImage, genre: "Action" },
  { id: 47, title: "The Equalizer", image: cardImage, genre: "Action" },
  { id: 48, title: "Atomic Blonde", image: cardImage, genre: "Action" },
  { id: 49, title: "Red Notice", image: cardImage, genre: "Action" },
  { id: 50, title: "The Gentleman", image: cardImage, genre: "Action" },

  // Epics (50-60)
  { id: 51, title: "Gladiator", image: cardImage, genre: "Epic" },
  { id: 52, title: "Braveheart", image: cardImage, genre: "Epic" },
  { id: 53, title: "The Lord of the Rings", image: cardImage, genre: "Epic" },
  { id: 54, title: "Troy", image: cardImage, genre: "Epic" },
  { id: 55, title: "Kingdom of Heaven", image: cardImage, genre: "Epic" },
  { id: 56, title: "Ben-Hur", image: cardImage, genre: "Epic" },
  { id: 57, title: "The Great Wall", image: cardImage, genre: "Epic" },
  { id: 58, title: "300", image: cardImage, genre: "Epic" },
  { id: 59, title: "Aquaman", image: cardImage, genre: "Epic" },
  { id: 60, title: "The Mummy", image: cardImage, genre: "Epic" },
];

// Extract unique genres from movie data
const uniqueGenres = [...new Set(moviesData.map(movie => movie.genre))];

// Async thunk to get genres
export const getGenres = createAsyncThunk("netflix/getGenres", async () => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(uniqueGenres);
    }, 100);
  });
});

// Async thunk to fetch movies
export const fetchMovies = createAsyncThunk(
  "netflix/fetchMovies",
  async ({ genres, type }) => {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // Filter movies based on type if needed
        let filteredMovies = moviesData;

        // You can add filtering logic here based on type
        // For now, returning all movies
        resolve(filteredMovies);
      }, 100);
    });
  }
);

// Redux Slice for Netflix
const netflixSlice = createSlice({
  name: "netflix",
  initialState: {
    movies: [],
    genres: [],
    genresLoaded: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
        state.genresLoaded = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});

// Configure and export Redux store
export const store = configureStore({
  reducer: {
    netflix: netflixSlice.reducer,
  },
});

// Export movies data for direct access if needed
export { moviesData };
