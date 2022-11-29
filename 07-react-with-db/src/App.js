import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAddMovie, setIsAddMovie] = useState(false);

  useEffect(() => {
    fetchMovieHandler();
  }, [isAddMovie]);

  const MOVIE_API_URL =
    "https://react-http-request-26266-default-rtdb.firebaseio.com/movies.json";
  const fetchMovieHandler = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const Movie_ID = "-NI3Na29cEvaj-IBeiII";
      const response = await fetch(MOVIE_API_URL);
      const data = await response.json();
      // const moviesData = data[Movie_ID];
      // console.log(data);

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      }

      // Setting the movie object according to our need
      // const transformedData = data.results.map((movie) => {
      //   return {
      //     id: movie.episode_id,
      //     title: movie.title,
      //     releaseDate: movie.release_date,
      //     openingText: movie.opening_crawl,
      //   };
      // });

      setMovies(loadedMovies);
    } catch (err) {
      setError({ isError: true, msg: "Sorry we encountered an error" });
    }

    setIsLoading(false);
  };

  // Add Movies [Firebase post req]
  const addMovieHandler = async (movie) => {
    setIsAddMovie(false);
    const response = await fetch(MOVIE_API_URL, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    // console.log(data);
    setIsAddMovie(true);
  };

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && !error && movies.length === 0 && (
          <p>No movies found now !</p>
        )}
        {isLoading && <p>LOADING ...</p>}
        {error && <p>{error.msg}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
